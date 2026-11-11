/* ===== ENQUIRY FORM SETUP =====
   1. Go to https://web3forms.com, enter info@infiniticodetech.com, get the Access Key by email.
   2. Paste it below. Enquiries then arrive directly in that inbox. */
var WEB3FORMS_KEY='fd0211fa-5b1e-451e-886c-6826caca760a';

/* Infiniti Code Technologies - scripts */

(function(){var c=document.getElementById('lc'),ld=document.getElementById('ld'),x=c.getContext('2d'),W,H,dp=Math.min(devicePixelRatio||1,2),N=innerWidth<760?36:70,P=[],t0=performance.now();
function rs(){W=c.width=innerWidth*dp;H=c.height=innerHeight*dp}rs();addEventListener('resize',rs);
for(var i=0;i<N;i++)P.push({a:Math.random()*6.283,r:.14+Math.random()*.4,s:(Math.random()-.5)*.22,z:Math.random(),ph:Math.random(),c:i%3?'167,139,250':'103,232,249'});
function f(now){if(ld.style.display==='none')return;requestAnimationFrame(f);var t=(now-t0)/1000,m=Math.min(W,H),cx=W/2,cy=H/2,k=Math.min(1,t/2.2),q=[];
x.clearRect(0,0,W,H);x.globalCompositeOperation='lighter';x.lineWidth=dp;
for(i=0;i<3;i++){var u=(t*.35+i/3)%1;x.strokeStyle='rgba(139,92,246,'+(.35*(1-u))+')';x.beginPath();x.arc(cx,cy,u*m*.75,0,6.283);x.stroke()}
P.forEach(function(p){var a=p.a+t*p.s,R=m*(p.r+Math.sin(t*.7+p.ph*6)*.02)*(W>H?1.7:1.45);q.push([cx+Math.cos(a)*R*(W>H?1.5:1),cy+Math.sin(a)*R*.85,p])});
q.forEach(function(a,i){for(var j=i+1;j<q.length;j++){var d=Math.hypot(a[0]-q[j][0],a[1]-q[j][1]),L=m*.3;if(d<L){x.strokeStyle='rgba(139,110,240,'+(.22*(1-d/L)*k)+')';x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(q[j][0],q[j][1]);x.stroke()}}
var ex=cx+(a[0]-cx)*k,ey=cy+(a[1]-cy)*k;x.strokeStyle='rgba('+a[2].c+',.28)';x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(ex,ey);x.stroke();
if(k>.95){var v=(t*.45+a[2].ph)%1;x.fillStyle='rgba(200,245,255,.9)';x.beginPath();x.arc(a[0]+(cx-a[0])*v,a[1]+(cy-a[1])*v,1.8*dp,0,6.283);x.fill()}
x.fillStyle='rgba('+a[2].c+','+(.5+a[2].z*.5)+')';x.beginPath();x.arc(a[0],a[1],(1.4+a[2].z*2.8)*dp*(.6+k*.4),0,6.283);x.fill()});
var g=x.createRadialGradient(cx,cy,0,cx,cy,m*.28);g.addColorStop(0,'rgba(139,92,246,'+(.35+.15*Math.sin(t*2.6))+')');g.addColorStop(1,'rgba(139,92,246,0)');x.fillStyle=g;x.fillRect(0,0,W,H)}
requestAnimationFrame(f)})();

(function(){
var d=document,r=d.documentElement,nv=d.getElementById('nv'),mb=d.getElementById('mb'),hd=d.querySelector('header'),up=d.getElementById('up'),tt=d.getElementById('tt');
mb.onclick=function(){var o=nv.classList.toggle('o');mb.setAttribute('aria-expanded',o)};
nv.onclick=function(){nv.classList.remove('o');mb.setAttribute('aria-expanded',false)};
function dark(){var t=r.getAttribute('data-theme');return t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches}
function icon(){var k=dark();tt.innerHTML='<svg class="i"><use href="#'+(k?'sun':'moon')+'"/></svg>';tt.setAttribute('aria-label',k?'Switch to light theme':'Switch to dark theme')}
try{var sv=localStorage.getItem('ic-theme');if(sv)r.setAttribute('data-theme',sv)}catch(e){}
icon();
tt.onclick=function(){var n=dark()?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('ic-theme',n)}catch(e){}icon()};
up.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
var links=[].slice.call(nv.querySelectorAll('a')),secs=links.map(function(a){return d.querySelector(a.getAttribute('href'))});
function onS(){var y=scrollY;hd.classList.toggle('sc',y>8);up.classList.toggle('show',y>700);var cur=0;secs.forEach(function(el,i){if(el&&el.getBoundingClientRect().top<=140)cur=i});links.forEach(function(a,i){a.classList.toggle('on',i===cur)})}
addEventListener('scroll',onS,{passive:true});onS();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
 d.querySelectorAll('.head,.card,.pr,.st,.tg div,.mv div,.faq details,.cb,.scene,form').forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
}
var f=d.getElementById('f'),ok=d.getElementById('ok');
f.addEventListener('submit',function(e){
 e.preventDefault();f.classList.add('touched');ok.classList.remove('err');
 var el=f.elements,name=el[0].value.trim(),mail=el[1].value.trim(),type=el[2].value,msg=el[3].value.trim();
 if(!name||!msg){ok.textContent='Please fill in your name and message.';ok.classList.add('err');ok.style.display='block';return}
 if(mail&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail)){ok.textContent='Please enter a valid email address.';ok.classList.add('err');ok.style.display='block';return}
 var btn=f.querySelector('button[type=submit]'),label=btn.textContent;
 if(!WEB3FORMS_KEY||WEB3FORMS_KEY.indexOf('PASTE')===0){ok.textContent='Form is not set up yet: add the Web3Forms access key at the top of js/script.js.';ok.classList.add('err');ok.style.display='block';return}
 btn.disabled=true;btn.textContent='Sending...';
 var data={access_key:WEB3FORMS_KEY,subject:'New project enquiry from '+name,from_name:'Infiniti Code Website',name:name,email:mail||'not provided',project_type:type,message:msg,botcheck:f.elements._honey.value};
 fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)})
 .then(function(r){return r.json()})
 .then(function(j){
  if(j&&j.success){f.reset();f.classList.remove('touched');ok.textContent='Thank you! Your enquiry has been sent. We will get back to you soon.';ok.style.display='block'}
  else throw new Error((j&&j.message)||'Request rejected')
 })
 .catch(function(err){
  console.error('Enquiry send failed:',err);
  ok.textContent='Could not send your enquiry ('+(err&&err.message||'network error')+'). Please email info@infiniticodetech.com or call +91 94910 73227.';ok.classList.add('err');ok.style.display='block';
 })
 .finally(function(){btn.disabled=false;btn.textContent=label});
});
})();

(function(){var pr=document.getElementById('prog'),t=false;
function u(){t=false;var h=document.documentElement.scrollHeight-innerHeight;pr.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')'}
addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(u)}},{passive:true});u();
var v=document.querySelector('.hero .vis');
if(v&&matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches){
 v.addEventListener('mousemove',function(e){var r=v.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;v.style.transform='perspective(900px) rotateY('+(x*8)+'deg) rotateX('+(-y*8)+'deg)'});
 v.addEventListener('mouseleave',function(){v.style.transform=''});}
})();

/* Progressive enhancement: reveal on scroll without scroll-jacking. */
(function(){
  if(!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.head,.card,.pr,.two,.ct,.faqw,.cb,#ceo .w,#about .w,#process .w').forEach(function(el){el.classList.add('reveal-in')}); return;
  }
  var items=document.querySelectorAll('.head,.card,.pr,.two,.ct,.faqw,.cb,#ceo .w,#about .w,#process .w');
  var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('reveal-in');io.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -35px 0px'});
  items.forEach(function(el){io.observe(el)});
})();

(function(){
var D=document,H=D.documentElement,$=function(i){return D.getElementById(i)};
H.setAttribute('data-theme','dark');
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,mob=innerWidth<760,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
var ld=$('ld'),bar=$('lbar'),logo=D.querySelector('.mk'),logoSrc=logo?logo.src:'';
$('ldl').src=logoSrc;
requestAnimationFrame(function(){bar.style.width='100%'});
var LT=performance.now(),dn=0;
function done(){if(dn)return;dn=1;setTimeout(function(){if(window.__introHold)return;ld.classList.add('off');H.classList.add('go');setTimeout(function(){ld.style.display='none'},1000)},Math.max(0,5000-(performance.now()-LT)))}
setTimeout(done,7000);
try{
if(typeof THREE==='undefined'){setTimeout(done,500);return}
var cv=$('gl'),R;
try{R=new THREE.WebGLRenderer({canvas:cv,antialias:false,powerPreference:'high-performance'})}catch(e){setTimeout(done,300);return}
var PR=Math.min(devicePixelRatio||1,1.25);R.setPixelRatio(PR);
var fogA=new THREE.Color(0x040a1c),fogB=new THREE.Color(0x0b0722);
var S=new THREE.Scene();S.fog=new THREE.FogExp2(0x040a1c,.014);
var C=new THREE.PerspectiveCamera(55,1,.1,700);
var V=function(x,y,z){return new THREE.Vector3(x,y,z)};
var AD=THREE.AdditiveBlending;

/* camera flight path */
var path=new THREE.CatmullRomCurve3([V(0,2.2,18),V(-1,1.8,6),V(-5.2,1.2,-14),V(-2,2.2,-30),V(3,1.6,-48),V(-2.5,2.4,-66),V(2,1.8,-84),V(0,2.6,-102),V(0,3.4,-124)],false,'catmullrom',.5);
function uAtZ(z){var b=0,bd=1e9;for(var u=0;u<=1;u+=.002){var d=Math.abs(path.getPointAt(u).z-z);if(d<bd){bd=d;b=u}}return b}
function glowTex(){var c=D.createElement('canvas');c.width=c.height=128;var x=c.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.25,'rgba(190,150,255,.55)');g.addColorStop(1,'rgba(120,60,255,0)');x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(c)}
var GT=glowTex();
/* lights */
S.add(new THREE.AmbientLight(0x7a5cff,.6));
var PL=new THREE.PointLight(0xb48cff,1.5,70);S.add(PL);
var DL=new THREE.DirectionalLight(0x38bdf8,.6);DL.position.set(-1,1,.6);S.add(DL);
/* infinity symbol with the company logo */
var LP=[];for(var k=0;k<96;k++){var uu=k/96*6.2832,ss=Math.sin(uu),dd=1+ss*ss;LP.push(V(10*Math.cos(uu)/dd,10*ss*Math.cos(uu)/dd,0))}
var LC=new THREE.CatmullRomCurve3(LP,true);
var inf=new THREE.Group();
inf.add(new THREE.Mesh(new THREE.TubeGeometry(LC,360,.17,10,true),new THREE.MeshStandardMaterial({color:0x1a0b3d,emissive:0x8b5cf6,emissiveIntensity:1.8,metalness:.6,roughness:.25})));
inf.add(new THREE.Mesh(new THREE.TubeGeometry(LC,180,.7,8,true),new THREE.MeshBasicMaterial({color:0x8b5cf6,transparent:true,opacity:.13,blending:AD,depthWrite:false})));
var lp=null;
var bg=new THREE.Group(),bgr=[],bsc=1;C.add(bg);S.add(C);bg.position.set(0,0,-34);
var gs=new THREE.Sprite(new THREE.SpriteMaterial({map:GT,color:0x7c3aed,blending:AD,depthWrite:false,fog:false,opacity:.6}));gs.scale.set(48,48,1);gs.position.z=-1;bg.add(gs);
if(logoSrc)new THREE.TextureLoader().load(logoSrc,function(tx){for(var q9=0;q9<2;q9++){var lm=new THREE.Mesh(new THREE.PlaneGeometry(30,17.6),new THREE.MeshBasicMaterial({map:tx,transparent:true,blending:AD,depthWrite:false,side:THREE.DoubleSide,fog:false,opacity:1}));lm.position.z=q9*.05;bg.add(lm)}});
[[9,0x8b5cf6],[12,0x22d3ee],[15,0xc4a0ff]].forEach(function(a,i){var r=new THREE.Mesh(new THREE.TorusGeometry(a[0],.045,8,120),new THREE.MeshBasicMaterial({color:a[1],transparent:true,opacity:.55,blending:AD,depthWrite:false,fog:false}));r.rotation.x=1.1+i*.5;bg.add(r);bgr.push(r)});
inf.position.set(0,1.2,-14);S.add(inf);
function fit(){var a=innerWidth/innerHeight,s=Math.min(1,a*1.45);inf.scale.setScalar(s);inf.position.x=path.getPointAt(uAtZ(-14)).x+6*s}
/* neural network + ring tunnel */
var NN=mob?90:200,NP=[],NL=[];
for(var i=0;i<NN;i++){var q=path.getPointAt(Math.random()),an=Math.random()*6.283,rr=8+Math.random()*30;NP.push(V(q.x+Math.cos(an)*rr,q.y+Math.sin(an)*rr*.7,q.z+(Math.random()-.5)*10))}
NP.forEach(function(a,i){NP.map(function(b,k){return[a.distanceTo(b),k]}).sort(function(x,y){return x[0]-y[0]}).slice(1,3).forEach(function(n){if(n[0]<16)NL.push(a.x,a.y,a.z,NP[n[1]].x,NP[n[1]].y,NP[n[1]].z)})});
var lg=new THREE.BufferGeometry();lg.setAttribute('position',new THREE.Float32BufferAttribute(NL,3));S.add(new THREE.LineSegments(lg,new THREE.LineBasicMaterial({color:0x6d6bf0,transparent:true,opacity:.38,blending:AD,depthWrite:false})));
var ng=new THREE.BufferGeometry().setFromPoints(NP),nodes=new THREE.Points(ng,new THREE.PointsMaterial({color:0x9be7ff,size:mob?3.5:4.5,sizeAttenuation:false,transparent:true,blending:AD,depthWrite:false,map:GT}));S.add(nodes);
var rings=[];
for(i=0;i<16;i++){var u=.1+i*.056,q2=path.getPointAt(u),g=new THREE.Group(),c1=i%2?0x22d3ee:0x8b5cf6,r0=7+(i%3)*1.2;
var m1=new THREE.Mesh(new THREE.TorusGeometry(r0,.07,8,110),new THREE.MeshBasicMaterial({color:c1,transparent:true,opacity:.85,blending:AD,depthWrite:false}));
var m2=new THREE.Mesh(new THREE.TorusGeometry(r0*1.3,.03,6,110,4.2),new THREE.MeshBasicMaterial({color:0xc4a0ff,transparent:true,opacity:.4,blending:AD,depthWrite:false}));
g.add(m1);g.add(m2);g.position.copy(q2);g.lookAt(q2.clone().add(path.getTangentAt(u)));S.add(g);rings.push(m2)}
/* floating shards */
var M=mob?18:36,sh=new THREE.InstancedMesh(new THREE.OctahedronGeometry(.5),new THREE.MeshStandardMaterial({color:0x2b145c,emissive:0x0e7490,emissiveIntensity:.7,flatShading:true,metalness:.8,roughness:.3}),M),sd2=[];
for(i=0;i<M;i++)sd2.push({x:(Math.random()-.5)*34,y:-1+Math.random()*15,z:14-Math.random()*140,s:.4+Math.random()*1.5,r:Math.random()*6,v:.2+Math.random()*.6});
S.add(sh);
/* embers */
var PN=mob?400:800,pp=new Float32Array(PN*3),ps=new Float32Array(PN);
for(i=0;i<PN;i++){pp[i*3]=(Math.random()-.5)*70;pp[i*3+1]=-3+Math.random()*26;pp[i*3+2]=22-Math.random()*155;ps[i]=Math.random()}
var pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pp,3));pg.setAttribute('s',new THREE.BufferAttribute(ps,1));
var pm=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:AD,uniforms:{t:{value:0},px:{value:PR}},
vertexShader:'uniform float t,px;attribute float s;varying float v;void main(){vec3 p=position;p.y=mod(p.y-t*(.5+s*1.1)+3.,26.)-3.;p.x+=sin(t*.4+s*30.)*1.6;p.z+=cos(t*.3+s*20.)*1.;vec4 m=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*m;gl_PointSize=min(38.,(1.4+s*3.6)*px*26./-m.z);v=s;}',
fragmentShader:'varying float v;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,0.,d);gl_FragColor=vec4(mix(vec3(.55,.36,1.),vec3(.25,.85,1.),v),a*.85);}'});
S.add(new THREE.Points(pg,pm));

/* giant words floating in the world */
function word(t,z,col){var c=D.createElement('canvas');c.width=1600;c.height=520;var x=c.getContext('2d');x.font='700 330px Sora,Inter,sans-serif';x.textAlign='center';x.textBaseline='middle';x.lineJoin='round';
var g=x.createLinearGradient(0,60,0,460);g.addColorStop(0,'#ffffff');g.addColorStop(1,col);x.fillStyle=g;x.lineWidth=7;x.strokeStyle='rgba(216,190,255,.95)';x.fillText(t,800,275);x.strokeText(t,800,275);
var tx=new THREE.CanvasTexture(c);tx.anisotropy=4;var m=new THREE.Mesh(new THREE.PlaneGeometry(64,20.8),new THREE.MeshBasicMaterial({map:tx,transparent:true,depthWrite:false,opacity:.93}));
var u=uAtZ(z),p=path.getPointAt(u);m.position.set(p.x,13.5,z);S.add(m);return m}
var words=[];
function mkWords(){[['IDEAS',-26,'#c4a0ff'],['CODE',-62,'#67e8f9'],['IMPACT',-98,'#a78bfa']].forEach(function(a){words.push(word(a[0],a[1],a[2]))})}
(D.fonts&&D.fonts.load?D.fonts.load('700 100px Sora','IDEASCOTMP').catch(function(){}):Promise.resolve()).then(mkWords);
/* resize */
function rs(){var w=innerWidth,h=innerHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix();pm.uniforms.px.value=PR;bsc=Math.min(1,C.aspect*1.3);fit()}
addEventListener('resize',rs);rs();
/* input */
var mx=0,my=0,tx=0,ty=0,cx=0,cy=0,cur=$('cur');
addEventListener('pointermove',function(e){tx=e.clientX/innerWidth*2-1;ty=e.clientY/innerHeight*2-1;cx=e.clientX;cy=e.clientY;if(fine)cur.style.opacity=1},{passive:true});
/* smooth scroll (Lenis) */
var L=null;
if(window.Lenis&&!reduce){try{L=new Lenis({lerp:.085,smoothWheel:true});H.classList.add('lenis');
D.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var h=a.getAttribute('href'),el=h.length>1&&D.querySelector(h);if(el){e.preventDefault();L.scrollTo(el,{offset:-72})}})});
$('up').onclick=function(){L.scrollTo(0)}}catch(e){L=null}}
/* HUD */
var secs=[].slice.call(D.querySelectorAll('main>section')),names=['Home','Services','Portfolio','About Us','Why Us','Technologies','Process','CEO','FAQ','Start a Project','Contact'],hud=$('hud'),hn=$('hn'),ht=$('ht'),shh=$('sh'),ci=-1,ly=-1;
function upHud(){var y=innerHeight*.45,i=0;secs.forEach(function(s,k){if(s.getBoundingClientRect().top<=y)i=k});shh.classList.toggle('h',scrollY>80);if(i!==ci){ci=i;hn.textContent=('0'+(i+1)).slice(-2);ht.textContent=names[i]||'';hud.classList.remove('pop');void hud.offsetWidth;hud.classList.add('pop')}}
/* loop */
var fs=0,fn=0,lowq=0,spv=0,last=performance.now(),t0=last,fk=0,cl=new THREE.Color(),started=0,look=V(0,0,0);
function frame(now){
 requestAnimationFrame(frame);if(L){try{L.raf(now)}catch(e){try{L.destroy()}catch(x){}L=null;H.classList.remove('lenis')}}
 try{
 var dt=Math.min(.05,(now-last)/1000);last=now;var T=reduce?0:(now-t0)/1000;fs+=dt;if(++fn===90){if(fs/90>.021&&!lowq){lowq=1;PR=1;R.setPixelRatio(1);rs()}fs=0;fn=0}
 var h=H.scrollHeight-innerHeight,p=h>0?Math.min(1,Math.max(0,scrollY/h)):0,d=p-spv;
 spv=reduce?p:spv+d*(1-Math.exp(-dt*5));
 mx+=(tx-mx)*(1-Math.exp(-dt*3));my+=(ty-my)*(1-Math.exp(-dt*3));
 fk+=((reduce?0:Math.min(Math.abs(d)*700,13))-fk)*(1-Math.exp(-dt*6));
 var nf=55+fk;if(Math.abs(nf-C.fov)>.01){C.fov=nf;C.updateProjectionMatrix()}
 var s=Math.min(1,Math.max(0,spv)),pt=path.getPointAt(s),tg=path.getTangentAt(s);
 C.position.set(pt.x+mx*1.1+Math.sin(T*.3)*.15,pt.y-my*.6+Math.cos(T*.25)*.1,pt.z);
 look.copy(pt).addScaledVector(tg,10);look.x+=mx*3.2;look.y-=my*1.6;C.lookAt(look);C.rotateZ(-mx*.03);
 PL.position.copy(C.position).add(V(0,2,-4));
 pm.uniforms.t.value=T;nodes.material.opacity=.75+Math.sin(T*2)*.2;for(var r=0;r<rings.length;r++)rings[r].rotation.z=T*.25*(r%2?1:-1)+r;
 inf.rotation.y=Math.sin(T*.4)*.22;inf.rotation.z=Math.sin(T*.3)*.05;if(lp)lp.material.opacity=.8+Math.sin(T*2)*.15;
 for(i=0;i<M;i++){var o=sd2[i];dm.position.set(o.x,o.y+Math.sin(T*o.v+o.r)*.8,o.z);dm.rotation.set(T*o.v+o.r,T*o.v*.7,0);dm.scale.setScalar(o.s);dm.updateMatrix();sh.setMatrixAt(i,dm.matrix)}
 sh.instanceMatrix.needsUpdate=true;dm.rotation.set(0,0,0);
 cl.lerpColors(fogA,fogB,s);S.fog.color.copy(cl);R.setClearColor(cl);
 bg.rotation.set(-my*.2+Math.sin(T*.4)*.12,spv*12.566+Math.sin(T*.5)*.35+mx*.3,Math.sin(T*.3)*.06);
 bg.scale.setScalar((1+Math.sin(T*1.4)*.07+fk*.01)*bsc);
 for(var b=0;b<bgr.length;b++){bgr[b].rotation.z=T*.3*(b%2?1:-1);bgr[b].rotation.y=T*.15*(b+1)}
 R.render(S,C);
 }catch(err){if(!window.__e3){window.__e3=1;console.error('3D frame: '+err.message)}done();}
 if(fine){cur.style.transform='translate('+cx+'px,'+cy+'px)'}
 if(scrollY!==ly){ly=scrollY;upHud()}
 if(!started&&++started){done()}
}
upHud();requestAnimationFrame(frame);
}catch(e){console.error('3D init: '+e.message);done()}
})();

(function(){var D=document,H=D.documentElement,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
setTimeout(function(){H.classList.add('go')},9000);
var lg=D.querySelector('.mk');if(lg){var l=D.createElement('link');l.rel='icon';l.href=lg.src;D.head.appendChild(l)}
[['services','SERVICES'],['work','PORTFOLIO'],['about','ABOUT'],['process','PROCESS'],['ceo','LEADERSHIP'],['contact','CONTACT']].forEach(function(a){var s=D.getElementById(a[0]);if(!s)return;var t=D.createElement('div');t.className='bgt';t.textContent=a[1];t.setAttribute('aria-hidden','true');s.prepend(t);a.push(t,s)});
var B=[].slice.call(D.querySelectorAll('.bgt'));

D.querySelectorAll('.card,.pr,.tg div,.mv div').forEach(function(e){e.addEventListener('pointermove',function(v){var r=e.getBoundingClientRect();e.style.setProperty('--mx',v.clientX-r.left+'px');e.style.setProperty('--my',v.clientY-r.top+'px')},{passive:true})});

})();

(function(){
  var canvas=document.getElementById('hero-fireworks'),hero=document.querySelector('.hero'),ctx=canvas&&canvas.getContext('2d');
  if(!canvas||!hero||!ctx)return;
  var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var w=0,h=0,bursts=[],last=0,colors=['#a78bfa','#67e8f9','#f0abfc','#fbbf24','#c4b5fd'];
  function resize(){var r=hero.getBoundingClientRect();w=canvas.width=Math.max(1,Math.round(r.width*(window.devicePixelRatio||1)));h=canvas.height=Math.max(1,Math.round(r.height*(window.devicePixelRatio||1)));canvas.style.width=r.width+'px';canvas.style.height=r.height+'px';ctx.setTransform(window.devicePixelRatio||1,0,0,window.devicePixelRatio||1,0,0);w=r.width;h=r.height}
  function burst(){var x=Math.random()*w,y=25+Math.random()*Math.max(90,h*.65),n=28+Math.floor(Math.random()*26),c=colors[Math.floor(Math.random()*colors.length)],parts=[];for(var i=0;i<n;i++){var a=Math.PI*2*i/n+(Math.random()-.5)*.12,s=1.1+Math.random()*3.2;parts.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:45+Math.random()*35,max:80,r:1+Math.random()*1.7})}bursts.push({parts:parts,color:c});if(bursts.length>8)bursts.shift()}
  function frame(t){if(document.hidden){requestAnimationFrame(frame);return}if(t-last>850+Math.random()*800){burst();last=t}ctx.clearRect(0,0,w,h);bursts.forEach(function(b){b.parts.forEach(function(p){if(p.life<=0)return;p.x+=p.vx;p.y+=p.vy;p.vy+=.025;p.vx*=.99;p.vy*=.99;p.life--;ctx.globalAlpha=Math.max(0,p.life/p.max);ctx.fillStyle=b.color;ctx.shadowBlur=9;ctx.shadowColor=b.color;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()})});ctx.globalAlpha=1;ctx.shadowBlur=0;bursts=bursts.filter(function(b){return b.parts.some(function(p){return p.life>0})});requestAnimationFrame(frame)}
  resize();window.addEventListener('resize',resize,{passive:true});if(!reduced)requestAnimationFrame(frame);else{burst();frame(0)}
  var lines=['We turn bold ideas into digital experiences.','We build websites, mobile apps and custom software.','We combine thoughtful design with modern technology.','We help businesses work smarter, scale confidently and grow.'];var target=document.getElementById('anime-line'),idx=0;
  if(target&&!reduced){window.setInterval(function(){if(window.__animeSpeaking)return;idx=(idx+1)%lines.length;target.style.opacity='0';window.setTimeout(function(){target.textContent=lines[idx];target.style.opacity='1'},220)},4200)}
  var voiceBtn=document.getElementById('anime-voice'),voiceStatus=document.getElementById('anime-voice-status'),guide=document.getElementById('anime-guide');
  var intro='Hello and welcome to Infiniti Code, entering the innovative experience. We are Infiniti Code Technologies, a technology company creating custom software solutions for a smarter tomorrow. Our professional team builds modern websites, mobile applications, business software, and cloud-connected digital solutions. On the display, you can see how our services help businesses simplify work, connect with customers, improve efficiency, and grow with confidence. We focus on practical ideas, thoughtful design, reliable development, and solutions shaped around each client. At Infinite Code, we turn ideas into useful digital experiences. Let us build a smarter tomorrow together.';
  var autoAttempted=false;
  function stopVoice(){if('speechSynthesis' in window)window.speechSynthesis.cancel();window.__animeSpeaking=false;if(voiceBtn){voiceBtn.textContent='▶ Play voice';voiceBtn.setAttribute('aria-pressed','false')}if(voiceStatus)voiceStatus.textContent='Tap the button to hear the company introduction.'}
  function playVoice(isAuto){
    if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){if(voiceStatus)voiceStatus.textContent='Voice playback is not supported in this browser. Please try Chrome or Edge.';return}
    if(window.__animeSpeaking)return;
    window.speechSynthesis.cancel();
    var utterance=new SpeechSynthesisUtterance(intro);utterance.lang='en-IN';utterance.rate=0.96;utterance.pitch=1.08;
    var voices=window.speechSynthesis.getVoices();var english=voices.filter(function(v){return /^en(-|$)/i.test(v.lang)});var preferred=english.find(function(v){return /samantha|ava|jenny|aria|zira|female|woman|susan|karen|moira|tessa|serena|google us english/i.test(v.name)&&/natural|enhanced|premium/i.test(v.name)})||english.find(function(v){return /samantha|ava|jenny|aria|zira|female|woman|susan|karen|moira|tessa|serena|google us english/i.test(v.name)})||english.find(function(v){return /^en-IN$/i.test(v.lang)&&/female|woman|neerja/i.test(v.name)})||english.find(function(v){return /^en-IN$/i.test(v.lang)})||english.find(function(v){return /^en-US$/i.test(v.lang)})||english[0];if(preferred)utterance.voice=preferred;
    window.__animeSpeaking=true;if(voiceBtn){voiceBtn.textContent='■ Stop voice';voiceBtn.setAttribute('aria-pressed','true')}if(voiceStatus)voiceStatus.textContent='Your professional anime guide is speaking…';
    utterance.onend=function(){stopVoice();if(voiceStatus)voiceStatus.textContent='Company introduction complete. Tap to hear it again.'};
    utterance.onerror=function(){window.__animeSpeaking=false;if(voiceBtn){voiceBtn.textContent='▶ Play voice';voiceBtn.setAttribute('aria-pressed','false')}if(voiceStatus)voiceStatus.textContent=isAuto?'Your browser may block automatic voice playback. Tap “Hear our anime guide” to start.':'Voice playback could not start. Please try again.'};
    try{window.speechSynthesis.speak(utterance)}catch(e){window.__animeSpeaking=false;if(voiceStatus)voiceStatus.textContent='Tap “Hear our anime guide” to start voice playback.'}
  }
  if(voiceBtn){voiceBtn.addEventListener('click',function(){if(window.__animeSpeaking){stopVoice();return}playVoice(false)});window.addEventListener('pagehide',stopVoice)}
  function attemptAutoplay(){/* intentionally disabled: user must press Play voice */}
  /* Attempt narration on page entry and again when the anime display enters view. Browsers may require a tap for audible playback. */
  /* Voice starts only when the visitor presses the play button. */
  if(guide&&'IntersectionObserver' in window){var guideObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting&&entry.intersectionRatio>.25){attemptAutoplay();guideObserver.disconnect()}})},{threshold:[.25,.5]});guideObserver.observe(guide)}
})();

(function(){
 const b=document.getElementById('services-guide-play'),status=document.getElementById('services-guide-status');
 if(!b||!('speechSynthesis' in window)) { if(status) status.textContent='Voice narration is not supported in this browser. Please try Chrome.'; return; }
 const speech='Hello! Welcome to Infinite Code. Let me explain our services. Web application development: we create modern, responsive websites and web applications. Mobile application development: we build apps for Android and iOS. Custom software development: we design software around your business needs. API integration: we connect payment gateways, customer management systems and other services. Digital transformation: we help modernize business processes with technology. IT infrastructure and cloud services: we build secure and scalable foundations. Maintenance and support: we help keep your products updated, secure and running smoothly. Tell us about your idea and let us build a smarter tomorrow together.';
 b.addEventListener('click',function(){if(window.speechSynthesis.speaking){window.speechSynthesis.cancel();b.textContent='▶ Play voice';status.textContent='Narration stopped.';return;}window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(speech);u.rate=1;u.pitch=1;u.onstart=()=>{b.textContent='■ Stop voice';status.textContent='Your anime guide is explaining each service.'};u.onend=()=>{b.textContent='▶ Play voice';status.textContent='Service overview complete.'};u.onerror=()=>{b.textContent='▶ Play voice';status.textContent='Voice playback was blocked. Click the button to try again.'};window.speechSynthesis.speak(u);});
})();

(function(){
 const b=document.getElementById('demoGuideVoice'); if(!b) return;
 const speech="Welcome to our demo projects. TaskFlow is a task management web app that helps teams organize work, track progress and stay on schedule. FitTrack is a mobile fitness demo for workout plans and progress charts, helping users follow their activity. ShopEase is an e-commerce demo that showcases product browsing and a simple online shopping experience. These demos show how Infiniti Code can turn ideas into practical digital solutions.";
 b.addEventListener('click',function(){
   if(!('speechSynthesis' in window)){ b.textContent='Voice unavailable'; return; }
   if(window.speechSynthesis.speaking){window.speechSynthesis.cancel();b.textContent='▶ Play voice';return;}
   const u=new SpeechSynthesisUtterance(speech);u.rate=1;u.pitch=1;
   u.onend=function(){b.textContent='▶ Play voice';};u.onerror=function(){b.textContent='▶ Play voice';};
   b.textContent='■ Stop voice';window.speechSynthesis.speak(u);
 });
})();

(function(){
 var btn=document.getElementById('about-guide-play'),svg=document.querySelector('#about .scene svg');
 if(!btn||!svg)return;
 var T=document.getElementById('ict-b-title'),L=[1,2,3,4].map(function(n){return document.getElementById('ict-b-l'+n)});
 var cards=document.querySelectorAll('#about .mv div');
 var LABEL='▶ Play voice';
 var IDLE={t:'ABOUT US',l:['Hi! I’m your guide.','Tap below to hear who we','are, our mission, vision','and values.']};
 var SEG=[
  {t:'WHO WE ARE',l:['A Bengaluru-based IT company','of passionate developers who','love solving problems and','building useful software.'],card:-1,
   say:'Hello, and welcome! Let me tell you who we are. Infiniti Code Technologies Private Limited is a newly registered IT company based in Bengaluru. We are a team of passionate developers who love solving problems and building useful software products. We bring strong technical skills, a problem-solving mindset, and a commitment to deliver high-quality solutions.'},
  {t:'OUR MISSION',l:['To deliver innovative and','reliable software solutions','that create real value for','our clients.'],card:0,
   say:'Our mission is to deliver innovative and reliable software solutions that create real value for our clients.'},
  {t:'OUR VISION',l:['To become a trusted','technology partner for','businesses worldwide.',''],card:1,
   say:'Our vision is to become a trusted technology partner for businesses worldwide.'},
  {t:'OUR VALUES',l:['Quality · Integrity ·','Collaboration ·','Continuous Learning',''],card:2,
   say:'And our values are quality, integrity, collaboration, and continuous learning. Thank you for listening!'}
 ];
 var active=false,token=0;
 function show(o){T.textContent=o.t;L.forEach(function(e,i){e.textContent=o.l[i]||''})}
 function mark(ci){for(var i=0;i<cards.length;i++)cards[i].classList.toggle('ab-active',i===ci)}
 function talk(on){svg.classList.toggle('ict-talking',on)}
 function reset(){token++;active=false;if('speechSynthesis' in window)window.speechSynthesis.cancel();talk(false);mark(-1);show(IDLE);btn.textContent=LABEL;btn.setAttribute('aria-pressed','false')}
 function pickVoice(){var v=window.speechSynthesis.getVoices();var en=function(x){return /^en-/i.test(x.lang)};
  return v.find(function(x){return /^en-IN$/i.test(x.lang)&&/female|heera|veena|neerja/i.test(x.name)})||v.find(function(x){return en(x)&&/female|zira|samantha|aria|jenny|sonia|susan|karen/i.test(x.name)})||v.find(function(x){return /^en-IN$/i.test(x.lang)})||v.find(function(x){return /^en-GB$/i.test(x.lang)})||v.find(en)}
 function speak(i,my){
  if(my!==token)return;
  if(i>=SEG.length){reset();return}
  var sg=SEG[i];show(sg);mark(sg.card);
  var u=new SpeechSynthesisUtterance(sg.say);u.lang='en-IN';u.rate=1;u.pitch=1;
  var vc=pickVoice();if(vc)u.voice=vc;
  u.onstart=function(){if(my===token)talk(true)};
  u.onend=function(){if(my===token){talk(false);speak(i+1,my)}};
  u.onerror=function(){if(my===token)reset()};
  try{window.speechSynthesis.speak(u)}catch(e){reset()}
 }
 btn.addEventListener('click',function(){
  if(active){reset();return}
  if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){show({t:'ABOUT US',l:['Voice playback is not','supported in this browser.','Please try Chrome or Edge.','']});return}
  active=true;token++;var my=token;window.speechSynthesis.cancel();
  btn.textContent='■ Stop voice';btn.setAttribute('aria-pressed','true');
  talk(true);speak(0,my);
 });
 window.addEventListener('pagehide',reset);
})();

(function(){var S=window.speechSynthesis,cur=null;
function reset(g){g.classList.remove('talk');var b=g.querySelector('.gd-btn');b.innerHTML='&#9654; Hear explanation';b.setAttribute('aria-pressed','false')}
function stop(){if(S)S.cancel();if(cur){reset(cur);cur=null}}
function voice(){var v=S.getVoices();return v.find(function(x){return /^en-IN$/i.test(x.lang)})||v.find(function(x){return /^en-GB$/i.test(x.lang)})||v.find(function(x){return /^en-/i.test(x.lang)})}
document.querySelectorAll('.gd').forEach(function(g){var b=g.querySelector('.gd-btn');
b.addEventListener('click',function(){
if(!S||!window.SpeechSynthesisUtterance){b.textContent='Voice not supported in this browser';return}
if(cur===g){stop();return}
stop();cur=g;
var u=new SpeechSynthesisUtterance(g.querySelector('p').textContent);u.lang='en-IN';u.rate=1;u.pitch=1;var v=voice();if(v)u.voice=v;
u.onend=u.onerror=function(){if(cur===g){reset(g);cur=null}};
g.classList.add('talk');b.innerHTML='&#9632; Stop';b.setAttribute('aria-pressed','true');
S.speak(u)})});
addEventListener('pagehide',stop)})();

/* One consistent female-sounding English voice for every narration across the site. */
(function(){
  if(!window.speechSynthesis || !window.SpeechSynthesisUtterance) return;
  var synth=window.speechSynthesis;
  function femaleEnglishVoice(){
    var voices=synth.getVoices()||[];
    var en=voices.filter(function(v){return /^en([_-]|$)/i.test(v.lang||'')});
    var femaleNames=/samantha|ava|jenny|aria|zira|female|woman|susan|karen|moira|tessa|serena|sonia|heera|veena|neerja|google.*(female|us english)|microsoft.*(jenny|aria|zira|sara|susan)/i;
    return en.find(function(v){return femaleNames.test(v.name||'') && /natural|enhanced|premium/i.test(v.name||'')})
      || en.find(function(v){return femaleNames.test(v.name||'')})
      || en.find(function(v){return /^en-IN$/i.test(v.lang||'') && /female|heera|veena|neerja/i.test(v.name||'')})
      || en.find(function(v){return /^en-GB$/i.test(v.lang||'') && /female|sonia/i.test(v.name||'')})
      || en.find(function(v){return /^en-US$/i.test(v.lang||'')})
      || en[0] || null;
  }
  var nativeSpeak=synth.speak.bind(synth);
  synth.speak=function(utterance){
    try {
      var v=femaleEnglishVoice();
      if(v) utterance.voice=v;
      utterance.lang=(v&&v.lang)||'en-IN';
      /* A relaxed, natural pace and pitch; exact voice quality depends on installed browser voices. */
      utterance.rate=0.94;
      utterance.pitch=1.0;
    } catch(e) {}
    return nativeSpeak(utterance);
  };
  if(synth.onvoiceschanged!==undefined) synth.addEventListener('voiceschanged',function(){});
})();

(function(){
 var section=document.querySelector('#services');
 var modal=document.getElementById('ict-service-modal');
 if(!section||!modal)return;
 var title=modal.querySelector('#ict-service-modal-title'),intro=modal.querySelector('#ict-service-modal-intro'),list=modal.querySelector('#ict-service-modal-list'),close=modal.querySelector('.ict-modal-close'),lastFocus=null;
 var details={
 'Web Application Development':{intro:'We design and develop responsive web applications that make your services easy to access, manage and grow. Each solution is planned around your users and business workflow.',items:['Business websites, portals and customer dashboards','Admin panels, booking systems and web-based workflows','Responsive layouts for desktop, tablet and mobile','Secure authentication, database integration and role-based access','Performance, accessibility and deployment support']},
 'Mobile Application Development':{intro:'We help turn an idea into a practical mobile experience for Android and iOS, with clear navigation and a consistent brand experience.',items:['Android and iOS app planning and UI/UX','Cross-platform app development using suitable technologies such as Flutter or React Native','User accounts, push notifications and API connections','Testing across supported screen sizes and devices','App release preparation and ongoing improvements']},
 'Custom Software Development':{intro:'We build software around the way your business works, rather than forcing your team to fit a generic tool.',items:['Business process and requirements analysis','Internal tools, workflow automation and management systems','Database design and reporting dashboards','Integration with existing systems and data migration','Maintainable architecture and documentation']},
 'API Integration & Third-party Services':{intro:'We connect applications and business tools so information can move reliably between the systems you use.',items:['REST API integration and service connectivity','Payment gateway and CRM integrations where applicable','Third-party platform and cloud-service connections','Data synchronisation, validation and error handling','Integration testing and technical documentation']},
 'Digital Transformation':{intro:'We help identify practical opportunities to improve manual processes and make better use of digital technology.',items:['Review of current workflows and technology needs','Digital solution planning and prioritisation','Process digitisation and automation opportunities','System modernisation and integration planning','Phased implementation recommendations']},
 'IT Infrastructure & Cloud Services':{intro:'We support the planning and management of dependable IT environments that can scale with your organisation.',items:['Cloud and hosting setup guidance','Environment configuration and deployment workflows','Server, application and infrastructure monitoring plans','Backup, access-control and reliability practices','Migration planning and operational documentation']},
 'Maintenance & Support':{intro:'We help keep applications dependable after launch through planned maintenance, troubleshooting and iterative improvements.',items:['Bug investigation and issue resolution','Dependency, security and compatibility updates','Performance checks and reliability improvements','Feature enhancements based on user feedback','Maintenance planning and technical handover']}
 };
 function openDetails(card){var h=card.querySelector('h3');if(!h)return;var name=h.textContent.trim(),d=details[name];if(!d)return;lastFocus=card;title.textContent=name;intro.textContent=d.intro;list.innerHTML='';d.items.forEach(function(item){var li=document.createElement('li');li.textContent=item;list.appendChild(li)});modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';close.focus();}
 function closeDetails(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';if(lastFocus)lastFocus.focus();}
 section.querySelectorAll('.gr.g4 article.card:not(.more8)').forEach(function(card){card.setAttribute('tabindex','0');card.setAttribute('role','button');card.setAttribute('aria-haspopup','dialog');card.addEventListener('click',function(e){if(e.target.closest('a'))return;openDetails(card)});card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openDetails(card)}})});
 close.addEventListener('click',closeDetails);modal.addEventListener('click',function(e){if(e.target===modal)closeDetails()});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&modal.classList.contains('open'))closeDetails()});
 modal.querySelector('#ict-service-modal-cta').addEventListener('click',function(){closeDetails()});
})();

(function(){
 var modal=document.getElementById('ict-service-modal'); if(!modal)return;
 var title=modal.querySelector('#ict-service-modal-title'),intro=modal.querySelector('#ict-service-modal-intro'),list=modal.querySelector('#ict-service-modal-list'),close=modal.querySelector('.ict-modal-close'),lastFocus=null;
 var extra={
 'Experienced Team':{intro:'We bring together development, design and technical problem-solving skills to help shape digital products around a client’s goals. We keep the process collaborative and explain decisions in clear language.',items:['Discuss business goals and user needs before development','Combine interface design, application logic and data handling','Break work into understandable milestones','Share progress and gather feedback during development','Provide handover notes and guidance for the delivered solution']},
 'Client-Centric Approach':{intro:'The solution should fit your business, users and priorities. We start by understanding what success means to you, then keep communication open as the work progresses.',items:['Understand your requirements, users and constraints','Agree on scope, priorities and expected deliverables','Provide clear updates and review points','Use feedback to refine the solution','Discuss trade-offs, timelines and changes transparently']},
 'Modern Technologies':{intro:'We select technologies according to the project’s needs, maintainability, team capabilities and deployment requirements—not simply because a tool is popular.',items:['React and Next.js for interactive web experiences','Node.js, Python or Java for suitable backend services','MongoDB or PostgreSQL for application data','Flutter or React Native for cross-platform mobile apps','Git, Docker and AWS where appropriate for collaboration, packaging and cloud delivery']},
 'On-Time Delivery':{intro:'A transparent delivery plan helps clients understand what is being built, what comes next and where decisions are needed.',items:['Define scope and priorities early','Split work into milestones and reviewable tasks','Identify dependencies and risks as early as possible','Share progress and raise blockers promptly','Test key workflows before release and plan handover']},
 'Our Mission':{intro:'Our mission is to deliver innovative and reliable software solutions that create real value for our clients.',items:['Understand the real problem behind each request','Build practical, usable and maintainable solutions','Prioritise quality, reliability and clear communication','Measure success by usefulness to the client and their users']},
 'Our Vision':{intro:'Our vision is to become a trusted technology partner for businesses worldwide.',items:['Build long-term relationships through dependable work','Keep learning as technology and business needs evolve','Create digital solutions that can grow with organisations','Earn trust through transparency, quality and accountability']},
 'Our Values':{intro:'Our values guide how we work with clients, teammates and technology.',items:['Quality — care about usability, reliability and maintainability','Integrity — communicate honestly about scope, progress and limitations','Collaboration — work with clients and teammates, not in isolation','Continuous Learning — improve skills, practices and solutions over time']},
 'TaskFlow (Web App)':{intro:'TaskFlow is a productivity web-app demo that illustrates how a team can organise work in one place. It is a demonstration concept, not a claim of a deployed client project.',items:['Create and organise tasks by status or priority','Represent task ownership and team responsibilities','Track deadlines and work progress at a glance','Show how a responsive dashboard can support daily workflows','Demo technology labels: React, Node.js and MongoDB']},
 'FitTrack (Mobile App)':{intro:'FitTrack is a mobile-app demo concept for tracking fitness routines and progress. It illustrates a clear mobile experience for personal activity information.',items:['Present workout plans and activity summaries','Visualise progress with simple charts and indicators','Design for quick use on mobile screens','Demonstrate a possible React Native and Firebase stack','The demo is illustrative; do not treat it as a medical or fitness prescription']},
 'ShopEase (E-commerce Demo)':{intro:'ShopEase is an e-commerce demo concept showing a straightforward product-browsing and shopping flow for an online store.',items:['Browse product listings and product information','Illustrate cart interactions and checkout flow','Organise the storefront for desktop and mobile screens','Demonstrate a possible Next.js, Stripe and PostgreSQL stack','Payment processing would require real provider configuration and security review']},
 'Who We Are':{intro:'Infiniti Code Technologies Private Limited is a Bengaluru-based IT company focused on web and mobile application development and related technology services. We aim to turn business requirements into practical digital solutions.',items:['Web application and mobile application development','Custom software and API integration','Digital transformation and IT infrastructure support','A focus on clear communication, quality and continuous learning','We are building our portfolio through demonstrations and project work']},
 'Technologies We Work With':{intro:'These are the technologies currently highlighted on the website. The right stack depends on the project requirements, integrations, team needs and deployment environment.',items:['React — reusable components for interactive user interfaces','Next.js — React framework for web applications and rendering options','Node.js — JavaScript runtime for server-side applications and APIs','Python — general-purpose language often used for backend services and automation','Java — language and ecosystem for backend and enterprise applications','MongoDB — document-oriented database','PostgreSQL — relational database','Flutter — cross-platform app development toolkit','React Native — mobile apps using React concepts','AWS — cloud infrastructure and managed services','Git — source control and team collaboration','Docker — packaging applications and their runtime dependencies']}
 };
 var tech={
 'React':['React is a JavaScript library for building interactive user interfaces from reusable components.','Useful for dashboards, portals, forms and single-page web interfaces.','Common project work: component design, state handling, routing, API integration and responsive UI.'],
 'Next.js':['Next.js is a framework built on React for building production web applications.','It offers routing and multiple rendering approaches depending on the application.','Useful for content-rich websites, product pages, portals and full-stack web experiences.'],
 'Node.js':['Node.js runs JavaScript outside the browser and is often used to build backend services.','It can power APIs, authentication flows, business logic and integrations.','It commonly works with databases such as MongoDB or PostgreSQL.'],
 'Python':['Python is a general-purpose programming language used for backend development, automation and data-related tasks.','It can support APIs, internal tools, scripts and workflow automation.','The best fit depends on the application architecture and hosting environment.'],
 'Java':['Java is a widely used programming language for backend and enterprise applications.','It can support business services, integrations and systems that need structured application architecture.','Project choices depend on existing systems, scale and team requirements.'],
 'MongoDB':['MongoDB is a document-oriented database that stores records in flexible document structures.','It can fit applications whose data model benefits from document-based storage.','Data design, access controls, backups and indexes should be planned for each project.'],
 'Flutter':['Flutter is a toolkit for building apps for multiple platforms from a shared codebase.','It can help deliver consistent mobile interfaces across supported devices.','Device features, performance, testing and release requirements are considered during planning.'],
 'React Native':['React Native helps developers build native mobile applications using React concepts and JavaScript.','It can be a fit when a shared Android/iOS codebase is desirable.','Native integrations and device-specific behaviour are evaluated during project planning.'],
 'AWS':['AWS provides cloud infrastructure and managed services for hosting and operating applications.','Possible uses include application hosting, storage, databases, monitoring and access management.','Services and costs must be selected carefully for the client’s security and budget needs.'],
 'Git':['Git is a version-control system that tracks code changes and supports collaboration.','It helps teams review changes, work in branches and maintain project history.','A clear repository workflow can improve code review and release management.'],
 'Docker':['Docker packages an application and its dependencies into containers.','It can make development and deployment environments more consistent.','Container setup should be designed around the application, security and hosting platform.'],
 'PostgreSQL':['PostgreSQL is a relational database for structured data and SQL queries.','It can support transactional applications, reporting and connected business records.','Schema design, backups, permissions and query performance are important parts of implementation.'],
 'Firebase':['Firebase provides app-development services that can include authentication, data storage, hosting and notifications.','It may be useful for prototypes and mobile applications when its services fit the requirements.','Configuration, security rules and usage limits need to be reviewed for each app.'],
 'Stripe':['Stripe is a payment platform that can be integrated into eligible e-commerce and billing flows.','A real integration requires account configuration, server-side verification and secure handling of payment events.','Availability, supported countries, currencies and compliance requirements must be confirmed before launch.']
 };
 function show(name,d,el){lastFocus=el;title.textContent=name;intro.textContent=d.intro;list.innerHTML='';d.items.forEach(function(x){var li=document.createElement('li');li.textContent=x;list.appendChild(li)});modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';close.focus()}
 function bind(el,name,fn){el.setAttribute('tabindex','0');el.setAttribute('role','button');el.setAttribute('aria-haspopup','dialog');el.addEventListener('click',function(e){if(e.target.closest('a,button'))return;fn(el)});el.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fn(el)}})}
 document.querySelectorAll('.why .card').forEach(function(el){var h=el.querySelector('h3');if(h&&extra[h.textContent.trim()])bind(el,h.textContent.trim(),function(node){show(h.textContent.trim(),extra[h.textContent.trim()],node)})});
 document.querySelectorAll('.mv.mv3>div').forEach(function(el){var b=el.querySelector('b');if(b&&extra[b.textContent.trim()])bind(el,b.textContent.trim(),function(node){show(b.textContent.trim(),extra[b.textContent.trim()],node)})});
 document.querySelectorAll('.pr').forEach(function(el){var h=el.querySelector('h3');if(h&&extra[h.textContent.trim()])bind(el,h.textContent.trim(),function(node){show(h.textContent.trim(),extra[h.textContent.trim()],node)})});
 document.querySelectorAll('.tg>div').forEach(function(el){var span=el.querySelector('span:last-child');if(!span)return;var name=span.textContent.trim(),d=tech[name];if(d)bind(el,name,function(node){show(name,{intro:d[0],items:d.slice(1)},node)})});
 document.querySelectorAll('.gd-split .head').forEach(function(el){var h=el.querySelector('h2');if(h&&h.textContent.trim()==='Technologies We Work With'){bind(el,'Technologies We Work With',function(node){show('Technologies We Work With',extra['Technologies We Work With'],node)})}});
 function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';if(lastFocus&&lastFocus.focus)lastFocus.focus()}
 close.addEventListener('click',closeModal);modal.addEventListener('click',function(e){if(e.target===modal)closeModal()});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});modal.querySelector('#ict-service-modal-cta').addEventListener('click',closeModal);
})();

(function(){
var d=document,fine=matchMedia('(hover:hover) and (pointer:fine)').matches,calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function toast(t){var e=d.getElementById('toast');e.textContent=t;e.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(function(){e.classList.remove('show')},2200)}

/* remove chapter artefacts completely */
['hud','sh'].forEach(function(i){var e=d.getElementById(i);if(e)e.remove()});
d.querySelectorAll('.bgt').forEach(function(e){e.remove()});
new MutationObserver(function(m){d.querySelectorAll('.bgt').forEach(function(e){e.remove()})}).observe(d.body,{childList:true,subtree:true});

/* 3D tilt on cards */
if(fine&&!calm){d.querySelectorAll('.card,.pr,.tg>div,.mv>div').forEach(function(el){
 if(el.closest('#ict-service-modal'))return;el.classList.add('tilt');
 el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform='perspective(800px) rotateY('+(x*7)+'deg) rotateX('+(-y*7)+'deg) translateY(-3px)'});
 el.addEventListener('pointerleave',function(){el.style.transform=''});});}

/* ripple on buttons */
d.addEventListener('click',function(e){var b=e.target.closest('.btn');if(!b)return;var r=b.getBoundingClientRect(),z=Math.max(r.width,r.height)*2,s=d.createElement('span');s.className='rip';s.style.cssText='width:'+z+'px;height:'+z+'px;left:'+(e.clientX-r.left-z/2)+'px;top:'+(e.clientY-r.top-z/2)+'px';b.appendChild(s);setTimeout(function(){s.remove()},650)});

/* magnetic primary buttons */
if(fine&&!calm){d.querySelectorAll('.acts .btn,.cb .btn').forEach(function(b){
 b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.28)+'px)'});
 b.addEventListener('pointerleave',function(){b.style.transform=''})})}

/* typed rotating word in hero (keeps original headline text for SEO / no-JS) */
var sp=d.querySelector('.hero h1 span');
if(sp&&!calm){var base=sp.textContent.trim();var words=[base,'Websites that convert','Mobile apps people love','Software built to scale'];var wi=0,ci=base.length,del=false;
 sp.classList.add('tw2');
 (function tick(){var w=words[wi];ci+=del?-1:1;sp.textContent=w.slice(0,ci)||'\u200b';var t=del?28:55;
  if(!del&&ci>=w.length){del=true;t=wi===0?3200:1800}else if(del&&ci<=0){del=false;wi=(wi+1)%words.length;t=350}
  setTimeout(tick,t)})();}

/* process steps: click / hover to explore, auto-play when visible */
var steps=[].slice.call(d.querySelectorAll('.st'));
if(steps.length){var box=d.querySelector('.steps'),pnl=d.createElement('div');pnl.className='stp';pnl.innerHTML='<b></b><p></p><div class="pb2"><i></i></div>';box.after(pnl);
 var cur=0,timer,seen=false;
 function go(i,manual){cur=i;steps.forEach(function(s,k){s.classList.toggle('act',k===i)});
  pnl.querySelector('b').textContent='0'+(i+1);pnl.querySelector('p').textContent=steps[i].querySelector('p').textContent;
  pnl.querySelector('i').style.width=((i+1)/steps.length*100)+'%';if(manual){clearInterval(timer)}}
 steps.forEach(function(s,i){s.setAttribute('tabindex','0');s.setAttribute('role','button');
  s.addEventListener('click',function(){go(i,true)});s.addEventListener('mouseenter',function(){go(i,true)});
  s.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go(i,true)}})});
 go(0);
 if('IntersectionObserver' in window&&!calm){new IntersectionObserver(function(es){if(es[0].isIntersecting&&!seen){seen=true;timer=setInterval(function(){go((cur+1)%steps.length)},2600)}}).observe(box)}}

/* FAQ: one open at a time + search */
var fq=d.querySelector('.faq');
if(fq){var ds=[].slice.call(fq.querySelectorAll('details'));
 ds.forEach(function(x){x.addEventListener('toggle',function(){if(x.open)ds.forEach(function(o){if(o!==x)o.open=false})})});
 var q=d.createElement('input');q.className='sq';q.type='search';q.placeholder='Search questions…';q.setAttribute('aria-label','Search frequently asked questions');
 var nr=d.createElement('p');nr.className='nores';nr.textContent='No matching questions. Send us a message in the contact form and we will help.';
 fq.before(q);fq.after(nr);
 q.addEventListener('input',function(){var v=q.value.toLowerCase().trim(),n=0;ds.forEach(function(x){var m=!v||x.textContent.toLowerCase().indexOf(v)>-1;x.classList.toggle('hide',!m);if(m)n++;if(v&&m)x.open=true});nr.style.display=n?'none':'block'})}

/* Portfolio filter-free quick view hint + tech filter */
var tg=d.querySelector('.tg');
/* contact: copy buttons */
d.querySelectorAll('.info b').forEach(function(b){var v=b.textContent.trim(),btn=d.createElement('button');btn.type='button';btn.className='cpy';btn.textContent='Copy';
 btn.addEventListener('click',function(){var done=function(){toast('Copied: '+v)};if(navigator.clipboard)navigator.clipboard.writeText(v).then(done,done);else done()});b.after(btn)});
/* form: live character count + button state */
var f=d.getElementById('f');
if(f){var ta=f.querySelector('textarea'),cc=d.createElement('div');cc.className='cc f';cc.textContent='0 / 500';ta.maxLength=500;ta.after(cc);ta.addEventListener('input',function(){cc.textContent=ta.value.length+' / 500'})}

/* click on header brand scrolls top smoothly; keyboard shortcut hints */
d.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var id=a.getAttribute('href');if(id.length<2)return;var t=d.querySelector(id);if(!t)return;e.preventDefault();t.scrollIntoView({behavior:calm?'auto':'smooth',block:'start'});history.replaceState(null,'',id)})});
})();

(function(){
var D=document,H=D.documentElement,ld=D.getElementById('ld');
if(!ld)return;
window.__introHold=true;
var url='assets/intro.mp4';
var st=D.createElement('div');st.className='iv-stage';
st.innerHTML='<div class="iv-card" id="ivCard"><video id="ivVid" playsinline webkit-playsinline preload="auto" aria-label="Welcome video from Infiniti Code Technologies"></video><div class="iv-pr" id="ivPr"></div><button class="iv-play" id="ivPlay" type="button" aria-label="Play welcome video with sound"><span>&#9654;</span>Tap to play with sound</button></div>';
ld.appendChild(st);
var sk=D.createElement('button');sk.className='iv-skip';sk.type='button';sk.textContent='Skip \u2192';ld.appendChild(sk);
var edge=D.createElement('div');edge.className='rise-edge';D.body.appendChild(edge);
var card=D.getElementById('ivCard'),v=D.getElementById('ivVid'),pr=D.getElementById('ivPr'),pl=D.getElementById('ivPlay');
v.src=url;v.volume=1;v.muted=false;try{v.load()}catch(e){}
var released=false,started=false;
var muted=false,chip=D.createElement('button');chip.className='iv-snd';chip.type='button';chip.innerHTML='&#128263; Tap for sound';card.appendChild(chip);
function unmute(){if(!muted)return;v.muted=false;v.volume=1;muted=false;chip.style.display='none'}
var beginning=false,wd=0;
v.addEventListener('playing',function(){started=true;beginning=false;clearTimeout(wd);card.classList.remove('need');if(muted)chip.style.display='block'});
function muteAndPlay(){if(released)return;v.muted=true;muted=true;var q;try{q=v.play()}catch(e){}if(q&&q.catch)q.catch(function(){});
 clearTimeout(wd);wd=setTimeout(function(){if(!started&&!released){beginning=false;card.classList.add('need')}},3500)}
function begin(){if(started||released||beginning)return;beginning=true;v.muted=false;muted=false;chip.style.display='none';
 var p;try{p=v.play()}catch(e){}
 var t=setTimeout(function(){if(!started)muteAndPlay()},1800);
 if(p&&p.catch)p.catch(function(){clearTimeout(t);muteAndPlay()})}
v.addEventListener('timeupdate',function(){if(v.duration)pr.style.width=(v.currentTime/v.duration*100)+'%'});
v.addEventListener('ended',function(){pr.style.width='100%';sk.textContent='Enter site \u2192';setTimeout(release,500)});
v.addEventListener('error',function(){if(!released)release()});
function release(){if(released)return;released=true;try{v.pause()}catch(e){}window.__introHold=false;
 card.classList.add('leave');sk.style.display='none';
 H.classList.add('rising');H.classList.add('go');ld.classList.add('off');
 setTimeout(function(){H.classList.remove('rising');edge.remove();ld.classList.add('gone');ld.style.setProperty('display','none','important');try{URL.revokeObjectURL(url)}catch(e){}window.scrollTo(0,0)},5000)}
/* sequence: logo first, then the video rises from the bottom and plays */
card.classList.add('up');ld.classList.add('vid-on');
begin();
pl.addEventListener('click',function(e){e.stopPropagation();begin()});
/* taps are handled by unlock(): first tap unmutes; the video never pauses on tap */
sk.addEventListener('click',function(e){e.stopPropagation();release()});
/* browsers need a tap before sound: first tap or key anywhere starts it */
function unlock(e){if(released)return;if(e.target===sk)return;if(!started)begin();else unmute()}
['pointerdown','pointerup','touchstart','touchend','mousedown','mouseup','click'].forEach(function(n){D.addEventListener(n,unlock,{passive:true,capture:true})});
D.addEventListener('keydown',function(e){if(e.key==='Escape')release();else unlock(e)});
setTimeout(function(){if(!started&&!released)release()},30000);
})();
