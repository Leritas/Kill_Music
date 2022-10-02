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

function fullOrderMenu(div){
    div.parentNode.querySelector('.full').classList.toggle('active')
}

function switchScreen(div){
    let resultText = div.textContent
    document.querySelector('.body').querySelector('.active')?.classList.remove('active')
    document.querySelector('.navigation-menu').classList.remove('active')
    document.querySelector('.blur').classList.remove('active')


    if (resultText === 'Панель управления') {
        document.querySelector('.main').classList.add('active')
    }
    
    if (resultText === 'Заказы') {
        document.querySelector('.orders').classList.add('active')
    }
}