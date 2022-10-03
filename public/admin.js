window.addEventListener('resize', closeNavigation);

function openNavigation() {
    document.querySelector('.navigation-menu').classList.add('active')
    document.querySelector('.blur-add').classList.add('active')
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

function closeMenu() {
    document.querySelector('.blur-add').classList.remove('active')
    document.querySelector('.navigation-menu.active')?.classList.remove('active')
    document.querySelector('.add-admin-menu.active')?.classList.remove('active')
}

function menuOpen(){
    document.querySelector('.blur-add').classList.add('active')
    document.querySelector('.add-admin-menu').classList.add('active')
}

function showInput(btn){
    if (btn.parentNode.querySelector('input').type === 'text'){
        btn.parentNode.querySelector('input').type = 'password'
    }
    else if (btn.parentNode.querySelector('input').type === 'password'){
        btn.parentNode.querySelector('input').type = 'text'
    }
    
}

function switchScreen(div){
    let resultText = div.textContent
    document.querySelector('.body').querySelector('.active')?.classList.remove('active')
    document.querySelector('.navigation-menu').classList.remove('active')
    document.querySelector('.blur-add').classList.remove('active')


    if (resultText === 'Панель управления') {
        document.querySelector('.main').classList.add('active')
    }
    
    if (resultText === 'Заказы') {
        document.querySelector('.orders').classList.add('active')
    }

    if (resultText === 'Аккаунты') {
        document.querySelector('.users').classList.add('active')
    }
}