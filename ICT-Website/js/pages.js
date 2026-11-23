/* Infiniti Code Technologies - single-section page navigation + careers apply modal */
(function(){
'use strict';
var D=document,W=window;
var PAGES=['home','services','projects','about','leadership','careers','contact'];
var TITLES={home:'Infiniti Code Technologies Private Limited | Software Development, Bengaluru',services:'Services | Infiniti Code Technologies',projects:'Projects | Infiniti Code Technologies',about:'About Us | Infiniti Code Technologies',leadership:'Leadership | Infiniti Code Technologies',careers:'Careers | Infiniti Code Technologies',contact:'Contact | Infiniti Code Technologies'};
/* old anchor names still resolve to a page */
var ALIAS={top:'home','main-content':'home',work:'projects',portfolio:'projects',ceo:'leadership',process:'services',faq:'about',jobs:'careers'};
var current=null;

function resolve(hash){
  var k=String(hash||'').replace(/^#\/?/,'').toLowerCase();
  if(!k)return 'home';
  if(PAGES.indexOf(k)>-1)return k;
  return ALIAS[k]||null;
}
function show(page,opts){
  opts=opts||{};
  if(PAGES.indexOf(page)<0)page='home';
  var changed=page!==current;
  current=page;
  D.body.setAttribute('data-page',page);
  [].forEach.call(D.querySelectorAll('main>[data-page]'),function(el){
    el.classList.toggle('pg-on',el.getAttribute('data-page')===page);
  });
  [].forEach.call(D.querySelectorAll('#nv li:not(.mq) a'),function(a){
    var on=resolve(a.getAttribute('href'))===page;
    a.classList.toggle('on',on);
    if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
  });
  D.title=TITLES[page]||D.title;
  if(opts.push&&changed){
    try{history.pushState({page:page},'','#'+page)}catch(e){try{W.location.hash=page}catch(x){}}
  }
  if(changed||opts.force){
    W.scrollTo({top:0,left:0,behavior:'instant'});
    /* let canvases/layout-dependent widgets re-measure the newly visible page */
    requestAnimationFrame(function(){W.dispatchEvent(new Event('resize'));W.dispatchEvent(new Event('scroll'))});
  }
}
W.ictShowPage=function(p){show(resolve(p)||'home',{push:true})};

/* click on any in-page link (nav, buttons, footer, CTAs) */
D.addEventListener('click',function(e){
  if(e.defaultPrevented||e.button>0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  var a=e.target.closest&&e.target.closest('a[href^="#"]');
  if(!a)return;
  var page=resolve(a.getAttribute('href'));
  if(!page)return;
  e.preventDefault();
  show(page,{push:true});
},true);

W.addEventListener('hashchange',function(){
  var p=resolve(W.location.hash);
  if(p&&p!==current){show(p);}
  W.scrollTo({top:0,left:0,behavior:'instant'});
});

show(resolve(W.location.hash)||'home',{force:true});
try{history.replaceState({page:current},'','#'+current)}catch(e){}
if('scrollRestoration' in history)history.scrollRestoration='manual';

/* ---------- Careers: Apply Now modal ---------- */
function initApply(){
  var modal=D.getElementById('apply-modal'),form=D.getElementById('apply-form');
  if(!modal||!form)return;
  var title=D.getElementById('apply-title'),sub=D.getElementById('apply-sub'),ok=D.getElementById('apply-ok'),
      close=modal.querySelector('.apply-close'),last=null,role='',exp='';
  function open(card,btn){
    role=card.getAttribute('data-role');exp=card.getAttribute('data-exp');last=btn;
    title.textContent='Apply for '+role;
    sub.textContent='Experience required: '+exp+' · Bengaluru, India · Full-time';
    form.reset();form.classList.remove('touched');ok.textContent='';ok.className='f';ok.style.display='none';
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');D.body.style.overflow='hidden';
    setTimeout(function(){var f=form.elements.name;if(f)f.focus()},50);
  }
  function shut(){
    modal.classList.remove('open');modal.setAttribute('aria-hidden','true');D.body.style.overflow='';
    if(last&&last.focus)last.focus();
  }
  [].forEach.call(D.querySelectorAll('.job-apply'),function(b){
    b.addEventListener('click',function(){open(b.closest('.job'),b)});
  });
  close.addEventListener('click',shut);
  modal.addEventListener('click',function(e){if(e.target===modal)shut()});
  D.addEventListener('keydown',function(e){if(e.key==='Escape'&&modal.classList.contains('open'))shut()});
  W.addEventListener('hashchange',function(){if(modal.classList.contains('open'))shut()});

  function msg(t,err){ok.textContent=t;ok.className='f'+(err?' err':'');ok.style.display='block'}
  form.addEventListener('submit',function(e){
    e.preventDefault();form.classList.add('touched');
    var el=form.elements,name=el.name.value.trim(),mail=el.email.value.trim(),phone=el.phone.value.trim();
    if(!name||!mail||!phone){msg('Please fill in your name, email and phone number.',true);return}
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail)){msg('Please enter a valid email address.',true);return}
    var file=el.resume_file.files[0];
    if(!file){msg('Please upload your resume (PDF, DOC or DOCX).',true);return}
    if(!/\.(pdf|docx?)$/i.test(file.name)){msg('Resume must be a PDF, DOC or DOCX file.',true);return}
    if(file.size>5*1024*1024){msg('Resume file is too large. Please keep it under 5 MB.',true);return}
    if(el.resume.value.trim()&&!/^https?:\/\//i.test(el.resume.value.trim())){msg('Resume link must start with http:// or https://',true);return}
    var key=(typeof W.WEB3FORMS_KEY!=='undefined')?W.WEB3FORMS_KEY:(typeof WEB3FORMS_KEY!=='undefined'?WEB3FORMS_KEY:'');
    if(!key||String(key).indexOf('PASTE')===0){msg('Form is not set up yet: add the Web3Forms access key in js/script.js.',true);return}
    var btn=form.querySelector('button[type=submit]'),label=btn.textContent;
    btn.disabled=true;btn.textContent='Submitting...';
    var data={access_key:key,subject:'Job application: '+role+' ('+exp+') - '+name,from_name:'Infiniti Code Careers',
      position:role,experience_required:exp,name:name,email:mail,phone:phone,total_experience:el.experience.value.trim()||'not provided',
      link:el.resume.value.trim()||'not provided',message:el.message.value.trim()||'-',botcheck:el._honey.value};
    var fd=new FormData();Object.keys(data).forEach(function(k){fd.append(k,data[k])});
    fd.append('attachment',file,file.name);
    fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Accept':'application/json'},body:fd})
      .then(function(r){return r.json()})
      .then(function(j){
        if(j&&j.success){form.reset();form.classList.remove('touched');msg('Thank you! Your application for '+role+' has been submitted. We will get back to you soon.')}
        else throw new Error((j&&j.message)||'Request rejected');
      })
      .catch(function(err){msg('Could not submit your application ('+(err&&err.message||'network error')+'). Please email your resume to info@infiniticodetech.com.',true)})
      .finally(function(){btn.disabled=false;btn.textContent=label});
  });
}
if(D.readyState==='loading')D.addEventListener('DOMContentLoaded',initApply);else initApply();
/* ---------- Projects: Automation Tools "View More" modal ---------- */
function initAuto(){
  var modal=D.getElementById('auto-modal');if(!modal)return;
  var title=D.getElementById('auto-title'),body=D.getElementById('auto-body'),close=modal.querySelector('.auto-close'),last=null;
  function open(card,btn){
    last=btn;title.textContent=card.querySelector('h3').textContent;var mb=D.getElementById('auto-mbadge'),cb=card.querySelector('.auto-badge');if(mb&&cb)mb.textContent=cb.textContent;
    body.innerHTML=card.querySelector('.auto-full').innerHTML;
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');D.body.style.overflow='hidden';
    modal.querySelector('.auto-panel').scrollTop=0;close.focus();
  }
  function shut(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');D.body.style.overflow='';if(last&&last.focus)last.focus()}
  [].forEach.call(D.querySelectorAll('.auto-more'),function(b){b.addEventListener('click',function(){open(b.closest('.auto'),b)})});
  close.addEventListener('click',shut);
  modal.addEventListener('click',function(e){if(e.target===modal)shut()});
  D.addEventListener('keydown',function(e){if(e.key==='Escape'&&modal.classList.contains('open'))shut()});
  W.addEventListener('hashchange',function(){if(modal.classList.contains('open'))shut()});
}
if(D.readyState==='loading')D.addEventListener('DOMContentLoaded',initAuto);else initAuto();
})();
