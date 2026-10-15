const $=s=>document.querySelector(s);
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
$('#menuBtn').onclick=e=>{const n=$('#links');const o=n.classList.toggle('open');e.target.setAttribute('aria-expanded',o)};
$('#links').onclick=()=>$('#links').classList.remove('open');

$('#labGrid').innerHTML=DATA.labs.map(l=>`<article class="card" style="--c:${l.color}"><h3>${l.icon} ${esc(l.name)}</h3><p>${esc(l.desc)}</p><p>${l.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</p><a class="btn" href="${l.url}" target="_blank" rel="noopener">${esc(l.btn)}</a></article>`).join('');

$('#roleGrid').innerHTML=DATA.roles.map(r=>`<article class="card" style="--c:${r.color}"><h3>${esc(r.name)}</h3><p>${esc(r.summary)}</p><details><summary>Worked example</summary><p>${esc(r.example)}</p></details></article>`).join('');
$('#compare').innerHTML=DATA.compare.map((r,i)=>`<tr>${r.map((c,j)=>i==0||j==0?`<th scope="${i==0?'col':'row'}">${esc(c)}</th>`:`<td>${esc(c)}</td>`).join('')}</tr>`).join('');

$('#quizForm').innerHTML=DATA.quiz.map((q,i)=>`<fieldset><legend>${esc(q.q)}</legend>${q.a.map((a,j)=>`<label><input type="radio" name="q${i}" value="${a[1]}"> ${esc(a[0])}</label>`).join('')}</fieldset>`).join('')+'<button class="btn" type="submit">See my result</button>';
$('#quizForm').onsubmit=e=>{e.preventDefault();const t={BA:0,DA:0,BOTH:0};let n=0;DATA.quiz.forEach((_,i)=>{const c=document.querySelector(`input[name=q${i}]:checked`);if(c){t[c.value]++;n++}});
 if(n<DATA.quiz.length){$('#quizResult').textContent='Please answer every question.';return}
 const m=t.BA>t.DA?'Business Analysis':t.DA>t.BA?'Data Analysis':'a hybrid role, such as BI or Product Analyst';
 $('#quizResult').textContent=`Your answers lean toward ${m}. This is a starting point only; try both areas before deciding.`;store.set('quiz',m)};

const done=store.get('done',{});
const total=DATA.roadmap.reduce((s,w)=>s+w.tasks.length,0);
function renderProgress(){const c=Object.values(done).filter(Boolean).length;$('#progress').textContent=c?`You have completed ${c} of ${total} practice tasks.`:'No tasks completed yet.';
 const r=$('#resume');const next=DATA.roadmap.findIndex((w,i)=>w.tasks.some((_,j)=>!done[`${i}-${j}`]));
 r.innerHTML=c&&next>=0?`<p><a class="btn ghost" href="#week${next}">Resume Learning: ${esc(DATA.roadmap[next].weeks)}</a></p>`:''}
$('#weeks').innerHTML=DATA.roadmap.map((w,i)=>{const lab=w.lab!==null?DATA.labs[w.lab]:null;return `<details id="week${i}"><summary>${esc(w.weeks)}: ${esc(w.title)}</summary><p class="small">Suggested time: ${esc(w.hours)}</p><p><strong>Topics:</strong> ${w.topics.map(esc).join(', ')}.</p><p><strong>Practice tasks:</strong></p>${w.tasks.map((t,j)=>`<label><input type="checkbox" data-k="${i}-${j}" ${done[`${i}-${j}`]?'checked':''}> ${esc(t)}</label>`).join('')}<p><strong>Outcome:</strong> ${esc(w.outcome)}</p>${lab?`<a href="${lab.url}" target="_blank" rel="noopener">Practise in ${esc(lab.name)}</a>`:''}</details>`}).join('');
$('#weeks').onchange=e=>{if(e.target.dataset.k){done[e.target.dataset.k]=e.target.checked;store.set('done',done);renderProgress()}};
renderProgress();

$('#salaryGrid').innerHTML=DATA.salary.map(s=>{const ok=s.range&&s.source&&s.url&&s.verified;return `<article class="card"><h3>${esc(s.role)}</h3><p>${esc(s.level)}</p>${ok?`<p><strong>${esc(s.range)}</strong> ${esc(s.currency)}</p><p class="small">Source: <a href="${s.url}" target="_blank" rel="noopener">${esc(s.source)}</a>, verified ${esc(s.verified)}. ${esc(s.notes)}</p>`:'<p class="small">No verified figure added yet. Add a sourced range in data.js.</p>'}</article>`}).join('');

function renderRes(q=''){const l=DATA.resources.filter(r=>(r.name+r.desc).toLowerCase().includes(q.toLowerCase()));$('#resGrid').innerHTML=l.length?l.map(r=>`<article class="card"><h3>${esc(r.name)}</h3><p>${esc(r.desc)}</p><a href="${r.url}" target="_blank" rel="noopener">Open resource (external)</a></article>`).join(''):'<p>No resources match your search.</p>'}
renderRes();$('#search').oninput=e=>renderRes(e.target.value);
