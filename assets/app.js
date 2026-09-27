/* =========================================================
   Website Samples showcase
   ---------------------------------------------------------
   EDIT THESE TWO LINES with your contact details:
   - whatsapp: WhatsApp username (or country code + number, digits only)
   - email:    where enquiries should go
   ========================================================= */
const CONTACT = {
  whatsapp: 'kalharatennakoon',                            // WhatsApp username (leave empty to hide WhatsApp)
  email: 'kalharatennakoonmck@gmail.com'
};

/* ---- Sample sites (add a new one by copying a block) ---- */
const ICONS = {
  food:  '<path d="M4 3v8a3 3 0 0 0 3 3v7M7 3v5M10 3v8a3 3 0 0 1-3 3M17 21V3c-2 1-3 4-3 8h3"/>',
  cart:  '<path d="M3 4h2l2.4 11h11L21 7H6"/><circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>',
  shirt: '<path d="M8 3l-5 3 2 5 3-1v11h8V10l3 1 2-5-5-3a4 4 0 0 1-8 0z"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  sun:   '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  cap:   '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6"/>',
  bed:   '<path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="2"/>',
  user:  '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
};

const SAMPLES = [
  { id:'restaurant', title:'Restaurants & Cafés', brand:'Kithul Kitchen', url:'kithulkitchen.lk', file:'samples/restaurant.html', icon:'food', color:'#c8643b', tint:'#f4ecdd',
    desc:'A warm, appetising site that shows off your food and turns visitors into bookings and orders.',
    features:['Menu with category tabs and prices','Online table reservation form','Floating WhatsApp order button','Opening hours, location & story'] },
  { id:'grocery', title:'Grocery & Retail Shops', brand:'FreshBasket', url:'freshbasket.lk', file:'samples/grocery.html', icon:'cart', color:'#16a34a', tint:'#e8f5ec',
    desc:'An online store your customers can browse and order from any time, even when the shop is closed.',
    features:['Product search and category filters','Working cart with totals and delivery fee','Deals banner and promotions','Cash on delivery / WhatsApp ordering'] },
  { id:'clothing', title:'Clothing Boutiques', brand:'Loom & Leaf', url:'loomandleaf.lk', file:'samples/clothing.html', icon:'shirt', color:'#e2725b', tint:'#f5e6df',
    desc:'A stylish, editorial store that makes your collection look premium and easy to shop.',
    features:['Quick-view with size selection','Sort by newest or price','Lookbook and store-visit section','Newsletter sign-up for new drops'] },
  { id:'mobile', title:'Mobile Phone Shops', brand:'PhoneHub', url:'phonehub.lk', file:'samples/mobile.html', icon:'phone', color:'#7c5cff', tint:'#e9e6f7',
    desc:'A sleek, modern shop for phones and accessories, with services that bring people into your store.',
    features:['Brand filters and colour swatches','Monthly instalment prices','Instant trade-in value estimator','Repair services and store directions'] },
  { id:'solar', title:'Solar & Engineering', brand:'SunPeak Solar', url:'sunpeaksolar.lk', file:'samples/solar.html', icon:'sun', color:'#f59e0b', tint:'#e7edf6',
    desc:'A trustworthy site that explains your service and collects qualified quote requests.',
    features:['Live savings calculator','Step-by-step installation process','Project gallery and FAQs','Free site-visit request form'] },
  { id:'education', title:'Schools & Institutes', brand:'Horizon Institute', url:'horizon.edu.lk', file:'samples/education.html', icon:'cap', color:'#1d4ed8', tint:'#e6edfb',
    desc:'A clear, confident site for courses and admissions that helps students and parents choose you.',
    features:['Course finder with level tabs','Intake countdown timer','Student testimonials','Admissions inquiry form'] },
  { id:'hotel', title:'Hotels & Villas', brand:'Palm Cove Villas', url:'palmcovevillas.com', file:'samples/hotel.html', icon:'bed', color:'#0e4f5c', tint:'#e3ecea',
    desc:'An elegant site that sells the experience and gets direct bookings without paying commission.',
    features:['Booking bar with live price estimate','Room cards with amenities','Photo gallery with lightbox','Experiences and guest reviews'] },
  { id:'portfolio', title:'Personal Portfolios', brand:'Amaya Perera', url:'amaya.design', file:'samples/portfolio.html', icon:'user', color:'#6d5dfc', tint:'#ebe9fb',
    desc:'A personal site for students, graduates and professionals: your CV, projects and contact in one link.',
    features:['Project gallery with filters','Experience timeline and skills','CV download button','Contact form'] }
];

/* ---------------- app ---------------- */
const $ = s => document.querySelector(s);
const tabs = $('#tabs'), screenEl = $('#screen'), frame = $('#frame'), iframe = $('#preview'), loading = $('#loading');
let current = 0;
let mode = window.innerWidth < 760 ? 'mobile' : 'desktop';

const svg = name => `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;

tabs.innerHTML = SAMPLES.map((s, i) =>
  `<button class="tab" role="tab" id="tab-${s.id}" aria-selected="false" data-i="${i}" style="--c:${s.color}"><span class="ic">${svg(s.icon)}</span>${s.title}</button>`
).join('');

$('#typeSel').innerHTML = SAMPLES.map(s => `<option>${s.title}</option>`).join('') + '<option>Something else</option>';

function select(i, opts = {}) {
  current = (i + SAMPLES.length) % SAMPLES.length;
  const s = SAMPLES[current];

  tabs.querySelectorAll('.tab').forEach((t, j) => t.setAttribute('aria-selected', j === current));
  const active = tabs.children[current];
  tabs.scrollTo({ left: active.offsetLeft - (tabs.clientWidth - active.offsetWidth) / 2, behavior: opts.initial ? 'auto' : 'smooth' });

  const info = $('#info');
  info.style.setProperty('--c', s.color);
  info.classList.remove('swap'); void info.offsetWidth; info.classList.add('swap');
  $('#iCount').textContent = String(current + 1).padStart(2, '0') + ' / ' + String(SAMPLES.length).padStart(2, '0');
  $('#iTitle').textContent = s.title;
  $('#iBrand').textContent = s.brand + ' (demo)';
  $('#iDesc').textContent = s.desc;
  $('#iFeat').innerHTML = s.features.map(f => `<li>${f}</li>`).join('');
  $('#iOpen').href = s.file;
  $('#url').textContent = s.url;
  screenEl.style.background = s.tint;
  loading.style.background = s.tint;

  loading.classList.add('show');
  iframe.src = s.file;

  $('#typeSel').value = s.title;
  const url = new URL(location);
  url.searchParams.set('sample', s.id);
  history.replaceState(null, '', url);
}
iframe.addEventListener('load', () => loading.classList.remove('show'));

tabs.addEventListener('click', e => { const t = e.target.closest('.tab'); if (t) select(+t.dataset.i); });
tabs.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') { select(current + 1); tabs.children[current].focus(); }
  if (e.key === 'ArrowLeft')  { select(current - 1); tabs.children[current].focus(); }
});
$('#prev').addEventListener('click', () => select(current - 1));
$('#next').addEventListener('click', () => select(current + 1));

/* desktop / mobile preview sizing */
function layout() {
  const W = screenEl.clientWidth, H = screenEl.clientHeight;
  screenEl.classList.toggle('mobile', mode === 'mobile');
  if (mode === 'desktop') {
    const vw = W < 700 ? 1024 : 1280;
    const scale = W / vw;
    Object.assign(frame.style, { width: vw + 'px', height: (H / scale) + 'px', left: '0px', top: '0px', transform: `scale(${scale})` });
  } else {
    const pw = 390, ph = 844;
    const scale = Math.min((H - 64) / ph, (W - 64) / pw, 1);
    Object.assign(frame.style, {
      width: pw + 'px', height: ph + 'px',
      left: ((W - pw * scale) / 2) + 'px', top: ((H - ph * scale) / 2) + 'px',
      transform: `scale(${scale})`
    });
  }
  document.querySelectorAll('.modes button').forEach(b => b.classList.toggle('on', b.dataset.mode === mode));
}
document.querySelectorAll('.modes button').forEach(b => b.addEventListener('click', () => { mode = b.dataset.mode; layout(); }));
new ResizeObserver(layout).observe(screenEl);

/* contact */
const waLink = text => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
const mailLink = (subject, body) => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
const hello = 'Hi Kalhara! I saw your website samples and I\'m interested in a website for my business.';
if (CONTACT.whatsapp) { $('#waBtn').href = waLink(hello); } else { $('#waBtn').style.display = 'none'; }
$('#mailBtn').href = mailLink('Website enquiry', hello);
$('#iWant').addEventListener('click', () => { $('#typeSel').value = SAMPLES[current].title; });
$('#enquiry').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const text = `Hi Kalhara! I'm ${f.get('name')}. I'd like a website for my business (${f.get('type')}).` + (f.get('msg') ? `\n\n${f.get('msg')}` : '');
  window.open(CONTACT.whatsapp ? waLink(text) : mailLink('Website enquiry: ' + f.get('type'), text), '_blank');
});
$('#yr').textContent = new Date().getFullYear();

/* start on ?sample=<id> if present */
const want = new URLSearchParams(location.search).get('sample');
const start = Math.max(0, SAMPLES.findIndex(s => s.id === want));
select(start, { initial: true });
layout();
