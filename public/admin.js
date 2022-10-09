let marginDefault = 0

window.addEventListener('resize', closeNavigation);

window.addEventListener('click', (e)=>{
    let pageWidthCatalog = window.innerWidth
    if (pageWidthCatalog < 700){
        if (e.target.type == 'text'){
            if(e.target.closest('.redact')){
                if(e.target.disabled){
                    if (marginDefault > -200){
                        marginDefault -= 100
                        scrollCategories(e.target.closest('.redact'))
                    }
                }
            }
        } else if(e.target.className == 'h1'){
            if (marginDefault < 0){
                marginDefault += 100
                scrollCategories(e.target.closest('.category'))
            }
        }
    } 
});

let addAdminForm = querySelector('.add-admin-menu')
let inputNewPwd = addAdminForm.querySelector('input[name="newpassword"]')
let inputPwdRepeat = addAdminForm.querySelector('input[name="password-repeat"]')
inputPwdRepeat.addEventListener('change', () => {
    if (inputPwdRepeat?.value == inputNewPwd?.value) {
        addAdminForm.querySelector('button').disabled = false
    } else {
        addAdminForm.querySelector('button').disabled = true
    }
})

function openNavigation() {
    document.querySelector('.navigation-menu').classList.add('active')
    document.querySelector('.blur-add').classList.add('active')
}

function closeNavigation() {
    let pageWidth = window.innerWidth
    if (pageWidth > 900){
        document.querySelector('.navigation-menu')?.classList.remove('active')
        document.querySelector('.blur-add')?.classList.remove('active')
    }  
    else if(pageWidth > 700) {
        document.querySelector('.categories').style['margin-left'] = 0
        marginDefault = 0
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

function selectedImgPreview(div){
    let srcImg = div.querySelector('img').src
    div.parentNode.querySelector('.active')?.classList.remove('active')
    div.classList.add('active')
    showSelectImgPreview(srcImg)
}

function showSelectImgPreview(srcImg){
    document.querySelector('.add-new-item').querySelector('.full-preview').querySelector('img').src = srcImg
}

function addImgItem(btn){
    console.log(btn.parentNode.querySelector('input'))
    btn.parentNode.querySelector('.add-img-item')?.click()
}

function inputSelected(inp){
    inp.parentNode.parentNode.querySelector('.select')?.classList.remove('select')
    inp.parentNode.querySelector('label').classList.add('select')
}

function scrollCategories(divRedact){
    divRedact.closest('.categories').style['margin-left'] = marginDefault + 'vw'
}