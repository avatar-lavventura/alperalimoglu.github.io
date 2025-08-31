
function toggleMenu(force){
  const m = document.getElementById('mobileMenu');
  const isHidden = force !== undefined ? !force : m.hasAttribute('hidden');
  if(isHidden){ m.removeAttribute('hidden'); } else { m.setAttribute('hidden',''); }
}
function copyEmail(){
  navigator.clipboard.writeText('alper.alimoglu@gmail.com').then(()=>{
    alert('Email copied');
  });
}
(function themeInit(){
  const key='pref-theme';
  const saved = localStorage.getItem(key);
  if(saved){ document.documentElement.setAttribute('data-theme', saved); }
  document.getElementById('themeToggle').addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur==='light' ? null : 'light';
    if(next){ document.documentElement.setAttribute('data-theme', next); localStorage.setItem(key, next); }
    else{ document.documentElement.removeAttribute('data-theme'); localStorage.removeItem(key); }
  });
})();
