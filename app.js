(() => {
  const data = window.PORTFOLIO;
  const byId = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl = value => {
    if (!value) return '';
    try { const url = new URL(value, location.href); if (url.protocol === 'file:' && !/^[a-z][a-z\d+.-]*:/i.test(value.trim())) return value; return ['https:','http:','mailto:'].includes(url.protocol) ? value : ''; } catch { return ''; }
  };
  const icons = {
    moon:'<path d="M20 14.1A8 8 0 0 1 9.9 4 8 8 0 1 0 20 14.1Z"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
    research:'<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 6h8M7 8l4 8m6-8-4 8"/>',
    book:'<path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15"/>',
    github:'<path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.3-2-1-2.5 3-.3 6-1.5 6-5.5a4 4 0 0 0-1-3c.2-.8.2-2-.4-3-1 0-2 .5-3 1a11 11 0 0 0-7 0c-1-.5-2-1-3-1-.6 1-.6 2.2-.4 3a4 4 0 0 0-1 3c0 4 3 5.2 6 5.5-.7.5-1 1.5-1 2.5v4"/>',
    linkedin:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4"/>',
    scholar:'<path d="m2 9 10-5 10 5-10 5-10-5Zm4 2v6c4 3 8 3 12 0v-6m4-2v8"/>',
    link:'<path d="M10 13a5 5 0 0 0 7 .2l3-3a5 5 0 0 0-7-7l-2 2m3 6a5 5 0 0 0-7-.2l-3 3a5 5 0 0 0 7 7l2-2"/>',
    globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
    arrow:'<path d="M7 17 17 7M7 7h10v10"/>',
    paper:'<path d="M6 2h8l4 4v16H6V2Zm8 0v5h4M9 12h6m-6 4h6"/>',
    code:'<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16"/>'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.arrow}</svg>`;
  const external = (url, label, cls='') => `<a class="${cls}" href="${escape(safeUrl(url))}"${/^https?:/.test(url) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${label}</a>`;
  document.title = data.name;
  byId('nav-name').textContent = data.name;
  byId('profile-name').textContent = data.name;
  document.querySelector('.portrait-caption').textContent = 'YOUR PHOTO HERE';
  document.querySelector('.portrait-caption').hidden = !data.isTemplate;
  byId('portrait-initials').textContent = data.initials;
  byId('template-note').hidden = !data.isTemplate;
  byId('bio-text').innerHTML = data.about.map(text => `<p>${text}</p>`).join('');
  byId('profile-role').textContent = data.role;
  byId('profile-institution').textContent = data.institution;
  if (safeUrl(data.portrait)) {
    const image = document.createElement('img'); image.src = data.portrait; image.alt = `Portrait of ${data.name}`;
    image.addEventListener('load', () => byId('portrait-container').replaceChildren(image), {once:true});
  }
  const profiles = [];
  if (data.email) profiles.push({url:`mailto:${data.email}`,label:'Email',icon:'email'});
  if (safeUrl(data.scholar)) profiles.push({url:data.scholar,label:'Google Scholar',icon:'scholar'});
  if (safeUrl(data.github)) profiles.push({url:data.github,label:'GitHub',icon:'github'});
  if (safeUrl(data.linkedin)) profiles.push({url:data.linkedin,label:'LinkedIn',icon:'linkedin'});
  if (!profiles.length) profiles.push({url:'#research',label:'Research',icon:'research'},{url:'#publications',label:'Publications',icon:'book'},{url:'#background',label:'Background',icon:'book'});
  byId('profile-links').innerHTML = profiles.map(item=> `<a class="profile-link profile-link-${item.icon}" href="${escape(item.url)}" aria-label="${item.label}" title="${item.label}"${/^https?:/.test(item.url)?' target="_blank" rel="noopener noreferrer"':''}>${icon(item.icon)}</a>`).join('');
  byId('cv-link').hidden = !safeUrl(data.cv);
  if (safeUrl(data.cv)) { byId('cv-link').href = data.cv; byId('cv-link').innerHTML = 'Curriculum vitae <span aria-hidden="true">↗</span>'; }
  const newsRow = item => `<div class="news-row"><time>${escape(item.date)}</time><div>${item.text}</div></div>`;
  byId('news-list').innerHTML = data.news.slice(0,6).map(newsRow).join('');
  byId('older-news').innerHTML = data.news.slice(6).map(newsRow).join('');
  byId('news-toggle').hidden = data.news.length <= 6;
  byId('news-toggle').addEventListener('click', () => {
    const isOpen = byId('news-toggle').getAttribute('aria-expanded') === 'true';
    byId('news-toggle').setAttribute('aria-expanded', String(!isOpen));
    byId('older-news').hidden = isOpen;
    byId('news-toggle').innerHTML = isOpen ? 'Show older updates <span aria-hidden="true">↓</span>' : 'Show fewer updates <span aria-hidden="true">↑</span>';
  });
  byId('talks').hidden = !data.talks.length;
  document.querySelector('nav a[href="#talks"]').hidden = !data.talks.length;
  byId('talk-list').innerHTML = data.talks.map(t=> `<div class="talk-row"><div><div class="talk-title">${safeUrl(t.url)?external(t.url,escape(t.title)):escape(t.title)}</div><p class="talk-venue">${escape(t.venue)}</p></div><time>${escape(t.date)}</time></div>`).join('');
  const paperLinks = paper => ['paper','project','code'].filter(key => safeUrl(paper[key])).map(key=>external(paper[key],`${icon(key==='project'?'globe':key)}${key==='project'?'Project page':key[0].toUpperCase()+key.slice(1)}`,'pill')).join('');
  let prefersReducedMotion=false;
  try{prefersReducedMotion=typeof window.matchMedia==='function'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches===true}catch(e){}
  const paperMedia = paper => safeUrl(paper.video)
    ? `<video src="${escape(safeUrl(paper.video))}" poster="${escape(safeUrl(paper.image))}" aria-label="${escape(paper.alt)}" muted loop playsinline controls preload="metadata"${prefersReducedMotion ? '' : ' autoplay'}>${external(paper.video, 'Watch the teaser')}</video>`
    : `<img src="${escape(safeUrl(paper.image))}" alt="${escape(paper.alt)}" loading="lazy">`;
  const authorList = (authors, boldNames=[data.name]) => String(authors || '').split(',').map(author => {
    const text = author.trim();
    const name = text.replace(/[*†‡]+$/, '');
    const marks = text.slice(name.length);
    return boldNames.includes(name) ? `<strong>${escape(name)}</strong>${escape(marks)}` : escape(text);
  }).join(', ');
  const years = [...new Set(data.publications.map(p=>p.year))].sort((a,b)=>b.localeCompare(a));
  byId('publication-list').innerHTML = years.map(year => `<div class="year-heading">${escape(year)}</div>${data.publications.filter(p=>p.year===year).map(p=> `<article class="paper" id="paper-${escape(p.id)}"><figure class="paper-figure">${paperMedia(p)}</figure><div><p class="paper-venue">${p.status ? `<strong>${escape(p.venue)}</strong> <em class="paper-status">${escape(p.status)}</em>` : escape(p.venue)}</p><h3>${escape(p.title)}</h3><p class="authors">${authorList(p.authors)}</p>${p.authorNote ? `<p class="author-note">${escape(p.authorNote)}</p>` : ''}<p class="paper-description">${escape(p.description)}</p><div class="paper-links">${paperLinks(p)}</div></div></article>`).join('')}`).join('');
  const projects = data.projects || [];
  byId('projects').hidden = !projects.length;
  const projectCard = project => `<article class="paper project-card" id="project-${escape(project.id)}"><figure class="paper-figure">${paperMedia(project)}</figure><div><p class="paper-venue">${escape(project.type)} · ${escape(project.date || project.year)}</p><h3>${escape(project.title)}</h3>${project.authors ? `<p class="authors">${authorList(project.authors,project.boldAuthors || [data.name])}</p>` : ''}<p class="authors">${escape(project.institution)}</p><p class="paper-description">${escape(project.description)}</p><div class="paper-links">${safeUrl(project.report) ? external(project.report, `${icon('paper')}Report`, 'pill') : ''}${safeUrl(project.thesis) ? external(project.thesis, `${icon('paper')}Thesis`, 'pill') : ''}${safeUrl(project.code) ? external(project.code, `${icon('code')}Code`, 'pill') : ''}</div></div></article>`;
  const projectYears = [...new Set(projects.map(project => project.year))].sort((a,b) => String(b).localeCompare(String(a)));
  byId('project-list').innerHTML = projectYears.map(year => `<div class="year-heading">${escape(year)}</div>${projects.filter(project => project.year === year).map(projectCard).join('')}`).join('');
  const entries = items => items.map(entry => `<article class="background-entry"><div class="entry-header"><h4>${escape(entry.name)}</h4><time class="entry-date">${escape(entry.date)}</time></div><p class="entry-role">${escape(entry.detail)}</p></article>`).join('');
  byId('experience-list').innerHTML = entries(data.experience.map(entry=>{
    const [role,...location]=entry.detail.split(' · ');
    return {...entry,name:role,detail:[entry.name,...location].join(' · ')};
  }));
  byId('education-list').innerHTML = entries(data.education.map(entry=>({...entry,name:entry.detail,detail:entry.name})));
  byId('award-list').innerHTML=entries((data.awards || []).map(award=>({name:award.title,date:award.date,detail:award.detail})));
  byId('copyright').textContent = `© ${new Date().getFullYear()} ${data.name}`;
  byId('last-updated').textContent = `Last updated ${data.updated}`;
  const themeButton=document.querySelector('.theme-toggle');
  let systemTheme=null;
  try{if(typeof window.matchMedia==='function')systemTheme=window.matchMedia('(prefers-color-scheme: dark)')}catch(e){}
  let hasThemeOverride=false;
  try{hasThemeOverride=['light','dark'].includes(localStorage.getItem('portfolio-theme'))}catch(e){}
  const syncTheme = () => {
    const dark=document.documentElement.dataset.theme==='dark';
    themeButton.innerHTML=icon(dark?'sun':'moon'); themeButton.setAttribute('aria-label',`Switch to ${dark?'light':'dark'} mode`); themeButton.setAttribute('aria-pressed',String(dark));
  };
  syncTheme();
  const followSystemTheme=event=>{if(!hasThemeOverride){document.documentElement.dataset.theme=event.matches===true?'dark':'light';syncTheme()}};
  if(systemTheme){if(typeof systemTheme.addEventListener==='function')systemTheme.addEventListener('change',followSystemTheme);else if(typeof systemTheme.addListener==='function')systemTheme.addListener(followSystemTheme)}
  themeButton.addEventListener('click',()=>{hasThemeOverride=true;const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('portfolio-theme',next)}catch(e){}syncTheme()});
  const cardZoom=byId('card-zoom');
  const zoomContent=byId('card-zoom-content');
  let zoomSourceVideo=null;
  let resumeSourceVideo=false;
  let previousOverflow='';
  const openCardZoom=(card,fromKeyboard=false)=>{
    if(window.innerWidth<=740||cardZoom.open)return;
    const enlarged=card.cloneNode(true);
    enlarged.removeAttribute('id');
    enlarged.removeAttribute('tabindex');
    enlarged.removeAttribute('aria-haspopup');
    enlarged.removeAttribute('aria-controls');
    enlarged.removeAttribute('title');
    enlarged.querySelector('h3').id='card-zoom-title';
    zoomSourceVideo=card.querySelector('video');
    resumeSourceVideo=zoomSourceVideo&&!zoomSourceVideo.paused;
    if(zoomSourceVideo)zoomSourceVideo.pause();
    const enlargedVideo=enlarged.querySelector('video');
    if(enlargedVideo){
      enlargedVideo.removeAttribute('autoplay');
      enlargedVideo.addEventListener('loadedmetadata',()=>{
        try{enlargedVideo.currentTime=zoomSourceVideo.currentTime}catch(e){}
        if(resumeSourceVideo)enlargedVideo.play().catch(()=>{});
      },{once:true});
    }
    zoomContent.replaceChildren(enlarged);
    previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    cardZoom.classList.toggle('pointer-open',!fromKeyboard);
    cardZoom.showModal();
  };
  const researchCards=[...document.querySelectorAll('#research article.paper')];
  const syncCardExpansion=()=>{
    const enabled=window.innerWidth>740;
    researchCards.forEach(card=>{
      if(enabled){
        card.tabIndex=0;
        card.setAttribute('aria-haspopup','dialog');
        card.setAttribute('aria-controls','card-zoom');
        card.title='Click to enlarge';
      }else{
        ['tabindex','aria-haspopup','aria-controls','title'].forEach(attribute=>card.removeAttribute(attribute));
      }
    });
    if(!enabled&&cardZoom.open)cardZoom.close();
  };
  researchCards.forEach(card=>{
    card.addEventListener('click',event=>{
      if(event.target.closest('a,button,video')||event.defaultPrevented||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
      openCardZoom(card);
    });
    card.addEventListener('keydown',event=>{
      if(event.target===card&&(event.key==='Enter'||event.key===' ')){event.preventDefault();openCardZoom(card,true)}
    });
  });
  syncCardExpansion();
  window.addEventListener('resize',syncCardExpansion);
  cardZoom.addEventListener('keydown',()=>cardZoom.classList.remove('pointer-open'));
  cardZoom.querySelector('.card-zoom-close').addEventListener('click',()=>cardZoom.close());
  cardZoom.addEventListener('click',event=>{
    if(event.target!==cardZoom)return;
    const bounds=cardZoom.getBoundingClientRect();
    if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)cardZoom.close();
  });
  cardZoom.addEventListener('close',()=>{
    zoomContent.querySelectorAll('video').forEach(video=>video.pause());
    zoomContent.replaceChildren();
    document.body.style.overflow=previousOverflow;
    if(resumeSourceVideo&&zoomSourceVideo)zoomSourceVideo.play().catch(()=>{});
    zoomSourceVideo=null;
    resumeSourceVideo=false;
  });
  const navLinks = [...document.querySelectorAll('nav a')];
  const sections = [...document.querySelectorAll('main > section')].filter(section => !section.hidden);
  let scrollIdleTimer;
  let navigationScrolling=false;
  let scrollFrame=0;
  const setActiveSection = hash => {
    if (hash === '#publications' || hash === '#projects') hash = '#research';
    navLinks.forEach(link => {
      const active = link.hash === hash;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const syncActiveSection = () => {
    if(cardZoom.open)return;
    const headerBottom=Math.max(0,document.querySelector('.site-header').getBoundingClientRect().bottom);
    const scrollPadding=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;
    const headingZoneBottom=Math.max(headerBottom,scrollPadding)+48;
    const sectionAtTop=sections.find(section=>{
      const heading=section.querySelector('h1,h2');
      if(!heading)return false;
      const bounds=heading.getBoundingClientRect();
      return bounds.top>=headerBottom-8&&bounds.top<=headingZoneBottom&&bounds.bottom>headerBottom;
    });
    if(sectionAtTop){setActiveSection(sectionAtTop.id ? `#${sectionAtTop.id}` : '');return}
    let currentSection;
    let largestVisibleHeight=0;
    sections.forEach(section=>{
      const bounds=section.getBoundingClientRect();
      const visibleHeight=Math.max(0,Math.min(bounds.bottom,window.innerHeight)-Math.max(bounds.top,headerBottom));
      if(visibleHeight>largestVisibleHeight){largestVisibleHeight=visibleHeight;currentSection=section}
    });
    setActiveSection(currentSection&&currentSection.id ? `#${currentSection.id}` : '');
  };
  // Keep the destination selected during anchor scrolling; then prefer a
  // heading at the top before comparing visible section areas.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    navigationScrolling=true;
    clearTimeout(scrollIdleTimer);
    scrollIdleTimer=setTimeout(finishScrolling,180);
    setActiveSection(link.hash);
  });
  const finishScrolling = () => {
    clearTimeout(scrollIdleTimer);
    navigationScrolling=false;
    syncActiveSection();
  };
  window.addEventListener('scroll', () => {
    clearTimeout(scrollIdleTimer);
    scrollIdleTimer = setTimeout(finishScrolling, 160);
    if(!navigationScrolling&&!scrollFrame)scrollFrame=requestAnimationFrame(()=>{scrollFrame=0;if(!navigationScrolling)syncActiveSection()});
  }, {passive: true});
  window.addEventListener('scrollend', finishScrolling);
  window.addEventListener('hashchange', () => {
    navigationScrolling=true;
    clearTimeout(scrollIdleTimer);
    scrollIdleTimer=setTimeout(finishScrolling,180);
    setActiveSection(location.hash);
  });
  const resumeScrollTracking=()=>{
    navigationScrolling=false;
  };
  window.addEventListener('wheel',resumeScrollTracking,{passive:true});
  window.addEventListener('touchmove',resumeScrollTracking,{passive:true});
  window.addEventListener('keydown',event=>{
    if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key)&&!event.target.closest('input,textarea,select,button,a,[contenteditable]'))resumeScrollTracking();
  });
  window.addEventListener('pointerdown',event=>{
    if(event.clientX>=document.documentElement.clientWidth)resumeScrollTracking();
  });
  window.addEventListener('load', syncActiveSection);
  window.addEventListener('resize',syncActiveSection);
  setActiveSection(location.hash);
})();
