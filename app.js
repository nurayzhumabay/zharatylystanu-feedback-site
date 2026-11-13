const SITE_CONFIG = {
  university: 'Қожа Ахмет Ясауи атындағы Халықаралық қазақ-түрік университеті',
  faculty: 'Жаратылыстану ғылымдары факультеті',
  logoUrl: 'assets/faculty-logo.png',
  dean: {
    name: 'Нұрділлаева Раушан Нұрділлақызы',
    title: 'Жаратылыстану ғылымдары факультетінің деканы',
    degree: 'Ғылым кандидаты, профессор',
    portraitUrl: 'assets/dean-raushan-nurdillakyzy.jpg'
  },
  documents: [
    { title: 'Академиялық саясат', url: 'https://ayu.edu.kz/kz/2811/akademik-politika', type: 'web' },
    { title: '2026–2027 оқу жылының академиялық күнтізбесі', url: 'https://students.ayu.edu.kz/kk/akademik-takvim/381/2026-2027-oqu-zylynyn-akademiialyq-kuntizbe/35', type: 'web' },
    { title: 'Ішкі тәртіп ережелері', url: 'https://ayu.edu.kz/admin/ckeditor_files/files/%D0%A1%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D1%82%D0%B5%D1%80%D0%B4%D1%96%D2%A3%20%D1%96%D1%88%D0%BA%D1%96%20%D1%82%D3%99%D1%80%D1%82%D1%96%D0%BF%20%D1%81%D0%B0%D2%9B%D1%82%D0%B0%D1%83%20%D0%B5%D1%80%D0%B5%D0%B6%D0%B5%D1%81%D1%96.pdf', type: 'pdf' },
    { title: 'Академиялық адалдық кодексі', url: 'https://ayu.edu.kz/admin/ckeditor_files/files/%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F%D0%BB%D1%8B%D2%9B%20%D0%B0%D0%B4%D0%B0%D0%BB%D0%B4%D1%8B%D2%9B%20%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA%D1%81%D1%96.pdf', type: 'pdf' },
    { title: 'Студенттерге арналған нұсқаулық', url: 'https://ayu.edu.kz/kz/5652/ogrenci-kilavuzu', type: 'web' },
    { title: 'Университеттің ресми сайты', url: 'https://ayu.edu.kz/kz/', type: 'web' }
  ],
  instagram: [
    { label: 'Университеттің ресми Instagram парақшасы', account: '@yasawi_university', url: 'https://www.instagram.com/yasawi_university/' },
    { label: 'Факультеттің ресми Instagram парақшасы', account: '@yasawi_jaratylystanu_official', url: 'https://www.instagram.com/yasawi_jaratylystanu_official/' },
    { label: 'Студенттік кеңестің Instagram парақшасы', account: '@yasawi_parlament', url: 'https://www.instagram.com/yasawi_parlament/' }
  ],
  contacts: {
    address: 'Түркістан қаласы, Бекзат Саттарханов даңғылы, 29, 3 (овал) ғимарат, 256 кабинет.',
    hours: '09:00–18:00', phone: '+7 (725) 336-3636', phoneHref: 'tel:+77253363636',
    email: 'science@ayu.edu.kz', emailHref: 'mailto:science@ayu.edu.kz'
  },
  feedbackEndpoint: 'https://script.google.com/macros/s/AKfycbzjxE2SziEDcaYQQySR4F3ci5mejfmug2M4gbGutSiHj3vdxZaTZhBky2YkfhAXVXy-yg/exec'
};

document.querySelectorAll('[data-university]').forEach(el => el.textContent = SITE_CONFIG.university);
document.querySelectorAll('[data-faculty]').forEach(el => el.textContent = SITE_CONFIG.faculty);
document.querySelector('[data-dean-name]').textContent = SITE_CONFIG.dean.name;
document.querySelector('[data-dean-title]').textContent = SITE_CONFIG.dean.title;
document.querySelector('[data-dean-degree]').textContent = SITE_CONFIG.dean.degree;
if (SITE_CONFIG.logoUrl) document.querySelector('[data-logo]').innerHTML = `<img src="${SITE_CONFIG.logoUrl}" alt="Факультет логотипі">`;
if (SITE_CONFIG.dean.portraitUrl) {
  document.querySelector('[data-portrait]').innerHTML = `<img src="${SITE_CONFIG.dean.portraitUrl}" alt="${SITE_CONFIG.dean.name}">`;
  document.querySelector('.portrait-note')?.remove();
}

const externalAttrs = 'target="_blank" rel="noopener noreferrer"';
document.querySelector('#documents-grid').innerHTML = SITE_CONFIG.documents.map((doc, i) => `
  <a class="resource-card reveal" href="${doc.url}" ${externalAttrs} aria-label="${doc.title} — жаңа қойындыда ашылады">
    <span class="resource-icon" aria-hidden="true">${doc.type === 'pdf' ? '▤' : '↗'}</span>
    <h3>${doc.title}</h3><p>${doc.type === 'pdf' ? 'PDF құжаты' : 'Ресми веб-бет'}</p>
    <span class="card-link">${doc.type === 'pdf' ? 'Құжатты ашу' : 'Бетке өту'} <b aria-hidden="true">↗</b></span>
  </a>`).join('');
document.querySelector('#social-grid').innerHTML = SITE_CONFIG.instagram.map(item => `
  <a class="social-card reveal" href="${item.url}" ${externalAttrs} aria-label="${item.account} парақшасына өту — жаңа қойындыда ашылады">
    <span class="instagram-icon" aria-hidden="true">◎</span><h3>${item.label}</h3><strong>${item.account}</strong>
    <span class="card-link">Парақшаға өту <b aria-hidden="true">↗</b></span>
  </a>`).join('');
const c = SITE_CONFIG.contacts;
document.querySelector('#contact-list').innerHTML = `
  <div class="contact-item wide"><span class="contact-icon" aria-hidden="true">⌖</span><div><span>Мекенжай</span><strong>${c.address}</strong></div></div>
  <div class="contact-item"><span class="contact-icon" aria-hidden="true">◷</span><div><span>Қабылдау уақыты</span><strong>${c.hours}</strong></div></div>
  <a class="contact-item" href="${c.phoneHref}"><span class="contact-icon" aria-hidden="true">☎</span><div><span>Телефон</span><strong>${c.phone}</strong></div></a>
  <a class="contact-item wide" href="${c.emailHref}"><span class="contact-icon" aria-hidden="true">✉</span><div><span>Email</span><strong>${c.email}</strong></div></a>`;

const menuButton = document.querySelector('.menu-button'); const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));

const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.querySelector('#feedback-form'); const anonymous = document.querySelector('#anonymous'); const identity = document.querySelector('#identity-fields');
const personalIds = ['full-name','group','email']; const message = document.querySelector('#message');
anonymous.addEventListener('change', () => { identity.hidden = anonymous.checked; personalIds.forEach(id => document.getElementById(id).required = !anonymous.checked); });
message.addEventListener('input', () => document.querySelector('#char-count').textContent = `${message.value.length} / 2000`);
const setError = (id, text) => { const input = document.getElementById(id); const err = document.getElementById(`${id}-error`); input.classList.toggle('invalid', !!text); input.setAttribute('aria-invalid', !!text); if(text) input.setAttribute('aria-describedby', `${id}-error`); else input.removeAttribute('aria-describedby'); err.textContent = text; };
function validate(){ let ok = true; [['request-type','Өтініш түрін таңдаңыз.'],['topic','Тақырыпты таңдаңыз.'],['message','Хабарлама мәтінін жазыңыз.']].forEach(([id,msg])=>{const empty=!document.getElementById(id).value.trim();setError(id,empty?msg:'');if(empty)ok=false;}); if(!anonymous.checked){[['full-name','Аты-жөніңізді жазыңыз.'],['group','Тобыңызды жазыңыз.']].forEach(([id,msg])=>{const empty=!document.getElementById(id).value.trim();setError(id,empty?msg:'');if(empty)ok=false;}); const email=document.getElementById('email'); const emailMsg=!email.value.trim()?'Email мекенжайын жазыңыз.':(!email.validity.valid?'Email мекенжайы дұрыс емес.':''); setError('email',emailMsg);if(emailMsg)ok=false;} return ok; }
form.addEventListener('submit', async e => {
  e.preventDefault();
  const notice = document.querySelector('#form-notice');
  const button = form.querySelector('.submit-button');
  notice.hidden = true;
  if (!validate()) { form.querySelector('.invalid')?.focus(); return; }

  const params = new URLSearchParams({
    requestType: document.querySelector('#request-type').value,
    topic: document.querySelector('#topic').value,
    message: message.value,
    anonymous: String(anonymous.checked),
    fullName: anonymous.checked ? '' : document.querySelector('#full-name').value,
    group: anonymous.checked ? '' : document.querySelector('#group').value,
    email: anonymous.checked ? '' : document.querySelector('#email').value
  });

  button.disabled = true;
  button.textContent = 'Жіберілуде…';
  try {
    await fetch(SITE_CONFIG.feedbackEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: params.toString()
    });
    form.reset();
    anonymous.checked = true;
    identity.hidden = true;
    personalIds.forEach(id => document.getElementById(id).required = false);
    document.querySelector('#char-count').textContent = '0 / 2000';
    notice.textContent = 'Кері байланысыңыз сәтті жіберілді. Рақмет!';
    notice.hidden = false;
    notice.focus();
  } catch {
    notice.textContent = 'Хабарламаны жіберу мүмкін болмады. Интернет байланысын тексеріп, қайта көріңіз.';
    notice.hidden = false;
    notice.focus();
  } finally {
    button.disabled = false;
    button.innerHTML = 'Жіберу <span aria-hidden="true">→</span>';
  }
});
form.querySelectorAll('input,select,textarea').forEach(el=>el.addEventListener('input',()=>{if(el.id && document.getElementById(`${el.id}-error`))setError(el.id,'');}));
