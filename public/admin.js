window.addEventListener('resize', closeNavigation);

function openNavigation() {
    document.querySelector('.navigation-menu').classList.toggle('active')
    document.querySelector('.blur').classList.toggle('active')
}

function closeNavigation() {
    let pageWidth = window.innerWidth
    if (pageWidth > 640){
        document.querySelector('.navigation-menu').classList.remove('active')
        document.querySelector('.blur').classList.remove('active')
    }  
}