burger=document.querySelector('.burger')
rightnav=document.querySelector('.rightnav')
navbar=document.querySelector('.navbar')


burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})