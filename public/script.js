function activeBtnCatalog(div) {
    div.classList.toggle('btnActiveCatalogHeader')
}

function showSearchInp() {
    if (document.querySelector('.logo-hide-btn-header-mobil')){
        document.querySelector('.search-mobile-header').style.width = ""
        document.querySelector('.logo-btn-header-mobil').style.width = "230px"
    } else {
        document.querySelector('.search-mobile-header').style.width = "100%"
        document.querySelector('.logo-btn-header-mobil').style.width = "0px"
    }
    
    document.querySelector('.logo-btn-header-mobil').classList.toggle('logo-hide-btn-header-mobil')
    document.querySelector('.inp-hide-header').classList.toggle('inp-show-onclick')
}