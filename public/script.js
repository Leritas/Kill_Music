let pageCount = 0
let pageMarginLeft = 0

window.addEventListener('resize', closeMenuPage);

function closeMenuPage() {
	let pageWidth = window.innerWidth
	if (pageWidth > 970) {
        pageCount = 0;
        pageMarginLeft = 0;
        document.querySelector('.menu-slider-wrap').style['margin-left'] = pageMarginLeft + 'px';
        document.querySelector('.block-screen').classList.remove('active')
        document.querySelector('.menu-slider').classList.remove('active')
    }
}

function activeBtnCatalog(div) {
    div.classList.toggle('btnActiveCatalogHeader')
    document.querySelector('.catalog').classList.toggle('active')
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
    pageCount = 0;
    pageMarginLeft = 0;
    document.querySelector('.menu-slider-wrap').style['margin-left'] = pageMarginLeft + 'px';
    document.querySelector('.block-screen').classList.toggle('active')
    document.querySelector('.menu-slider').classList.toggle('active')
}

function scrollPageRight(div){
    pageCount += 1;
    pageMarginLeft += -300;
    document.querySelector('.menu-slider-wrap').style['margin-left'] = pageMarginLeft + 'px';
    document.querySelector('.second-layer').querySelector('h3').textContent=div.querySelector('span').textContent
}

function scrollPageLeft(div) {
    pageCount -= 1;
    pageMarginLeft -= -300;
    document.querySelector('.menu-slider-wrap').style['margin-left'] = pageMarginLeft + 'px';
}

function showDropdownMenuFooter(div){
    div.closest('.drop-menu-footer').querySelector('.drop-down-menu-footer').classList.toggle('active')
    div.querySelector('.arrow-footer').classList.toggle('active')
}