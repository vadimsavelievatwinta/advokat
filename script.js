const burger=document.querySelector('.burger'),menu=document.querySelector('.nav');burger.addEventListener('click',()=>{const open=menu.classList.toggle('open');burger.setAttribute('aria-expanded',open);burger.textContent=open?'×':'☰'});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');burger.textContent='☰';burger.setAttribute('aria-expanded','false')}));const modal=document.getElementById('contact-dialog');document.querySelector('.dialog-close').onclick=()=>modal.close();document.querySelector('.dialog-ok').onclick=()=>modal.close();modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});


// Выбор цветового дизайна сохраняется в браузере.
(function(){
  const allowed=['original','light','green'];
  const buttons=[...document.querySelectorAll('[data-theme-choice]')];
  function setTheme(theme){
    if(!allowed.includes(theme))theme='original';
    document.body.dataset.theme=theme;
    buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.themeChoice===theme)));
    try{localStorage.setItem('levadnaya-design-theme',theme)}catch(e){}
  }
  let initial='original';try{initial=localStorage.getItem('levadnaya-design-theme')||initial}catch(e){}
  setTheme(initial);
  buttons.forEach(button=>button.addEventListener('click',()=>setTheme(button.dataset.themeChoice)));
})();
