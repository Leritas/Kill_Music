window.addEventListener('resize', closeNavigation);

let scrollContener = document.querySelector('.categories')
scrollContener.addEventListener('wheel', (e) => {
    e.preventDefault()
    scrollContener.scrollLeft += e.deltaY
})

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
    document.querySelector('.blur-add.active')?.classList.remove('active')
    document.querySelector('.navigation-menu.active')?.classList.remove('active')
    document.querySelector('.add-admin-menu.active')?.classList.remove('active')
    document.querySelector('.edit-account.active')?.classList.remove('active')
    document.querySelector('.add-new-item.active')?.classList.remove('active')
}

function menuOpen(btn){
    document.querySelector('.blur-add').classList.add('active')
    const idPush = btn.id
    
    if (idPush === 'edit'){
        document.querySelector('.edit-account').classList.add('active')
    }
    else if (idPush === 'add'){
        document.querySelector('.add-admin-menu').classList.add('active')
    }
    
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
    document.querySelector('.body').querySelector('.selected')?.classList.remove('selected')
    document.querySelector('.navigation-menu').classList.remove('active')
    document.querySelector('.blur-add').classList.remove('active')
    
    if (resultText === 'Заказы') {
        document.querySelector('.orders').classList.add('selected')
    }

    if (resultText === 'Категории') {
        document.querySelector('.categories').classList.add('selected')
    }

    if (resultText === 'Товары') {
        document.querySelector('.items').classList.add('selected')
    }

    if (resultText === 'Аккаунты') {
        document.querySelector('.users').classList.add('selected')
    }
}

function unlockInput(span){
    console.log(span.parentNode.parentNode.querySelectorAll('.show'))
    span.parentNode.querySelector('input').removeAttribute('disabled')
    span.parentNode.querySelector('input').setAttribute('autofocus', '')
    span.querySelector('svg').classList.add('active')
    span.parentNode.querySelector('.show')?.classList.add('active')
}

function unlockCatalog(span){
    span.parentNode.querySelector('.pencil')?.classList.toggle('active')
    span.parentNode.querySelector('.done')?.classList.toggle('active')
    span.parentNode.querySelector('input').removeAttribute('disabled')
}

function lockCatalog(span){
    span.parentNode.querySelector('.pencil')?.classList.toggle('active')
    span.parentNode.querySelector('.done')?.classList.toggle('active')
    span.parentNode.querySelector('input').setAttribute('disabled', '')
}

function addCategory(span){
    span.parentNode.parentNode.querySelector('.show-add-menu')?.classList.toggle('active')
    span.parentNode.parentNode.querySelector('.add')?.classList.toggle('active')
}

function leaveItem(div){
    div.querySelector('.active')?.classList.remove('active')
    div.querySelector('.first').classList.toggle('active')
}

function itemScroll(span){
    span.parentNode.querySelector('.active')?.classList.remove('active')
    span.classList.toggle('active')
}

function addNewItem(){
    document.querySelector('.add-new-item')?.classList.add('active')
}