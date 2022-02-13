const body = document.body;

const scroll1 = (() => { window.onscroll = () => { if (window.pageYOffset > 130) body.classList.add('scroll'); else body.classList.remove('scroll') } })();

const menu = (() => {
    
    let menu = document.querySelector('header ul'),
        add = document.querySelector('header svg.add'),
        remove = document.querySelector('header svg.remove');
    
    add.onclick = () => { menu.classList.add('active') }
    remove.onclick = () => {menu.classList.remove('active')}
    for (const li of menu.querySelectorAll('li')) { li.onclick = () => { menu.classList.remove('active') } }
})(); 
  

    