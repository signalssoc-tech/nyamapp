/* NYAM 2.0 — tech icons, landing, login, membership, fleet Gojek/Grab, lacak */
const U = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=600&auto=format&fit=crop`;
const FALLBACK = U('1546069901-ba9599a7e63c');

/* ===== TECH SVG ICONS ===== */
const PATHS = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/>',
  heart:'<path d="M12 20.5C7 16.5 3 13.2 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.7 0 3.3.9 4.3 2.4 1-1.5 2.6-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 3.9-4 7.2-9 11.2Z"/>',
  cart:'<path d="M6 7h15l-1.5 9h-12z"/><path d="M6 7 5 3H2"/><circle cx="9.5" cy="20" r="1.4"/><circle cx="17.5" cy="20" r="1.4"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 5-5.5 8-5.5s6.5 1.5 8 5.5"/>',
  bell:'<path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  pin:'<path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  star:'<path d="m12 3 2.7 5.8 6.3.8-4.6 4.3 1.2 6.1L12 17l-5.6 3 1.2-6.1L3 9.6l6.3-.8z"/>',
  back:'<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>',
  arrow:'<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  trash:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 14h10l1-14"/>',
  wallet:'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M16 13.5h.01"/>',
  box:'<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5 12 12l8-4.5"/><path d="M12 12v9"/>',
  headset:'<path d="M4 13a8 8 0 0 1 16 0"/><rect x="3" y="13" width="4" height="6" rx="2"/><rect x="17" y="13" width="4" height="6" rx="2"/>',
  check:'<path d="m4.5 12.5 5 5 10-11"/>',
  bike:'<circle cx="6" cy="17" r="3.5"/><circle cx="18" cy="17" r="3.5"/><path d="M6 17 9.5 9H15l3 8"/><path d="M9.5 9 8 5H5"/>',
  crown:'<path d="m3 8 4 4 5-6 5 6 4-4-1.5 11h-15z"/>',
  ticket:'<path d="M4 8a2 2 0 0 0 2-2h12a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M14 6v12" stroke-dasharray="2.5 2.5"/>',
  zap:'<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
  shield:'<path d="M12 3 5 6v5c0 5 3.4 8.4 7 10 3.6-1.6 7-5 7-10V6z"/><path d="m9 12 2 2 4-4.5"/>',
  logout:'<path d="M14 4H6v16h8"/><path d="m10 12 9 0"/><path d="m16 8 4 4-4 4"/>',
  chat:'<path d="M4 6h16v10H9l-5 4z"/>',
  gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/>',
  bowl:'<path d="M4 12h16a8 8 0 0 1-16 0Z"/><path d="M9 8c0-2 6-2 6 0"/>',
  fries:'<path d="M7 8 6 21h12l-1-13"/><path d="M8 8V4M12 8V3M16 8V4"/>',
  donut:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  cup:'<path d="M6 4h12l-1.5 16h-9z"/><path d="M6.5 9h11"/>',
};
const ic = (n,s=20,w=2)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round">${PATHS[n]||''}</svg>`;

const CATS = [
  { id:'makan', label:'Makan', icon:'bowl', emoji:'🍛', title:'Lagi laper banget?', sub:'Buat kamu yang butuh makanan beneran.' },
  { id:'ngemil', label:'Ngemil', icon:'fries', emoji:'🍟', title:'Cuma mau ngemil? 👀', sub:'Katanya cuma satu. Biasanya nambah.' },
  { id:'manis', label:'Manis', icon:'donut', emoji:'🍩', title:'Pengen yang manis?', sub:'Sedikit manis nggak pernah salah.' },
  { id:'minum', label:'Minum', icon:'cup', emoji:'🥤', title:'Haus nih?', sub:'Segerin dulu, baru lanjut lagi.' },
];

const EXTRAS = {
  makan:[{n:'Telur',h:5000},{n:'Kerupuk',h:3000},{n:'Nasi ekstra',h:5000},{n:'Sambal ekstra',h:3000}],
  ngemil:[{n:'Saus keju',h:5000},{n:'Mayo',h:3000},{n:'Bumbu pedas lvl 2',h:3000},{n:'Kentang ekstra',h:6000}],
  manis:[{n:'Topping meses',h:4000},{n:'Keju',h:5000},{n:'Cokelat lumer',h:5000},{n:'Krim vanilla',h:4000}],
  minum:[{n:'Es ekstra',h:2000},{n:'Gula aren',h:4000},{n:'Oat milk',h:6000},{n:'Boba',h:5000}],
};

const PRODUCTS = [
  {id:'nasi-goreng',name:'Nasi Goreng',resto:'Warung Makan Kita',cat:'makan',price:18000,rating:4.8,dist:1.2,time:'25–30 mnt',img:U('1512058564366-18510be2db19'),desc:'Nasi goreng smokey dengan telur, ayam suwir, kerupuk, dan sambal yang nampol. Favorit sejuta umat.'},
  {id:'ayam-geprek',name:'Ayam Geprek',resto:'Geprek Mantul',cat:'makan',price:17000,rating:4.9,dist:0.8,time:'20–25 mnt',img:U('1562967914-608f82629710'),desc:'Ayam crispy digeprek bareng sambal bawang pedas. Bisa pilih level, dari santai sampai keringetan.'},
  {id:'ayam-bakar',name:'Ayam Bakar',resto:'Dapur Nyam',cat:'makan',price:22000,rating:4.7,dist:1.5,time:'25–30 mnt',img:U('1598103442097-8b74394b95c6'),desc:'Ayam bakar bumbu meresap sampai ke tulang, disajikan dengan lalapan segar dan sambal terasi.'},
  {id:'rice-bowl',name:'Rice Bowl Ayam',resto:'Bowl.in',cat:'makan',price:25000,rating:4.8,dist:1.1,time:'20–25 mnt',img:U('1546069901-ba9599a7e63c'),desc:'Nasi hangat dengan ayam juicy, telur, dan saus spesial dalam satu mangkuk praktis.'},
  {id:'mie-ayam',name:'Mie Ayam',resto:'Mie Ayam Jogja',cat:'makan',price:15000,rating:4.7,dist:0.9,time:'15–20 mnt',img:U('1585032226651-759b368d7246'),desc:'Mie kenyal dengan topping ayam kecap manis gurih plus pangsit renyah.'},
  {id:'mie-goreng',name:'Mie Goreng Jawa',resto:'Warung Makan Kita',cat:'makan',price:16000,rating:4.6,dist:1.3,time:'20–25 mnt',img:U('1612929633738-8fe44f7ec841'),desc:'Mie goreng gaya Jawa dengan telur orak-arik, sawi, dan bawang goreng melimpah.'},
  {id:'kwetiau',name:'Kwetiau Goreng',resto:'Kwetiau Akang',cat:'makan',price:19000,rating:4.7,dist:2.1,time:'25–30 mnt',img:U('1552611052-33e04de081de'),desc:'Kwetiau licin gurih dimasak dengan api besar, ada bakso, telur, dan tauge.'},
  {id:'seblak',name:'Seblak',resto:'Seblak Nampol',cat:'makan',price:14000,rating:4.6,dist:1.0,time:'15–20 mnt',img:U('1569718212165-3a8278d5f624'),desc:'Kerupuk kenyal dimasak dengan bumbu pedas gurih, topping sosis, ceker, dan telur.'},
  {id:'kentang-goreng',name:'Kentang Goreng',resto:'Ngemil Yuk',cat:'ngemil',price:13000,rating:4.7,dist:0.7,time:'10–15 mnt',img:U('1573080496219-bb080dd4f877'),desc:'Kentang renyah di luar, lembut di dalam. Ditaburi bumbu keju atau balado.'},
  {id:'cireng',name:'Cireng',resto:'Cireng Crispy',cat:'ngemil',price:10000,rating:4.6,dist:0.9,time:'10–15 mnt',img:U('1601050690597-df0568f70950'),desc:'Cireng garing isi ayam suwir pedas, dicocol sambal rujak. Satu kurang, lima pas.'},
  {id:'pisang-goreng',name:'Pisang Goreng',resto:'Pisang Tanduk Mas',cat:'ngemil',price:12000,rating:4.8,dist:1.2,time:'15–20 mnt',img:U('1587734195503-904fca47e0e9'),desc:'Pisang manis digoreng garing, bisa tambah topping cokelat, keju, atau susu.'},
  {id:'roti-bakar',name:'Roti Bakar',resto:'Roti Bakar Malam',cat:'ngemil',price:14000,rating:4.7,dist:1.4,time:'15–20 mnt',img:U('1484723091739-30a097e8f929'),desc:'Roti bakar tebal dengan selai cokelat, keju, atau kacang. Teman begadang terbaik.'},
  {id:'sosis',name:'Sosis Bakar',resto:'Ngemil Yuk',cat:'ngemil',price:15000,rating:4.5,dist:0.8,time:'10–15 mnt',img:U('1612392062631-94dd858cba88'),desc:'Sosis bakar juicy dengan olesan barbeque, jagung manis, atau pedas.'},
  {id:'chicken-wings',name:'Chicken Wings',resto:'Sayapin Aja',cat:'ngemil',price:24000,rating:4.8,dist:1.6,time:'20–25 mnt',img:U('1527477396000-e27163b481c2'),desc:'Sayap ayam crispy dengan saus pilihan: madu, fire, atau garlic parmesan.'},
  {id:'dimsum',name:'Dimsum',resto:'Dimsum Enak',cat:'ngemil',price:18000,rating:4.9,dist:1.1,time:'15–20 mnt',img:U('1496116218417-1a781b1c416c'),desc:'Dimsum ayam juicy isi 4 dengan saus chili oil. Dikukus pas, lembut banget.'},
  {id:'martabak-mini',name:'Martabak Mini',resto:'Martabak Manis Jogja',cat:'ngemil',price:16000,rating:4.7,dist:1.8,time:'20–25 mnt',img:U('1567620905732-2d1ec7ab7445'),desc:'Martabak mini empuk isi 4 dengan topping cokelat, keju, dan kacang.'},
  {id:'keripik',name:'Keripik Pisang',resto:'Oleh-oleh Nyam',cat:'manis',price:12000,rating:4.5,dist:2.0,time:'20–25 mnt',img:U('1566478989036-00eab7057a78'),desc:'Keripik pisang renyah dengan balutan cokelat manis. Nggak bisa berhenti.'},
  {id:'cookies',name:'Cookies',resto:'Oven Kecil',cat:'manis',price:15000,rating:4.8,dist:1.3,time:'15–20 mnt',img:U('1499636136210-6f4ee915583e'),desc:'Cookies renyah di luar, chewy di dalam dengan lelehan chocochips.'},
  {id:'donat',name:'Donat',resto:'Donat Lembut',cat:'manis',price:13000,rating:4.7,dist:0.9,time:'10–15 mnt',img:U('1551024601-bec78aea704b'),desc:'Donat empuk isi 3 dengan glaze cokelat, matcha, dan stroberi.'},
  {id:'brownies',name:'Brownies',resto:'Oven Kecil',cat:'manis',price:17000,rating:4.8,dist:1.3,time:'15–20 mnt',img:U('1606313564200-e75d5e30476c'),desc:'Brownies cokelat pekat yang fudgy, manisnya pas, pahitnya dikit.'},
  {id:'puding',name:'Puding Susu',resto:'Dessert Box Jogja',cat:'manis',price:11000,rating:4.6,dist:1.5,time:'15–20 mnt',img:U('1488477181946-6428a0291777'),desc:'Puding susu lembut dengan saus karamel. Dingin lebih nikmat.'},
  {id:'churros',name:'Churros',resto:'Churros Kita',cat:'manis',price:16000,rating:4.7,dist:1.7,time:'15–20 mnt',img:U('1624371414361-e670edf4898d'),desc:'Churros garing bertabur gula kayu manis dengan cocolan cokelat.'},
  {id:'kacang',name:'Kacang Madu',resto:'Oleh-oleh Nyam',cat:'manis',price:9000,rating:4.5,dist:2.0,time:'20–25 mnt',img:U('1508745049226-5217d737205b'),desc:'Kacang panggang berlapis madu. Manis gurih, teman nonton paling pas.'},
  {id:'wafer',name:'Wafer Cokelat',resto:'Snack Corner',cat:'manis',price:8000,rating:4.4,dist:0.6,time:'10–15 mnt',img:U('1599490659213-e2b9527bd087'),desc:'Wafer renyah berlapis krim cokelat tebal. Klasik tapi nggak pernah gagal.'},
  {id:'es-teh',name:'Es Teh',resto:'Teh Solo Nyam',cat:'minum',price:5000,rating:4.7,dist:0.5,time:'5–10 mnt',img:U('1556679343-c7306c1976bc'),desc:'Es teh manis legit gaya Solo. Segernya nggak ada lawan.'},
  {id:'lemon-tea',name:'Lemon Tea',resto:'Teh Solo Nyam',cat:'minum',price:8000,rating:4.6,dist:0.5,time:'5–10 mnt',img:U('1437418747212-8d9709afab22'),desc:'Teh dicampur lemon asli, manis asem seger. Paling enak diminum dingin.'},
  {id:'kopi-susu',name:'Kopi Susu',resto:'Kopi Nyam',cat:'minum',price:15000,rating:4.9,dist:1.0,time:'10–15 mnt',img:U('1541167760496-1628856ab772'),desc:'Kopi susu gula aren yang creamy. Pahit-manisnya pas banget.'},
  {id:'americano',name:'Americano',resto:'Kopi Nyam',cat:'minum',price:12000,rating:4.6,dist:1.0,time:'10–15 mnt',img:U('1509042239860-f550ce710b93'),desc:'Kopi hitam pekat buat kamu yang butuh fokus. Bisa panas atau dingin.'},
  {id:'matcha',name:'Matcha Latte',resto:'Matcha House',cat:'minum',price:18000,rating:4.8,dist:1.4,time:'10–15 mnt',img:U('1536256263959-770b48d82b0a'),desc:'Matcha premium dicampur susu creamy. Earthy, manis, dan calming.'},
  {id:'thai-tea',name:'Thai Tea',resto:'Thai Tea Kita',cat:'minum',price:11000,rating:4.7,dist:0.8,time:'5–10 mnt',img:U('1541696432-82c6da8ce7bf'),desc:'Thai tea manis creamy dengan aroma khas. Wangi dan nyegerin.'},
  {id:'cokelat',name:'Es Cokelat',resto:'Cokelat Yuk',cat:'minum',price:13000,rating:4.7,dist:1.2,time:'10–15 mnt',img:U('1577805947697-89e18249d767'),desc:'Cokelat pekat dicampur susu, manisnya bikin mood naik lagi.'},
  {id:'milkshake',name:'Milkshake',resto:'Shake It',cat:'minum',price:17000,rating:4.6,dist:1.6,time:'10–15 mnt',img:U('1572490122747-3968b75cc699'),desc:'Milkshake thick dan creamy, rasa cokelat, vanila, atau stroberi.'},
];

const POPULAR = ['Ayam Geprek','Nasi Goreng','Dimsum','Kopi Susu','Seblak'];
const PAYMENTS = [
  {id:'qris',label:'QRIS',sub:'Scan sekali, langsung bayar',icon:'wallet'},
  {id:'gopay',label:'GoPay',sub:'Saldo • 0812••••1234',icon:'wallet'},
  {id:'dana',label:'DANA',sub:'Saldo • 0812••••1234',icon:'wallet'},
  {id:'shopeepay',label:'ShopeePay',sub:'Saldo aktif',icon:'wallet'},
  {id:'kartu',label:'Kartu',sub:'Debit / Kredit •••• 4521',icon:'wallet'},
  {id:'tunai',label:'Tunai',sub:'Bayar ke kurir pas sampai',icon:'wallet'},
];
const FLEETS = [
  {id:'nyam',label:'NYAM Express',desc:'Kurir khusus NYAM • Tercepat',eta:'20–30 mnt',fee:9000,cls:'nyam',mark:'N',badge:'Rekomendasi'},
  {id:'gojek',label:'Gojek',desc:'Diantar GoSend • Lacak di Gojek',eta:'25–35 mnt',fee:11000,cls:'gojek',mark:'G',badge:'Mitra'},
  {id:'grab',label:'Grab',desc:'Diantar GrabExpress • Lacak di Grab',eta:'25–35 mnt',fee:10000,cls:'grab',mark:'G',badge:'Mitra'},
];
const TIERS = [
  {id:'biasa',name:'Biasa',price:0,desc:'Buat coba-coba dulu',ben:['Ongkir normal','Kumpulin poin tiap pesan','Promo harian'],grad:'linear-gradient(135deg,#3a3230,#6b5d54)'},
  {id:'plus',name:'NYAM Plus',price:15000,desc:'Paling laris • balik modal 2x pesan',ben:['Gratis ongkir 4x / bulan','Diskon 10% s.d. 15rb','Cashback poin 2x lipat','Prioritas resto ramai'],grad:'linear-gradient(135deg,#FF6B35,#FF9A3C)'},
  {id:'sultan',name:'NYAM Sultan',price:35000,desc:'Buat yang tiap hari NYAM',ben:['Gratis ongkir 12x / bulan','Diskon 15% s.d. 25rb','Cashback poin 3x lipat','CS prioritas + badge Sultan'],grad:'linear-gradient(135deg,#1B140F,#7a4a12 60%,#FFC857)'},
];

/* ===== STATE ===== */
const store = {
  get(k,d){ try{ const v = localStorage.getItem('nyam_'+k); return v?JSON.parse(v):d }catch{ return d } },
  set(k,v){ localStorage.setItem('nyam_'+k, JSON.stringify(v)) }
};
window.store = store;
let cart = store.get('cart', []);
let favs = store.get('favs', []);
let orders = store.get('orders', []);
let address = store.get('address', {label:'Rumah', detail:'Jl. Contoh No. 12, Jogja'});
let payment = store.get('payment','qris');
let fleet = store.get('fleet','nyam');
let user = store.get('user', null); // {name,email,phone,tier,points}
let vouchers = store.get('vouchers', []);
let userRating = 0;
let detailQty = 1, detailExtras = [];
let activeHomeCat = 'makan';
let catFilter = 'Semua';
let searchQ = '', searchFilter='Semua';
let orderTab = 'berjalan';
let authTab = 'masuk';
let trackTimer = null;
let lacakQ = '';

const $ = (id)=>document.getElementById(id);
function save(){ store.set('cart',cart); store.set('favs',favs); store.set('orders',orders); store.set('address',address); store.set('payment',payment); store.set('fleet',fleet); store.set('user',user); store.set('vouchers',vouchers); if(window.NYAM_DB) window.NYAM_DB.queueSync(); }
function go(h){ location.hash = h; }
function rp(n){ return 'Rp'+Number(n).toLocaleString('id-ID'); }
function prod(id){ return PRODUCTS.find(p=>p.id===id); }
function cartCount(){ return cart.reduce((a,c)=>a+c.qty,0); }
function cartSubtotal(){ return cart.reduce((a,c)=>{ const p=prod(c.id); if(!p) return a; const ex=(c.extras||[]).reduce((s,n)=>{ const e=(EXTRAS[p.cat]||[]).find(x=>x.n===n); return s+(e?e.h:0)},0); return a+(p.price+ex)*c.qty },0); }
function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function toast(msg){ const t=$('toast'); t.innerHTML = `<span style="display:inline-grid;place-items:center;width:22px;height:22px;border-radius:99px;background:var(--orange);color:#fff">${ic('check',13,3)}</span><span>${esc(msg)}</span>`; t.classList.add('show'); clearTimeout(t._x); t._x=setTimeout(()=>t.classList.remove('show'),2000); }
function imgTag(p, extra=''){ return `<img src="${p.img}" alt="${esc(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK}'" ${extra}>`; }
function tier(){ return (user&&user.tier)||'biasa'; }
function memberDisc(sub){
  if(tier()==='plus') return Math.min(15000, Math.round(sub*0.10));
  if(tier()==='sultan') return Math.min(25000, Math.round(sub*0.15));
  return 0;
}
function fleetFee(sub){
  const f = FLEETS.find(x=>x.id===fleet)||FLEETS[0];
  if(sub>=50000) return 0;
  if((tier()==='plus'||tier()==='sultan') && vouchers.includes('ONGKIR-'+tier().toUpperCase())) return 0;
  return f.fee;
}
function totals(){
  const sub = cartSubtotal();
  const disc = memberDisc(sub);
  const ongkir = cart.length? fleetFee(sub) : 0;
  const layanan = cart.length? 2000:0;
  return {sub, disc, ongkir, layanan, total: Math.max(0, sub-disc+ongkir+layanan)};
}

/* ===== NAV CHROME ===== */
const NAVS = [
  {h:'#/', icon:'home', label:'Beranda'},
  {h:'#/cari', icon:'search', label:'Cari'},
  {h:'#/lacak', icon:'bike', label:'Lacak'},
  {h:'#/favorit', icon:'heart', label:'Favorit'},
  {h:'#/keranjang', icon:'cart', label:'Keranjang'},
  {h:'#/profil', icon:'user', label:'Profil'},
];
const HIDDEN_CHROME = ['#/landing','#/masuk'];
function isHiddenChrome(h){ return HIDDEN_CHROME.some(x=>h.startsWith(x)); }
function currentMain(){ const h=location.hash||'#/'; if(h.startsWith('#/cari'))return '#/cari'; if(h.startsWith('#/lacak'))return '#/lacak'; if(h.startsWith('#/favorit'))return '#/favorit'; if(h.startsWith('#/keranjang'))return '#/keranjang'; if(h.startsWith('#/profil'))return '#/profil'; if(h.startsWith('#/membership'))return '#/profil'; return '#/'; }
function paintChrome(){
  const h = location.hash||'#/';
  const hidden = isHiddenChrome(h);
  document.querySelector('.app-shell').classList.toggle('landing-mode', hidden);
  $('bottomnav').style.display = hidden?'none':'';
  if(hidden){ $('mobileTopbar').style.display='none'; $('sidebar').innerHTML=''; $('cartPanel').innerHTML=''; $('cartPanel').classList.remove('has-items'); return; }
  const cur = currentMain();
  $('bottomnav').innerHTML = NAVS.map(n=>{
    const badge = n.h==='#/keranjang' && cartCount()>0 ? `<span class="badge-dot" style="position:absolute;top:0;right:6px">${cartCount()}</span>`:'';
    return `<button class="nav-item ${cur===n.h?'active':''}" onclick="go('${n.h}')"><span class="nav-ic">${ic(n.icon,21)}</span>${n.label}${badge}</button>`;
  }).join('');
  $('sidebar').innerHTML = `<div class="brand"><div class="brand-mark">N</div><div class="brand-name">NYAM<span>.</span></div></div>` +
    NAVS.map(n=>`<button class="side-link ${cur===n.h?'active':''}" onclick="go('${n.h}')"><span class="side-ic">${ic(n.icon,19)}</span>${n.label}${n.h==='#/keranjang'&&cartCount()?` <span style="margin-left:auto;background:var(--orange);color:#fff;font-size:12px;font-weight:800;padding:2px 9px;border-radius:99px">${cartCount()}</span>`:''}</button>`).join('') +
    `<button class="side-link" onclick="go('#/pesanan')"><span class="side-ic">${ic('box',19)}</span>Pesanan saya</button>
     <button class="side-link" onclick="go('#/membership')"><span class="side-ic">${ic('crown',19)}</span>Membership</button>
     <button class="side-link" onclick="go('#/notifikasi')"><span class="side-ic">${ic('bell',19)}</span>Notifikasi</button>
     <div class="side-foot"><div style="position:relative;z-index:1"><div style="font-weight:800">Lagi pengen apa? 😋</div><div style="font-size:13px;color:#CBB9AC;margin:4px 0 10px">Apa pun yang kamu pengenin, cari aja di NYAM.</div><button class="cta" style="padding:11px;font-size:14px" onclick="go('#/cari')">Cari makanan</button></div></div>`;
  const cb = $('cartBadgeTop'); if(cb){ const c=cartCount(); cb.style.display=c?'grid':'none'; cb.textContent=c; cb.classList.remove('pop'); void cb.offsetWidth; if(c)cb.classList.add('pop'); }
  const cp = $('cartPanel');
  if(cart.length && (cur==='#/'||h.includes('kategori')||h.includes('produk'))){
    cp.classList.add('has-items');
    cp.innerHTML = `<h3 style="font-size:17px;margin-bottom:4px">Keranjangmu</h3><p style="font-size:13px;color:var(--muted);margin-bottom:12px">${cartCount()} item • ${rp(cartSubtotal())}</p>` +
      cart.slice(0,4).map(c=>{const p=prod(c.id); if(!p) return ''; return `<div style="display:flex;gap:10px;align-items:center;margin-bottom:10px">${imgTag(p,'style="width:52px;height:52px;border-radius:12px;object-fit:cover"')}<div style="flex:1"><div style="font-weight:800;font-size:13.5px">${esc(p.name)}</div><div style="font-size:12px;color:var(--muted)">${c.qty}× ${rp(p.price)}</div></div></div>`}).join('') +
      (cart.length>4?`<div style="font-size:12.5px;color:var(--muted);margin-bottom:10px">+${cart.length-4} lainnya…</div>`:'') +
      `<button class="cta" onclick="go('#/keranjang')">Lihat keranjang</button>`;
  } else { cp.classList.remove('has-items'); cp.innerHTML=''; }
  const showTop = ['#/','#/cari','#/favorit','#/profil','#/lacak'].some(x=>cur===x) || h.includes('kategori') || h.includes('membership');
  $('mobileTopbar').style.display = showTop ? '' : 'none';
  const mb = $('memberBadgeTop'); if(mb){ mb.style.display = user?'inline-flex':'none'; if(user) mb.innerHTML = `${ic('crown',13)} ${esc((TIERS.find(t=>t.id===tier())||{}).name||'')}`; }
}

/* ===== CARD BUILDERS ===== */
function pCard(p){
  const loved = favs.includes(p.id);
  return `<div class="p-card">
    <div class="p-img" onclick="go('#/produk/${p.id}')" style="cursor:pointer">${imgTag(p)}
      <button class="fav-btn ${loved?'loved':''}" onclick="event.stopPropagation();toggleFav('${p.id}',this)">${ic('heart',16, loved?2.4:2)}</button>
      <span class="time-pill">${ic('clock',12,2.5)} ${p.time}</span>
    </div>
    <div class="p-body">
      <div class="p-name" onclick="go('#/produk/${p.id}')" style="cursor:pointer">${esc(p.name)}</div>
      <div class="p-resto">${esc(p.resto)}</div>
      <div class="p-meta"><span style="color:#F5A623;display:inline-flex">${ic('star',13,2.4)}</span> <b>${p.rating}</b> · ${String(p.dist).replace('.',',')} km</div>
      <div class="p-foot"><span class="price">${rp(p.price)}</span><button class="add-btn" onclick="quickAdd('${p.id}')" aria-label="Tambah">${ic('plus',17,3)}</button></div>
    </div>
  </div>`;
}
function skeletonCards(n=4){
  return Array.from({length:n}).map(()=>`<div class="p-card"><div class="skel" style="aspect-ratio:4/3"></div><div class="p-body"><div class="skel" style="height:14px;width:70%;margin-bottom:8px"></div><div class="skel" style="height:12px;width:50%;margin-bottom:12px"></div><div style="display:flex;justify-content:space-between;align-items:center"><div class="skel" style="height:16px;width:60px"></div><div class="skel" style="height:36px;width:36px;border-radius:12px"></div></div></div></div>`).join('');
}

/* ===== ACTIONS ===== */
function quickAdd(id){ addToCart(id,1,[]); toast('+1 '+prod(id).name); paintChrome(); }
function addToCart(id,qty,extras,note=''){
  const key = extras.slice().sort().join('|');
  const found = cart.find(c=>c.id===id && (c.extras||[]).slice().sort().join('|')===key);
  if(found) found.qty+=qty; else cart.push({id,qty,extras:extras.slice(),note});
  save(); paintChrome();
}
function toggleFav(id,el){
  const i = favs.indexOf(id);
  if(i>=0){ favs.splice(i,1); toast('Dihapus dari favorit'); }
  else { favs.push(id); toast('Disimpan ke favorit'); }
  save(); paintChrome();
  if(el){ el.classList.remove('loved'); void el.offsetWidth; if(favs.includes(id))el.classList.add('loved'); }
  if(currentMain()==='#/favorit') render();
}
function setQty(idx,d){ cart[idx].qty+=d; if(cart[idx].qty<=0) cart.splice(idx,1); save(); paintChrome(); render(); }
function removeItem(idx){ cart.splice(idx,1); save(); paintChrome(); render(); toast('Dihapus dari keranjang'); }

/* ===== ROUTER ===== */
window.addEventListener('hashchange', render);
window.go = go; window.quickAdd=quickAdd; window.toggleFav=toggleFav; window.setQty=setQty; window.removeItem=removeItem;

function render(){
  clearInterval(trackTimer);
  paintChrome();
  const app = $('app');
  const h = location.hash || '#/landing';
  $('stickyCta').style.display='none';
  window.scrollTo({top:0});

  if(h==='#/landing'||h===''||h==='#') return viewLanding(app);
  if(h==='#/') return viewHome(app);
  if(h.startsWith('#/masuk')) return viewMasuk(app);
  if(h.startsWith('#/membership')) return viewMembership(app);
  if(h.startsWith('#/lacak')) return viewLacak(app);
  if(h.startsWith('#/kategori/')) return viewKategori(app, h.split('/')[2]);
  if(h.startsWith('#/cari')) return viewCari(app);
  if(h.startsWith('#/produk/')) return viewDetail(app, h.split('/')[2]);
  if(h.startsWith('#/keranjang')) return viewKeranjang(app);
  if(h.startsWith('#/checkout')) return viewCheckout(app);
  if(h.startsWith('#/tracking')) return viewTracking(app);
  if(h.startsWith('#/selesai')) return viewSelesai(app);
  if(h.startsWith('#/favorit')) return viewFavorit(app);
  if(h.startsWith('#/pesanan')) return viewPesanan(app);
  if(h.startsWith('#/profil')) return viewProfil(app);
  if(h.startsWith('#/notifikasi')) return viewNotif(app);
  return viewLanding(app);
}

/* ================= LANDING ================= */
function viewLanding(app){
  const rekom = [...PRODUCTS].sort((a,b)=>b.rating-a.rating).slice(0,3);
  app.innerHTML = `<div class="page">
    <div class="landing-nav">
      <div class="logo" style="font-size:24px">NYAM<span>.</span></div>
      <div style="display:flex;gap:8px">
        <button class="chip" onclick="go('#/lacak')">${ic('bike',16)} Lacak</button>
        <button class="chip" onclick="go('#/masuk')">Masuk</button>
        <button class="chip active" onclick="go('#/')">Pesan ${ic('arrow',15,2.5)}</button>
      </div>
    </div>

    <div class="landing-hero">
      <div>
        <span class="eyebrow"><span class="dot"></span> 1.200+ RESTO DI JOGJA • BUKA SAMPAI MALAM</span>
        <h1>Lagi pengen <span class="grad-text">apa?</span><br>Ketemu dalam 20 menit.</h1>
        <p class="sub">Apa pun yang lagi kamu pengenin, cari aja di NYAM. Makan berat, ngemil, yang manis-manis, sampai yang seger — lengkap dengan kurir <b>NYAM Express, Gojek,</b> atau <b>Grab</b> pilihanmu.</p>
        <div class="landing-cta">
          <button class="btn btn-primary" onclick="go('#/')">${ic('search',18)} Langsung pesan</button>
          <button class="btn btn-dark" onclick="go('#/masuk')">${ic('user',18)} Masuk / Daftar</button>
        </div>
        <div class="landing-stats">
          <div class="stat-chip"><b>50rb+</b><span>pengguna aktif</span></div>
          <div class="stat-chip"><b>4.9 ${ic('star',12,2.5)}</b><span>rating aplikasi</span></div>
          <div class="stat-chip"><b>~22 mnt</b><span>rata-rata sampai</span></div>
        </div>
      </div>
      <div class="phone-mock">
        <div class="phone-screen">
          <div style="display:flex;align-items:center;justify-content:space-between"><b>NYAM.</b><span class="chip active" style="padding:6px 12px;font-size:12px">📍 Jogja</span></div>
          <div style="font-weight:800;font-size:19px;margin-top:10px">Lagi pengen apa?</div>
          <div class="searchbar" style="margin-top:8px">${ic('search',17)}<input placeholder="Cari makanan, minuman..." disabled></div>
          <div class="mock-row">${rekom.map(p=>`<div class="mock-card">${imgTag(p)}<div style="font-weight:800;font-size:12px;margin-top:6px">${esc(p.name)}</div><div style="font-size:11px;color:var(--muted)">⭐ ${p.rating} • ${rp(p.price)}</div></div>`).join('')}</div>
          <button class="cta" style="margin-top:10px;padding:13px;font-size:14px" onclick="go('#/')">Buka aplikasinya ${ic('arrow',16,2.5)}</button>
        </div>
      </div>
    </div>

    <div class="landing-section">
      <h2>Kenapa pada pindah ke NYAM?</h2>
      <p class="desc">Cepat, hangat, dan nggak ribet. Kayak teman yang paham kamu lagi pengen apa.</p>
      <div class="feat-grid">
        ${[
          ['zap','Cari 5 detik ketemu','Search realtime + filter Terdekat, Rating tertinggi, Tercepat.'],
          ['bike','Bebas pilih kurir','NYAM Express, Gojek, atau Grab. Lacak live sampai depan pintu.'],
          ['crown','Membership hemat','Plus & Sultan: gratis ongkir, diskon, cashback poin tiap pesan.'],
          ['shield','Pesanan aman','Foto makanan asli, harga jelas, CS siap bantu kapan aja.'],
          ['ticket','Voucher tiap hari','Gratis ongkir s.d. 10rb + cashback member otomatis.'],
          ['bell','Notifikasi real-time','Pesanan diterima, disiapin, diantar — kabar terus.'],
        ].map(f=>`<div class="feat"><div class="feat-ic">${ic(f[0],22)}</div><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join('')}
      </div>
    </div>

    <div class="landing-section">
      <h2>Diantar siapa? Kamu yang milih.</h2>
      <p class="desc">Semua mitra resmi. Tinggal pilih di checkout.</p>
      <div class="partner-bar">
        <div class="partner"><span class="fleet-logo nyam" style="width:38px;height:38px;border-radius:12px">N</span> NYAM Express <span class="status-pill orange">Tercepat</span></div>
        <div class="partner"><span class="fleet-logo gojek" style="width:38px;height:38px;border-radius:12px">G</span> Gojek <span class="status-pill green">GoSend</span></div>
        <div class="partner"><span class="fleet-logo grab" style="width:38px;height:38px;border-radius:12px">G</span> Grab <span class="status-pill green">GrabExpress</span></div>
      </div>
    </div>

    <div class="landing-section">
      <h2>Member makin hemat 🧡</h2>
      <p class="desc">NYAM Plus 15rb/bln balik modal cuma 2x pesan.</p>
      <div class="tier-grid">${TIERS.map(t=>`<div class="tier ${t.id==='plus'?'pop':''}"><span class="fleet-badge ${t.id==='biasa'?'':'green'}">${t.id==='plus'?'PALING LARIS':t.name.toUpperCase()}</span><h3 style="margin:6px 0 2px">${t.name} ${t.price?'• '+rp(t.price)+'/bln':'• Gratis'}</h3><p style="font-size:13px;color:var(--muted)">${t.desc}</p><ul style="margin:10px 0 12px 18px;font-size:13.5px;color:#5b4f48">${t.ben.map(b=>`<li>${b}</li>`).join('')}</ul><button class="cta ${t.id==='biasa'?'secondary':''}" style="padding:12px;font-size:14px" onclick="go('#/membership')">Lihat membership</button></div>`).join('')}</div>
    </div>

    <div class="landing-section">
      <h2>Kata mereka yang udah NYAM</h2>
      <div class="testi">
        ${[['Sinta • Jogja','“Gila sih, cari seblak 5 detik ketemu. Kurir Gojek-nya bisa dilacak live!”'],['Bimo • Sleman','“Member Plus worth it banget. Ongkir gratis terus, poinnya jadi diskon.”'],['Rara • Bantul','“UI-nya paling cakep sejauh ini. Tracking-nya jelas, makanannya fotonya asli.”']].map(t=>`<div class="testi-card"><div style="display:flex;gap:3px;color:#F5A623;align-items:center">${ic('star',16,2.4)}${ic('star',16,2.4)}${ic('star',16,2.4)}${ic('star',16,2.4)}${ic('star',16,2.4)}</div><p style="font-size:14px;margin:8px 0;color:#3d332c">${t[1]}</p><b style="font-size:13px">${t[0]}</b></div>`).join('')}
      </div>
    </div>

    <div class="landing-section">
      <div class="member-hero">
        <h2 style="color:#fff">Laper jangan ditunda. 😋</h2>
        <p style="color:#E9D5C3;margin-top:6px">Masuk buat pakai poin member, atau langsung pesan sebagai tamu.</p>
        <div class="landing-cta">
          <button class="btn btn-primary" onclick="go('#/')">Pesan sekarang ${ic('arrow',17,2.5)}</button>
          <button class="btn btn-white" onclick="go('#/masuk')">Masuk dulu</button>
          <button class="btn btn-white" onclick="go('#/lacak')">Lacak pesanan</button>
        </div>
      </div>
    </div>
    <div class="landing-footer">NYAM • Dibuat dengan 🧡 di Jogja • NYAM Express • Gojek • Grab</div>
  </div>`;
}

/* ================= AUTH ================= */
function viewMasuk(app){
  app.innerHTML = `<div class="page">
    <div class="landing-nav"><button class="chip" onclick="go('#/landing')">${ic('back',16)} Kembali</button><div class="logo" style="font-size:22px">NYAM<span>.</span></div><button class="chip active" onclick="go('#/')">Langsung pesan</button></div>
    <div class="auth-wrap">
      <div class="auth-promo">
        <span class="eyebrow"><span class="dot"></span> MEMBER DAPAT LEBIH</span>
        <h2 style="font-size:30px;letter-spacing:-1px;margin:12px 0 8px">Masuk sekali,<br>hemat tiap hari.</h2>
        <p style="color:#E9D5C3;font-size:14px;line-height:1.6">Gratis ongkir, diskon member, poin cashback, dan lacak pesanan Gojek / Grab dalam satu akun.</p>
        <div style="display:flex;gap:8px;margin-top:16px;position:relative;z-index:1;flex-wrap:wrap">
          <span class="chip">${ic('crown',15)} Poin x3 Sultan</span>
          <span class="chip">${ic('bike',15)} Gojek + Grab</span>
          <span class="chip">${ic('shield',15)} Aman</span>
        </div>
      </div>
      <div class="auth-card">
        <h1 style="font-size:24px;letter-spacing:-.5px">Halo, selamat datang! 👋</h1>
        <p style="color:var(--muted);font-size:13.5px;margin-top:4px">${authTab==='masuk'?'Masuk buat pakai poin & voucher membermu.':'Daftar 30 detik, langsung dapat voucher ongkir.'}</p>
        <div class="auth-tabs"><button class="${authTab==='masuk'?'on':''}" onclick="authTab='masuk';render()">Masuk</button><button class="${authTab==='daftar'?'on':''}" onclick="authTab='daftar';render()">Daftar</button></div>
        ${authTab==='daftar'?`<div class="field"><label>Nama panggilan</label><div class="inp-wrap">${ic('user',18)}<input id="aName" placeholder="Contoh: Sinta"></div></div>`:''}
        <div class="field"><label>Email atau no. HP</label><div class="inp-wrap">${ic('chat',18)}<input id="aId" placeholder="sinta@mail.com / 0812..."></div></div>
        <div class="field"><label>Kata sandi</label><div class="inp-wrap">${ic('shield',18)}<input id="aPw" type="password" placeholder="Minimal 6 karakter"><button onclick="const i=document.getElementById('aPw');i.type=i.type==='password'?'text':'password'" style="font-size:13px;font-weight:800;color:var(--orange)">Lihat</button></div></div>
        <button class="cta" onclick="doAuth()">${authTab==='masuk'?'Masuk':'Buat akun'} ${ic('arrow',17,2.5)}</button>
        <div class="divider">atau lanjut dengan</div>
        <button class="cta secondary" onclick="doGoogle()"> <span style="font-weight:800;background:linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853);-webkit-background-clip:text;background-clip:text;color:transparent">G</span> Lanjut dengan Google</button>
        <button class="cta ghost" style="margin-top:8px" onclick="go('#/')">Lewati dulu, langsung pesan</button>
        <p style="font-size:11.5px;color:var(--muted);text-align:center;margin-top:12px">Dengan masuk kamu setuju dengan Syarat & Ketentuan NYAM.</p>
      </div>
    </div>
  </div>`;
}
window.doAuth = ()=>{
  const id = (document.getElementById('aId')||{}).value||'';
  const nm = (document.getElementById('aName')||{}).value||'';
  if(id.trim().length<4){ toast('Isi email / no. HP dulu ya'); return; }
  const name = nm.trim() || id.split('@')[0] || 'Sobat NYAM';
  user = user || {name, email:id, phone:'', tier:'biasa', points:120};
  user.name = name; user.email = id;
  if(authTab==='daftar' && !vouchers.includes('ONGKIR-BIASA')) vouchers.push('ONGKIR-BIASA');
  save(); toast('Halo, '+name+'! Selamat NYAM'); go('#/');
};
window.doGoogle = ()=>{
  user = user || {name:'Sobat NYAM', email:'sobatnyam@gmail.com', phone:'', tier:'biasa', points:120};
  save(); toast('Masuk dengan Google berhasil'); go('#/');
};
window.keluar = ()=>{ user=null; save(); toast('Kamu udah keluar. Dadah!'); go('#/landing'); };

/* ================= MEMBERSHIP ================= */
function viewMembership(app){
  const t = tier();
  const cur = TIERS.find(x=>x.id===t);
  const pts = (user&&user.points)||0;
  const nextAt = 500, pct = Math.min(100, Math.round(pts/nextAt*100));
  app.innerHTML = `<div class="page">
    <div class="page-head"><button class="back" onclick="go('#/profil')">${ic('back',19)}</button><div><h1>NYAM Membership</h1><p>Makin sering pesan, makin hemat 🧡</p></div></div>
    <div class="member-hero">
      <div style="display:flex;align-items:center;gap:10px;position:relative;z-index:1"><span style="width:46px;height:46px;border-radius:14px;background:rgba(255,255,255,.15);display:grid;place-items:center;color:var(--yellow)">${ic('crown',24)}</span><div><b>${user?esc(user.name):'Sobat NYAM'}</b><div style="font-size:13px;color:#FFD9A8">${cur.name} • ${pts} poin</div></div><span class="fleet-badge green" style="margin-left:auto">${t==='biasa'?'GRATIS':t.toUpperCase()}</span></div>
      <div class="progress" style="position:relative;z-index:1"><div style="width:${pct}%"></div></div>
      <div style="font-size:12.5px;color:#E9D5C3;margin-top:6px;position:relative;z-index:1">${pts}/${nextAt} poin menuju voucher gratis ongkir ${!user?'• <button style="text-decoration:underline;font-weight:800;color:#fff" onclick="go(\'#/masuk\')">masuk dulu</button>':''}</div>
    </div>
    <h3 style="margin:16px 0 4px">Pilih paketmu</h3>
    <div class="tier-grid">${TIERS.map(x=>`<div class="tier ${x.id===t?'current':''} ${x.id==='plus'?'pop':''}">
      ${x.id==='plus'?'<span class="fleet-badge">PALING LARIS</span>':''}
      ${x.id===t?'<span class="fleet-badge green">PAKETMU</span>':''}
      <h3 style="margin:6px 0 2px">${x.name}</h3><b style="font-size:18px">${x.price?rp(x.price)+'/bln':'Gratis'}</b>
      <p style="font-size:12.5px;color:var(--muted);margin:4px 0">${x.desc}</p>
      <ul style="margin:8px 0 12px 18px;font-size:13px;color:#5b4f48">${x.ben.map(b=>`<li>${b}</li>`).join('')}</ul>
      ${x.id===t?`<button class="cta secondary" style="padding:12px;font-size:14px" disabled>Aktif ✅</button>`:`<button class="cta ${x.id==='biasa'?'secondary':''}" style="padding:12px;font-size:14px" onclick="ambilTier('${x.id}')">${x.price?'Ambil '+x.name: 'Pakai Gratis'}</button>`}
    </div>`).join('')}</div>
    <h3 style="margin:16px 0 8px">Voucher kamu 🎟️</h3>
    ${(vouchers.length?vouchers:['ONGKIR-BIASA']).map(v=>`<div class="voucher"><span class="cut">${ic('ticket',24)}</span><div style="flex:1"><b style="font-size:14px">${v}</b><div style="font-size:12.5px;color:var(--muted)">Gratis ongkir s.d. 10rb • min. belanja 20rb</div></div><button class="chip active" onclick="toast('Voucher ${v} dipakai di checkout')">Pakai</button></div>`).join('')}
  </div>`;
}
window.ambilTier = (id)=>{
  if(!user){ toast('Masuk dulu yuk'); go('#/masuk'); return; }
  user.tier = id; user.points = (user.points||0)+50;
  if(!vouchers.includes('ONGKIR-'+id.toUpperCase())) vouchers.push('ONGKIR-'+id.toUpperCase());
  save(); toast(id==='biasa'?'Paket gratis aktif':'Hore! '+id+' aktif 🎉'); render();
};

/* ================= HOME ================= */
function catPill(active){
  return `<div class="cat-row">`+CATS.map(c=>`<button class="cat ${active===c.id?'active':''}" onclick="setHomeCat('${c.id}')"><span class="cat-ic">${ic(c.icon,21)}</span>${c.label}</button>`).join('')+`</div>`;
}
window.setHomeCat = (id)=>{ activeHomeCat=id; render(); setTimeout(()=>{ const el=document.getElementById('sec-'+id); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); },50); };

function viewHome(app){
  const rekom = [...PRODUCTS].sort((a,b)=>b.rating-a.rating).slice(0,6);
  const byCat = (c)=>PRODUCTS.filter(p=>p.cat===c).slice(0,5);
  app.innerHTML = `<div class="page">
    <div class="hero"><h1>Lagi pengen <em>apa?</em></h1><p>Apa pun yang lagi kamu pengenin, cari aja di NYAM.</p>
      ${user?`<button class="chip" style="margin-top:10px" onclick="go('#/membership')">${ic('crown',15)} ${esc(user.name)} • ${tier().toUpperCase()} • ${(user.points||0)} poin</button>`:`<button class="chip" style="margin-top:10px" onclick="go('#/masuk')">${ic('user',15)} Masuk biar dapat poin & voucher</button>`}
      <div class="searchbar">${ic('search',19)}<input id="homeSearch" placeholder="Cari makanan, minuman, atau apa aja..." onkeydown="if(event.key==='Enter'){searchQ=this.value;go('#/cari')}"><button class="search-go" onclick="searchQ=document.getElementById('homeSearch').value;go('#/cari')">${ic('arrow',19)}</button></div>
    </div>
    ${catPill(activeHomeCat)}
    <div class="promo"><div style="position:relative;z-index:1"><span class="promo-tag">${ic('zap',13,2.5)} PROMO MEMBER</span><h3>Gratis ongkir + diskon Plus</h3><p>Upgrade NYAM Plus 15rb/bln. Balik modal 2x pesan!</p><div style="display:flex;gap:8px;margin-top:10px"><button class="btn btn-primary" style="padding:10px 16px;font-size:13.5px" onclick="go('#/membership')">Jadi member</button><button class="btn btn-white" style="padding:10px 16px;font-size:13.5px" onclick="go('#/lacak')">Lacak pesanan</button></div></div></div>
    <div class="section"><div class="sec-head"><div><h2>Lagi banyak dipesan 🔥</h2><p>Yang lain pada suka, kamu kapan?</p></div><button class="link-lihat" onclick="go('#/kategori/makan')">Lihat ${ic('arrow',14,2.5)}</button></div>
      <div class="h-scroll">${rekom.map(pCard).join('')}</div></div>
    ${CATS.map(c=>{
      const list = byCat(c.id);
      const heads = {makan:['Laper banget?','Buat kamu yang butuh makanan beneran.'],ngemil:['Cuma mau ngemil? 👀','Katanya cuma satu. Biasanya nambah.'],manis:['Pengen yang manis?','Sedikit manis nggak pernah salah.'],minum:['Haus nih?','Segerin dulu, yuk.']};
      return `<div class="section" id="sec-${c.id}"><div class="sec-head"><div><h2>${heads[c.id][0]}</h2><p>${heads[c.id][1]}</p></div><button class="link-lihat" onclick="go('#/kategori/${c.id}')">Lihat ${ic('arrow',14,2.5)}</button></div>
      <div class="h-scroll">${list.map(pCard).join('')}</div></div>`;
    }).join('')}
  </div>`;
}

function viewKategori(app, catId){
  const c = CATS.find(x=>x.id===catId) || CATS[0];
  const filters = ['Semua','Terdekat','Rating tertinggi','Harga terendah','Tercepat'];
  app.innerHTML = `<div class="page">
    <div class="page-head"><button class="back" onclick="go('#/')">${ic('back',19)}</button><div><h1>${c.emoji} ${c.label}</h1><p>${c.title} ${c.sub}</p></div></div>
    <div class="searchbar">${ic('search',19)}<input id="kf" placeholder="Cari di ${c.label.toLowerCase()}..." value="${esc(searchQ)}" oninput="searchQ=this.value;refreshKategoriList('${c.id}')"><button class="search-go" onclick="refreshKategoriList('${c.id}')">${ic('arrow',18)}</button></div>
    <div class="filter-row">${filters.map(f=>`<button class="chip ${catFilter===f?'active':''}" onclick="catFilter='${f}';render()">${f}</button>`).join('')}</div>
    <div class="grid2" id="klist">${skeletonCards(6)}</div>
  </div>`;
  setTimeout(()=>refreshKategoriList(c.id, true), 450);
}
window.refreshKategoriList = (catId)=>{
  const el = document.getElementById('klist'); if(!el) return;
  let list = PRODUCTS.filter(p=>p.cat===catId);
  if(searchQ.trim()){ const q=searchQ.toLowerCase(); list=list.filter(p=>(p.name+' '+p.resto).toLowerCase().includes(q)); }
  if(catFilter==='Terdekat') list=[...list].sort((a,b)=>a.dist-b.dist);
  if(catFilter==='Rating tertinggi') list=[...list].sort((a,b)=>b.rating-a.rating);
  if(catFilter==='Harga terendah') list=[...list].sort((a,b)=>a.price-b.price);
  if(catFilter==='Tercepat') list=[...list].sort((a,b)=>parseInt(a.time)-parseInt(b.time));
  if(!list.length){ el.innerHTML = `<div class="empty" style="grid-column:1/-1"><div class="big">🍽️</div><h3>Ups, nggak ketemu</h3><p>Coba kata lain atau lihat kategori lain ya.</p><button class="cta" style="max-width:220px;margin:0 auto" onclick="searchQ='';catFilter='Semua';render()">Coba lagi</button></div>`; return; }
  el.innerHTML = list.map(pCard).join('');
};

function viewCari(app){
  app.innerHTML = `<div class="page">
    <div class="page-head"><button class="back" onclick="go('#/')">${ic('back',19)}</button><div style="flex:1"><h1>Cari</h1><p>Mau cari apa?</p></div></div>
    <div class="searchbar">${ic('search',19)}<input id="sq" placeholder="Mau cari apa?" value="${esc(searchQ)}" oninput="searchQ=this.value;refreshSearch()"><button class="search-go" onclick="refreshSearch()">${ic('arrow',18)}</button></div>
    <div id="sbody" style="margin-top:6px"></div>
  </div>`;
  setTimeout(()=>refreshSearch(),50);
}
window.refreshSearch = ()=>{
  const el = document.getElementById('sbody'); if(!el) return;
  const q = searchQ.trim().toLowerCase();
  if(!q){
    el.innerHTML = `<div style="margin-top:14px"><h3 style="font-size:16px">Yang lagi kamu pengenin apa? 🤔</h3>
    <p style="font-size:13.5px;color:var(--muted);margin:6px 0 4px">Pencarian populer</p>
    <div class="search-pop">${POPULAR.map(p=>`<button class="chip" onclick="searchQ='${p}';render()">🔥 ${p}</button>`).join('')}</div>
    <p style="font-size:13.5px;color:var(--muted);margin:14px 0 4px">Atau pilih mood kamu</p>
    <div class="grid2">${CATS.map(c=>`<button class="card" style="text-align:left" onclick="go('#/kategori/${c.id}')"><div style="font-size:30px">${c.emoji}</div><div style="font-weight:800;margin-top:6px">${c.label}</div><div style="font-size:12.5px;color:var(--muted)">${c.title}</div></button>`).join('')}</div></div>`;
    return;
  }
  let list = PRODUCTS.filter(p=>(p.name+' '+p.resto).toLowerCase().includes(q));
  if(searchFilter==='Makanan') list=list.filter(p=>p.cat!=='minum');
  if(searchFilter==='Minuman') list=list.filter(p=>p.cat==='minum');
  const tabs = ['Semua','Makanan','Minuman','Restoran'];
  let body='';
  if(searchFilter==='Restoran'){
    const restos=[...new Set(PRODUCTS.filter(p=>(p.name+' '+p.resto).toLowerCase().includes(q)).map(p=>p.resto))];
    body = restos.length? restos.map(r=>{ const items=PRODUCTS.filter(p=>p.resto===r); return `<div class="card" style="margin-bottom:10px"><div style="font-weight:800">🍽️ ${esc(r)}</div><div style="font-size:13px;color:var(--muted)">${items.length} menu</div><div class="grid2" style="margin-top:10px">${items.map(pCard).join('')}</div></div>`}).join('') : `<div class="empty"><div class="big">🔍</div><h3>Nggak ketemu nih</h3><p>Coba kata kunci lain ya.</p></div>`;
  } else {
    body = list.length? `<p style="font-size:13.5px;color:var(--muted);margin:10px 0">Hasil untuk “<b style="color:var(--dark)">${esc(searchQ)}</b>” • ${list.length} ketemu</p><div class="grid2">${list.map(pCard).join('')}</div>`
    : `<div class="empty"><div class="big">🍜</div><h3>Ups, nggak ketemu</h3><p>“${esc(searchQ)}” belum ada. Coba yang lain?</p><div class="search-pop" style="justify-content:center">${POPULAR.map(p=>`<button class="chip" onclick="searchQ='${p}';render()">${p}</button>`).join('')}</div></div>`;
  }
  el.innerHTML = `<div class="filter-row" style="margin-top:10px">${tabs.map(t=>`<button class="chip ${searchFilter===t?'active':''}" onclick="searchFilter='${t}';refreshSearch()">${t}</button>`).join('')}</div>`+body;
};

/* ================= LACAK ================= */
function viewLacak(app){
  const o = orders.find(x=>x.id.toLowerCase()===lacakQ.trim().toLowerCase());
  app.innerHTML = `<div class="page">
    <div class="page-head"><button class="back" onclick="go('#/')">${ic('back',19)}</button><div><h1>Lacak pesanan</h1><p>Masukin ID pesananmu, pantau live 🛵</p></div></div>
    <div class="lacak-hero"><b style="position:relative;z-index:1">Cek status kirimanmu</b><p style="font-size:13px;color:#E9D5C3;position:relative;z-index:1">Contoh ID: ${orders[0]?esc(orders[0].id):'NYM123456'}</p>
      <div class="searchbar" style="position:relative;z-index:1">${ic('search',18)}<input id="lq" placeholder="Contoh: NYM482913" value="${esc(lacakQ)}" oninput="lacakQ=this.value"><button class="search-go" style="background:var(--orange)" onclick="lacakQ=document.getElementById('lq').value;render()">${ic('arrow',18)}</button></div>
    </div>
    ${lacakQ.trim()? (o? `<div class="order-card" style="margin-top:12px"><div style="display:flex;gap:12px;align-items:center"><span class="fleet-logo ${(FLEETS.find(f=>f.id===o.fleet)||FLEETS[0]).cls}" style="width:46px;height:46px">${(FLEETS.find(f=>f.id===o.fleet)||FLEETS[0]).mark}</span><div style="flex:1"><b>${esc(o.id)}</b><div style="font-size:12.5px;color:var(--muted)">${esc(o.resto)} • ${rp(o.total)} • ${(FLEETS.find(f=>f.id===o.fleet)||FLEETS[0]).label}</div></div></div><button class="cta" style="margin-top:10px;padding:13px" onclick="go('#/tracking/${o.id}')">Buka tracking live ${ic('arrow',16,2.5)}</button></div>`
      : `<div class="empty"><div class="big">🔍</div><h3>ID nggak ketemu</h3><p>Coba cek lagi ID-nya ya. Contoh: ${orders[0]?esc(orders[0].id):'NYM...'}</p></div>`)
    : (orders.length? `<h3 style="margin:14px 0 8px">Pesanan terakhirmu</h3>${orders.slice(0,4).map(x=>`<button class="order-card" style="width:100%;text-align:left" onclick="go('#/tracking/${x.id}')"><b>${esc(x.id)}</b><div style="font-size:12.5px;color:var(--muted)">${esc(x.resto)} • ${rp(x.total)} • ${x.status>=5?'Sampai ✅':'Jalan 🛵'}</div></button>`).join('')}` : `<div class="empty"><div class="big">🛵</div><h3>Belum ada pesanan</h3><p>Yuk pesan dulu, terus lacak di sini.</p><button class="cta" style="max-width:240px;margin:0 auto" onclick="go('#/')">Pesan sekarang</button></div>`)}
  </div>`;
}

function viewDetail(app, id){
  const p = prod(id);
  if(!p){ app.innerHTML = `<div class="page"><div class="empty"><div class="big">😅</div><h3>Ups, ada sedikit masalah.</h3><p>Tenang, coba lagi ya.</p><button class="cta" onclick="go('#/')">Coba lagi</button></div></div>`; return; }
  detailQty = 1; detailExtras = [];
  const extras = EXTRAS[p.cat]||[];
  app.innerHTML = `<div class="page">
    <div class="detail-hero">${imgTag(p,'style="width:100%;height:320px;object-fit:cover"')}
      <div class="detail-top"><button class="back" onclick="history.back()">${ic('back',19)}</button><button class="back" style="color:${favs.includes(p.id)?'#FF3B5C':''}" onclick="toggleFav('${p.id}',this)">${ic('heart',19)}</button></div>
    </div>
    <div class="detail-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px"><h1>${esc(p.name)}</h1><div class="price" style="font-size:19px;white-space:nowrap">${rp(p.price)}</div></div>
      <div class="resto-line">${esc(p.resto)}</div>
      <div class="stat-row">
        <div class="stat"><b><span style="color:#F5A623">${ic('star',14,2.4)}</span> ${p.rating}</b><span>Rating</span></div>
        <div class="stat"><b>${ic('pin',14)} ${String(p.dist).replace('.',',')} km</b><span>Jarak</span></div>
        <div class="stat"><b>${ic('clock',14)} ${p.time}</b><span>Sampai</span></div>
      </div>
      <p class="desc">${esc(p.desc)}</p>
      <h3 style="font-size:16px;margin-bottom:8px">Tambahkan? ✨</h3>
      <div id="exlist">${extras.map((e,i)=>`<button class="extra-opt" id="ex-${i}" onclick="toggleExtra(${i},'${esc(e.n)}')"><span><b>+ ${esc(e.n)}</b><br><small>${rp(e.h)}</small></span><span id="ex-ic-${i}" style="color:var(--muted)">${ic('plus',19)}</span></button>`).join('')}</div>
      <h3 style="font-size:16px;margin:14px 0 4px">Catatan</h3>
      <input class="note-input" id="dnote" placeholder="Contoh: sambalnya dipisah ya...">
      <div class="qty-row"><button class="qty-btn" onclick="dQty(-1)">${ic('minus',18)}</button><span class="qty-num" id="dq">1</span><button class="qty-btn" onclick="dQty(1)">${ic('plus',18)}</button><span style="margin-left:auto;font-size:13px;color:var(--muted)">Stok aman ✅</span></div>
    </div>
  </div>`;
  const bar = $('stickyCta');
  bar.style.display='';
  const paint = ()=>{
    const exSum = detailExtras.reduce((s,n)=>{ const e=extras.find(x=>x.n===n); return s+(e?e.h:0)},0);
    bar.innerHTML = `<button class="cta" onclick="confirmDetail('${p.id}')">${ic('cart',19)} Tambah ke keranjang · ${rp((p.price+exSum)*detailQty)}</button>`;
    const dq=$('dq'); if(dq)dq.textContent=detailQty;
  };
  window.dQty = (d)=>{ detailQty=Math.max(1,Math.min(9,detailQty+d)); paint(); };
  window.toggleExtra = (i,n)=>{ const k=detailExtras.indexOf(n); const btn=$('ex-'+i); if(k>=0){detailExtras.splice(k,1); btn.classList.remove('on');} else {detailExtras.push(n); btn.classList.add('on');} paint(); };
  window.confirmDetail = (pid)=>{ const note=(document.getElementById('dnote')||{}).value||''; addToCart(pid,detailQty,detailExtras,note); toast(`+${detailQty} ${prod(pid).name}`); go('#/keranjang'); };
  paint();
}

function viewKeranjang(app){
  if(!cart.length){
    app.innerHTML = `<div class="page"><div class="page-head"><button class="back" onclick="go('#/')">${ic('back',19)}</button><div><h1>Keranjangmu</h1></div></div>
    <div class="empty"><div class="big">🛒</div><h3>Keranjangmu masih kosong 👀</h3><p>Kayaknya waktunya cari sesuatu.</p><button class="cta" style="max-width:240px;margin:0 auto" onclick="go('#/cari')">Cari makanan</button></div></div>`;
    return;
  }
  const t = totals();
  app.innerHTML = `<div class="page"><div class="page-head"><button class="back" onclick="go('#/')">${ic('back',19)}</button><div><h1>Keranjangmu</h1><p>${cartCount()} item lagi pengen dimakan 😋</p></div></div>
  ${cart.map((c,i)=>{ const p=prod(c.id); if(!p) return ''; const exSum=(c.extras||[]).reduce((s,n)=>{const e=(EXTRAS[p.cat]||[]).find(x=>x.n===n);return s+(e?e.h:0)},0);
    return `<div class="cart-item">${imgTag(p,'style="width:76px;height:76px;border-radius:14px;object-fit:cover"')}
    <div class="grow"><div style="font-weight:800">${esc(p.name)}</div><div style="font-size:12.5px;color:var(--muted)">${esc(p.resto)}${c.extras&&c.extras.length?' • + '+c.extras.map(esc).join(', + '):''}</div>
    ${c.note?`<div style="font-size:12px;color:#8a6d00;background:#FFF6DC;border-radius:8px;padding:4px 8px;margin-top:4px">📝 ${esc(c.note)}</div>`:''}
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px"><b>${rp((p.price+exSum)*c.qty)}</b>
    <div class="mini-qty"><button onclick="setQty(${i},-1)">${ic('minus',14,3)}</button><b>${c.qty}</b><button onclick="setQty(${i},1)">${ic('plus',14,3)}</button></div></div></div>
    <button onclick="removeItem(${i})" style="color:#B9A79B;align-self:flex-start" aria-label="Hapus">${ic('trash',18)}</button></div>`}).join('')}
  ${t.disc?`<div class="card" style="margin-top:6px;border-color:#BFE8C6;background:#F2FBF3"><b style="font-size:13.5px;color:#0d7a3f">🎉 Diskon member ${tier().toUpperCase()} −${rp(t.disc)}</b></div>`:''}
  <div class="card" style="margin-top:10px"><div class="sum-row"><span>Subtotal</span><span>${rp(t.sub)}</span></div>${t.disc?`<div class="sum-row" style="color:#0d7a3f"><span>Diskon member</span><span>−${rp(t.disc)}</span></div>`:''}<div class="sum-row"><span>Biaya antar (${(FLEETS.find(f=>f.id===fleet)||{}).label})</span><span>${t.ongkir===0?'Gratis 🎉':rp(t.ongkir)}</span></div><div class="sum-row"><span>Biaya layanan</span><span>${rp(t.layanan)}</span></div><div class="sum-row total"><span>Total</span><span>${rp(t.total)}</span></div></div>
  </div>`;
  const bar=$('stickyCta'); bar.style.display='';
  bar.innerHTML=`<button class="cta" onclick="go('#/checkout')">Pesan sekarang · ${rp(t.total)} ${ic('arrow',17,2.5)}</button>`;
}

function viewCheckout(app){
  if(!cart.length){ go('#/keranjang'); return; }
  const t = totals();
  app.innerHTML=`<div class="page"><div class="page-head"><button class="back" onclick="go('#/keranjang')">${ic('back',19)}</button><div><h1>Checkout</h1><p>Dikit lagi nyampe 😋</p></div></div>
  ${!user?`<div class="card" style="margin-bottom:10px;display:flex;gap:10px;align-items:center"><span style="color:var(--orange)">${ic('user',22)}</span><div style="flex:1;font-size:13.5px"><b>Masuk biar hemat!</b><br><span style="color:var(--muted)">Poin, voucher & diskon member nungguin.</span></div><button class="chip active" onclick="go('#/masuk')">Masuk</button></div>`:''}
  <div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div><div style="font-size:12.5px;color:var(--muted);font-weight:700;display:flex;align-items:center;gap:6px">${ic('pin',14)} ALAMAT PENGANTARAN</div><div style="font-weight:800;margin-top:4px">📍 ${esc(address.label)}</div><div style="font-size:13.5px;color:#5b4f48">${esc(address.detail)}</div></div><button class="chip active" onclick="editAddress()">Ubah</button></div></div>
  <h3 style="font-size:15px;margin:14px 0 8px;display:flex;align-items:center;gap:8px">${ic('bike',19)} Diantar siapa?</h3>
  <div class="fleet-grid">${FLEETS.map(f=>`<button class="fleet ${fleet===f.id?'on':''}" onclick="fleet='${f.id}';save();render()"><span class="fleet-badge ${f.id==='nyam'?'':'green'}">${f.badge} • ${f.eta}</span><div class="fleet-top"><span class="fleet-logo ${f.cls}">${f.mark}</span><span style="flex:1"><b style="font-size:14.5px">${f.label}</b><br><small>${f.desc}</small></span><span class="fleet-check">${fleet===f.id?ic('check',14,3):''}</span></div><b style="font-size:14px">${t.sub>=50000?'Gratis 🎉':rp(f.fee)}</b></button>`).join('')}</div>
  <h3 style="font-size:15px;margin:14px 0 8px;display:flex;align-items:center;gap:8px">${ic('wallet',19)} Bayarnya pakai apa?</h3>
  ${PAYMENTS.map(p=>`<button class="pay-opt ${payment===p.id?'on':''}" onclick="payment='${p.id}';save();render()"><span class="pay-ic">${ic(p.icon,20)}</span><span style="flex:1"><b style="font-size:14.5px">${p.label}</b><br><small style="color:var(--muted)">${p.sub}</small></span><span>${payment===p.id?ic('check',18,2.5):'<span style="color:#CBB9AC">○</span>'}</span></button>`).join('')}
  <h3 style="font-size:15px;margin:14px 0 8px">Ringkasan pesanan</h3>
  <div class="card">${cart.map(c=>{const p=prod(c.id); if(!p) return ''; return `<div class="sum-row"><span>${c.qty}× ${esc(p.name)}</span><span>${rp(p.price*c.qty)}</span></div>`}).join('')}
  ${t.disc?`<div class="sum-row" style="color:#0d7a3f"><span>Diskon ${tier().toUpperCase()}</span><span>−${rp(t.disc)}</span></div>`:''}
  <div class="sum-row"><span>Biaya antar</span><span>${t.ongkir===0?'Gratis 🎉':rp(t.ongkir)}</span></div><div class="sum-row"><span>Biaya layanan</span><span>${rp(t.layanan)}</span></div><div class="sum-row total"><span>Total bayar</span><span>${rp(t.total)}</span></div></div>
  </div>`;
  const bar=$('stickyCta'); bar.style.display='';
  bar.innerHTML=`<button class="cta" onclick="placeOrder(${t.total})">${ic('shield',18)} Pesan sekarang · ${rp(t.total)}</button>`;
}
window.editAddress = ()=>{
  const d = prompt('Tulis alamat lengkap kamu:', address.detail);
  if(d && d.trim()){ address.detail=d.trim(); save(); render(); toast('Alamat diperbarui'); }
};
window.placeOrder = (total)=>{
  const id='NYM'+Date.now().toString().slice(-6);
  const f = FLEETS.find(x=>x.id===fleet)||FLEETS[0];
  orders.unshift({id, email:(user&&user.email)||'tamu@nyam', items:JSON.parse(JSON.stringify(cart)), total, status:1, date:new Date().toLocaleString('id-ID'), resto:cart[0]?prod(cart[0].id).resto:'NYAM', pay:payment, fleet:fleet, addr:{...address}});
  if(user){ user.points=(user.points||0)+Math.floor(total/1000)*(tier()==='sultan'?3:tier()==='plus'?2:1); }
  cart=[]; save(); paintChrome();
  const notifs = store.get('notifs',[]);
  notifs.unshift({t:'Pesananmu masuk!',d:`${f.label} lagi siapin pesananmu.`,time:'Baru aja',icon:'bike'});
  store.set('notifs',notifs);
  go('#/tracking/'+id);
};

const TRACK_STEPS=['Pesanan diterima','Restoran menyiapkan','Kurir mengambil','Pesanan diantar','Sampai'];
const DRIVERS = {
  nyam:{name:'Mas Budi',meta:'4.9 • Honda Beat • B 1234 NYM',img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'},
  gojek:{name:'Pak Agus (Gojek)',meta:'4.8 • GoRide • GoSend live',img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'},
  grab:{name:'Bang Rian (Grab)',meta:'4.9 • GrabBike • GrabExpress live',img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'},
};
function viewTracking(app){
  const id=(location.hash.split('/')[2]||'').split('?')[0];
  let o = orders.find(x=>x.id===id) || orders[0];
  if(!o){ app.innerHTML=`<div class="page"><div class="empty"><div class="big">🛵</div><h3>Belum ada pesanan</h3><p>Yuk cari sesuatu yang enak.</p><button class="cta" style="max-width:240px;margin:0 auto" onclick="go('#/')">Cari makanan</button></div></div>`; return; }
  if(!o.status) o.status=1;
  const f = FLEETS.find(x=>x.id===o.fleet)||FLEETS[0];
  const d = DRIVERS[o.fleet]||DRIVERS.nyam;
  const paint = ()=>{
    const pct = Math.round((o.status)/5*100);
    app.innerHTML=`<div class="page"><div class="page-head"><button class="back" onclick="go('#/pesanan')">${ic('back',19)}</button><div style="flex:1"><h1>Pesananmu lagi disiapin! 👨‍🍳</h1><p>Perkiraan sampai 20–30 menit • ${esc(o.id)}</p></div><span class="fleet-logo ${f.cls}" style="width:46px;height:46px" title="${esc(f.label)}">${f.mark}</span></div>
    <div class="card" style="display:flex;gap:10px;align-items:center"><span class="fleet-logo ${f.cls}" style="width:42px;height:42px">${f.mark}</span><div style="flex:1"><b style="font-size:14px">Diantar ${esc(f.label)}</b><div style="font-size:12.5px;color:var(--muted)">${esc(f.desc)}</div></div><button class="chip" onclick="lacakQ='${o.id}';go('#/lacak')">ID: ${esc(o.id)}</button></div>
    <div class="card" style="margin-top:10px"><div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;color:var(--muted)"><span>${esc(o.id)}</span><span>${pct}%</span></div>
    <div style="height:10px;background:var(--cream);border-radius:99px;margin:8px 0;overflow:hidden;border:1px solid var(--line)"><div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--orange),var(--yellow));border-radius:99px;transition:.6s"></div></div>
    <div class="track-steps">${TRACK_STEPS.map((s,i)=>{const n=i+1;const cls=n<o.status?'done':(n===o.status?'now':'');return `<div class="t-step ${cls}"><div class="t-dot">${n<o.status?ic('check',16,3):(n===o.status?ic('bike',17):`<span style="font-size:12px">${n}</span>`)}</div><div><b style="font-size:14px">${s}</b><div style="font-size:12.5px;color:var(--muted)">${n<o.status?'Udah beres ✅':(n===o.status?'Lagi jalan...':'Menunggu')}</div></div></div>`}).join('')}</div></div>
    <div class="mapbox"><svg viewBox="0 0 400 190"><rect width="400" height="190" fill="#EDE3D2"/><path d="M0 120 C80 100 120 160 200 130 S320 60 400 90" stroke="#fff" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M0 120 C80 100 120 160 200 130 S320 60 400 90" stroke="#241C17" stroke-width="3" stroke-dasharray="8 8" fill="none"/><circle cx="40" cy="112" r="10" fill="#FF6B35"/><circle cx="330" cy="80" r="10" fill="#241C17"/></svg>
    <div style="position:absolute;bottom:10px;left:10px;background:#fff;border-radius:99px;padding:6px 12px;font-size:12.5px;font-weight:800;box-shadow:var(--shadow-sm);display:flex;align-items:center;gap:6px">${ic('bike',15)} ${o.status>=4?'Deket nih, siap-siap!':'Kurir lagi di jalan • sabar ya...'}</div></div>
    <div class="card"><div class="courier"><img class="avatar" src="${d.img}" onerror="this.src='${FALLBACK}'"><div style="flex:1"><b>${esc(d.name)}</b><div style="font-size:12.5px;color:var(--muted)">⭐ ${esc(d.meta)}</div></div><button class="chip active" onclick="toast('Menghubungi kurir...')">Hubungi</button></div>
    <div style="display:flex;gap:8px;margin-top:10px"><button class="cta secondary" style="padding:11px;font-size:13.5px;flex:1" onclick="toast('Membuka ${esc(f.label)}...')">Buka di ${esc(f.label)}</button><button class="cta secondary" style="padding:11px;font-size:13.5px;flex:1" onclick="lacakQ='${o.id}';go('#/lacak')">Salin ID</button></div></div>
    <div class="card" style="margin-top:10px"><b style="font-size:14px">Isi pesanan (${o.items.reduce((a,c)=>a+c.qty,0)} item)</b>${o.items.map(c=>{const p=prod(c.id);return `<div class="sum-row"><span>${c.qty}× ${esc(p?p.name:c.id)}</span><span>${p?rp(p.price*c.qty):''}</span></div>`}).join('')}<div class="sum-row total"><span>Total</span><span>${rp(o.total)}</span></div></div>
    <div style="display:flex;gap:8px;margin-top:12px"><button class="cta secondary" style="flex:1" onclick="advanceTrack('${o.id}')">Lanjut</button><button class="cta dark" style="flex:2" onclick="finishOrder('${o.id}')">Udah sampai? 🎉</button></div>
    </div>`;
  };
  paint();
  trackTimer=setInterval(()=>{ if(o.status<5){ o.status++; save(); paint(); if(o.status===5){ clearInterval(trackTimer); setTimeout(()=>go('#/selesai/'+o.id),900); } } }, 7000);
}
window.advanceTrack=(id)=>{ const o=orders.find(x=>x.id===id); if(o&&o.status<5){o.status++; save(); render();} };
window.finishOrder=(id)=>{ const o=orders.find(x=>x.id===id); if(o){o.status=5; save(); const ns=store.get('notifs',[]); ns.unshift({t:'Pesananmu sudah sampai! 🎉',d:'Waktunya NYAM! 😋',time:'Baru aja',icon:'check'}); store.set('notifs',ns); go('#/selesai/'+id);} };

function viewSelesai(app){
  const id=location.hash.split('/')[2];
  const o=orders.find(x=>x.id===id)||orders[0];
  userRating=0;
  app.innerHTML=`<div class="page"><div class="empty" style="padding-top:30px"><div class="big">🎉</div><h3 style="font-size:24px">Udah nyampe!</h3><p style="font-size:16px;color:var(--dark);font-weight:700">Waktunya NYAM! 😋</p></div>
  <div class="card"><b>Ringkasan pesanan</b>${o?o.items.map(c=>{const p=prod(c.id);return `<div class="sum-row"><span>${c.qty}× ${esc(p?p.name:c.id)}</span><span>${p?rp(p.price*c.qty):''}</span></div>`}).join('')+`<div class="sum-row total"><span>Total</span><span>${rp(o.total)}</span></div>`:''}</div>
  <div class="card" style="margin-top:10px;text-align:center"><h3>Bagaimana pesananmu?</h3><div class="stars" id="stars">${[1,2,3,4,5].map(i=>`<span data-v="${i}" onclick="rate(${i})">⭐</span>`).join('')}</div>
  <input class="note-input" id="rev" placeholder="Ceritain sedikit..."><div style="height:10px"></div><button class="cta" onclick="sendReview()">Kirim ulasan</button><div style="height:8px"></div><button class="cta secondary" onclick="go('#/')">Balik ke beranda</button></div></div>`;
  window.rate=(v)=>{ userRating=v; document.querySelectorAll('#stars span').forEach(s=>s.classList.toggle('on',+s.dataset.v<=v)); };
  window.sendReview=()=>{ toast(userRating?`Makasih ⭐${userRating}! Senang deh`:'Makasih banyak!'); go('#/pesanan'); };
}

function viewFavorit(app){
  const list=PRODUCTS.filter(p=>favs.includes(p.id));
  if(!list.length){ app.innerHTML=`<div class="page"><div class="page-head"><button class="back" onclick="go('#/')">${ic('back',19)}</button><div><h1>Favorit kamu</h1></div></div><div class="empty"><div class="big">❤️</div><h3>Belum ada yang kamu simpan ❤️</h3><p>Kalau ada yang bikin ngiler, simpan aja.</p><button class="cta" style="max-width:240px;margin:0 auto" onclick="go('#/cari')">Cari yang enak</button></div></div>`; return; }
  app.innerHTML=`<div class="page"><div class="page-head"><button class="back" onclick="go('#/')">${ic('back',19)}</button><div><h1>Favorit kamu ❤️</h1><p>${list.length} kesukaanmu tersimpan</p></div></div><div class="grid2">${list.map(pCard).join('')}</div></div>`;
}

function viewPesanan(app){
  const berjalan=orders.filter(o=>o.status<5), riwayat=orders.filter(o=>o.status>=5);
  const list = orderTab==='berjalan'?berjalan:riwayat;
  const card=(o)=>{
    const p0=o.items[0]?prod(o.items[0].id):null;
    const n=o.items.reduce((a,c)=>a+c.qty,0);
    const f=FLEETS.find(x=>x.id===o.fleet);
    const st=o.status>=5?'<span class="status-pill green">Udah sampai ✅</span>':(o.status>=3?'<span class="status-pill orange">Sedang diantar 🛵</span>':'<span class="status-pill">Lagi disiapin 👨‍🍳</span>');
    return `<div class="order-card"><div style="display:flex;gap:12px">${p0?imgTag(p0,'style="width:64px;height:64px;border-radius:14px;object-fit:cover"'):''}<div style="flex:1"><b>${esc(o.resto||'NYAM')}</b><div style="font-size:12.5px;color:var(--muted)">${n} item • ${rp(o.total)} • ${esc(o.id)}${f?' • '+esc(f.label):''}</div><div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">${st}</div></div></div><div style="display:flex;gap:8px;margin-top:10px"><button class="cta" style="padding:11px;font-size:14px" onclick="go('#/${o.status>=5?'selesai':'tracking'}/${o.id}')">Lihat pesanan</button>${o.status>=5?`<button class="cta secondary" style="padding:11px;font-size:14px" onclick="reorder('${o.id}')">Pesan lagi</button>`:''}</div></div>`;
  };
  app.innerHTML=`<div class="page"><div class="page-head"><button class="back" onclick="go('#/profil')">${ic('back',19)}</button><div style="flex:1"><h1>Pesanan saya</h1><p>Semua jejak kenyangmu 🧾</p></div><button class="chip" onclick="go('#/lacak')">${ic('bike',15)} Lacak ID</button></div>
  <div class="tabs"><button class="${orderTab==='berjalan'?'on':''}" onclick="orderTab='berjalan';render()">Sedang berjalan (${berjalan.length})</button><button class="${orderTab==='riwayat'?'on':''}" onclick="orderTab='riwayat';render()">Riwayat (${riwayat.length})</button></div>
  ${list.length?list.map(card).join(''):`<div class="empty"><div class="big">🍽️</div><h3>Belum pernah NYAM?</h3><p>Yuk cari sesuatu yang enak.</p><button class="cta" style="max-width:240px;margin:0 auto" onclick="go('#/cari')">Cari makanan</button></div>`}</div>`;
}
window.reorder=(id)=>{ const o=orders.find(x=>x.id===id); if(o){ o.items.forEach(c=>addToCart(c.id,c.qty,c.extras||[])); toast('Balik ke keranjang!'); go('#/keranjang'); } };

function viewProfil(app){
  const tname = (TIERS.find(x=>x.id===tier())||{}).name||'Biasa';
  app.innerHTML=`<div class="page"><div class="profile-head"><img src="${user?'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop'}" onerror="this.src='${FALLBACK}'"><h2 style="font-size:20px">${user?('Halo, '+esc(user.name)+'! 👋'):'Halo, Sobat NYAM! 👋'}</h2><p style="color:var(--muted);font-size:13.5px">${user?esc(user.email):'sobatnyam@mail.com • belum masuk'}</p>
  <div style="display:flex;gap:8px;justify-content:center;margin-top:10px;flex-wrap:wrap"><button class="chip ${tier()!=='biasa'?'active':''}" onclick="go('#/membership')">${ic('crown',15)} ${tname} • ${(user&&user.points)||0} poin</button><button class="chip" onclick="toast('📍 ${esc(address.label)}')">📍 ${esc(address.label)} • Jogja</button></div>
  ${!user?'<button class="cta" style="max-width:300px;margin:14px auto 0" onclick="go(\'#/masuk\')">Masuk / Daftar</button>':''}</div>
  ${[
    {i:'box',t:'Pesanan saya',d:orders.length+' pesanan',h:'#/pesanan'},
    {i:'bike',t:'Lacak pesanan',d:'Cek ID & tracking live',h:'#/lacak'},
    {i:'crown',t:'Membership',d:tname+' • klaim voucher',h:'#/membership'},
    {i:'pin',t:'Alamat',d:address.detail,h:'ADDR'},
    {i:'wallet',t:'Pembayaran',d:(PAYMENTS.find(p=>p.id===payment)||{}).label||'QRIS',h:'PAY'},
    {i:'heart',t:'Favorit',d:favs.length+' disimpan',h:'#/favorit'},
    {i:'bell',t:'Notifikasi',d:'Promo & info pesanan',h:'#/notifikasi'},
    {i:'headset',t:'Bantuan',d:'Ada yang bisa dibantu?',h:'HELP'},
  ].map(m=>`<button class="menu-row" onclick="profileGo('${m.h}')"><span class="menu-ic">${ic(m.i,19)}</span><span style="flex:1">${m.t}<small>${esc(m.d)}</small></span><span>›</span></button>`).join('')}
  ${user?`<button class="cta secondary" onclick="keluar()">${ic('logout',18)} Keluar</button>`:''}
  <p style="text-align:center;color:var(--muted);font-size:12px;margin-top:16px">NYAM v2.0 • Dibuat dengan 🧡 di Jogja • Gojek • Grab</p></div>`;
}
window.profileGo=(h)=>{
  if(h==='ADDR') editAddress();
  else if(h==='PAY'){ toast('Metode aktif: '+(PAYMENTS.find(p=>p.id===payment)||{}).label); go('#/checkout'); }
  else if(h==='HELP') toast('Chat kami ya, kami bantu');
  else go(h);
};

function viewNotif(app){
  const ns=store.get('notifs',[
    {t:'Promo buat kamu hari ini 👀',d:'Gratis ongkir s.d. 10rb buat semua pesanan.',time:'2 jam lalu',icon:'ticket'},
    {t:'Restoran favoritmu sedang ramai dipesan.',d:'Geprek Mantul lagi antre 15+ pesanan. Pesan sekarang!',time:'Kemarin',icon:'zap'},
  ]);
  app.innerHTML=`<div class="page"><div class="page-head"><button class="back" onclick="go('#/')">${ic('back',19)}</button><div><h1>Notifikasi</h1><p>Jangan sampai kelewatan 👀</p></div></div>
  ${ns.map(n=>`<div class="notif"><div class="notif-ic">${ic(n.icon||'bell',20)}</div><div style="flex:1"><b style="font-size:14px">${esc(n.t)}</b><div style="font-size:13px;color:#5b4f48;margin-top:2px">${esc(n.d)}</div><div style="font-size:11.5px;color:var(--muted);margin-top:4px">${esc(n.time)}</div></div></div>`).join('')}
  <button class="cta secondary" onclick="store.set('notifs',[]);render();toast('Notifikasi dibersihkan')">Hapus semua</button></div>`;
}

/* ===== INIT (dengan sync Supabase bila tersedia) ===== */
if(!location.hash) location.hash='#/landing';
render();
if (window.NYAM_DB && window.NYAM_DB.init()) {
  window.NYAM_DB.pullAll().then((cloud) => {
    if (!cloud) return;
    let changed = false;
    if (cloud.user) {
      user = Object.assign({}, user || {}, cloud.user);
      store.set('user', user); changed = true;
    }
    if (cloud.orders && cloud.orders.length) {
      const seen = new Set(orders.map((o) => o.id));
      cloud.orders.forEach((o) => { if (!seen.has(o.id)) orders.push(o); });
      orders.sort((a, b) => String(b.id).localeCompare(String(a.id)));
      store.set('orders', orders); changed = true;
    }
    if (cloud.favs) { favs = Array.from(new Set([...(favs || []), ...cloud.favs])); store.set('favs', favs); changed = true; }
    if (cloud.vouchers) { vouchers = Array.from(new Set([...(vouchers || []), ...cloud.vouchers])); store.set('vouchers', vouchers); changed = true; }
    if (changed) { paintChrome(); render(); }
  }).catch(() => {});
}
