/* NYAM Supabase client — sync profil/pesanan/favorit/voucher.
   Prinsip: localStorage tetap sumber utama (aplikasi jalan offline),
   Supabase dipakai sebagai backup cloud saat sudah dikonfigurasi.
   Hanya memakai ANON key. Tidak ada service role key di frontend. */
(function () {
  const DB = {
    ready: false,
    sb: null,
    _timer: null,

    init() {
      try {
        if (!window.supabase || !window.NYAM_SUPABASE_URL || !window.NYAM_SUPABASE_ANON_KEY) return false;
        this.sb = window.supabase.createClient(
          window.NYAM_SUPABASE_URL,
          window.NYAM_SUPABASE_ANON_KEY
        );
        this.ready = true;
        return true;
      } catch (e) { return false; }
    },

    email() {
      try {
        const u = JSON.parse(localStorage.getItem('nyam_user') || 'null');
        return (u && u.email) || 'tamu@nyam';
      } catch { return 'tamu@nyam'; }
    },

    // Panggil tiap ada perubahan lokal (di-debounce 800ms)
    queueSync() {
      if (!this.ready) return;
      clearTimeout(this._timer);
      this._timer = setTimeout(() => this.pushAll().catch(() => {}), 800);
    },

    async pushAll() {
      if (!this.ready) return;
      const email = this.email();
      const get = (k, d) => { try { const v = localStorage.getItem('nyam_' + k); return v ? JSON.parse(v) : d; } catch { return d; } };
      const user = get('user', null);
      const orders = get('orders', []);
      const favs = get('favs', []);
      const vouchers = get('vouchers', []);

      if (user) {
        await this.sb.from('profiles').upsert({
          email: user.email || email,
          name: user.name || 'Sobat NYAM',
          phone: user.phone || '',
          tier: user.tier || 'biasa',
          points: user.points || 0,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'email' });
      }
      for (const o of orders.slice(0, 20)) {
        await this.sb.from('orders').upsert({
          id: o.id, email: o.email || email, resto: o.resto || 'NYAM',
          items: o.items || [], total: o.total || 0, status: o.status || 1,
          pay: o.pay || 'qris', fleet: o.fleet || 'nyam', addr: o.addr || {},
        }, { onConflict: 'id' });
      }
      await this.sb.from('favorites').delete().eq('email', email);
      if (favs.length) {
        await this.sb.from('favorites').insert(favs.map((product_id) => ({ email, product_id })));
      }
      await this.sb.from('vouchers').delete().eq('email', email);
      if (vouchers.length) {
        await this.sb.from('vouchers').insert(vouchers.map((code) => ({ email, code })));
      }
    },

    // Tarik data cloud saat aplikasi dibuka (merge: cloud menang untuk profil)
    async pullAll() {
      if (!this.ready) return null;
      const email = this.email();
      const out = {};
      const prof = await this.sb.from('profiles').select('*').eq('email', email).maybeSingle();
      if (prof.data) out.user = { name: prof.data.name, email: prof.data.email, phone: prof.data.phone, tier: prof.data.tier, points: prof.data.points };
      const ord = await this.sb.from('orders').select('*').eq('email', email).order('created_at', { ascending: false }).limit(20);
      if (ord.data) {
        out.orders = ord.data.map((r) => ({ id: r.id, items: r.items, total: r.total, status: r.status, resto: r.resto, pay: r.pay, fleet: r.fleet, addr: r.addr, email: r.email }));
      }
      const fav = await this.sb.from('favorites').select('product_id').eq('email', email);
      if (fav.data) out.favs = fav.data.map((r) => r.product_id);
      const vou = await this.sb.from('vouchers').select('code').eq('email', email);
      if (vou.data) out.vouchers = vou.data.map((r) => r.code);
      return out;
    },
  };

  window.NYAM_DB = DB;
})();
