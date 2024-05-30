burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')

burger.addEventListner('click',()=>{
    rightnav.classList.toggle('v-nav')
    navlist.classList.toggle('h-nav')
})