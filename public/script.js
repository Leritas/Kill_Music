function activeBtnCatalog(div) {
    div.classList.toggle('btnActiveCatalogHeader')
}

function showSearchInp() {
    if (document.querySelector('.inp-show-onclick')) {
            setTimeout( () => {document.querySelector('.logo-btn-header-mobil').classList.toggle('active')  }, 50)
            document.querySelector('.search-mobile-header').classList.toggle('active')
            document.querySelector('.inp-hide-header').classList.toggle('inp-show-onclick')
    } else {
            document.querySelector('.logo-btn-header-mobil').classList.toggle('active')    
            setTimeout( () => {document.querySelector('.search-mobile-header').classList.toggle('active')}, 50)
            setTimeout( () => {document.querySelector('.inp-hide-header').classList.toggle('inp-show-onclick')}, 50)
    }
}

function menuSlider() {
    document.querySelector('.block-screen').classList.toggle('active')
    document.querySelector('.menu-slider').classList.toggle('active')
}