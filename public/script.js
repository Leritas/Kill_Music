let pageCount = 0
let pageMarginLeft = 0
let sliderCount = 0
let maxLenghtSlider = -1280 * document.querySelector('.scroll-img').querySelectorAll('img').length + 1280

window.addEventListener('resize', closeMenuPage);

function closeMenuPage() {
	let pageWidth = window.innerWidth
	if (pageWidth > 970) {
        pageCount = 0;
        pageMarginLeft = 0;
        document.querySelector('.menu-slider-wrap').style['margin-left'] = pageMarginLeft + 'px';
        document.querySelector('.block-screen').classList.remove('active')
        document.querySelector('.menu-slider').classList.remove('active')
        clearActiveChoosen()
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
    clearActiveChoosen()
    pageCount = 0;
    pageMarginLeft = 0;
    document.querySelector('.menu-slider-wrap').style['margin-left'] = pageMarginLeft + 'px';
    document.querySelector('.block-screen').classList.toggle('active')
    document.querySelector('.menu-slider').classList.toggle('active')
}

function scrollPageRight(div){
    clearActiveChoosen()
    pageCount += 1;
    pageMarginLeft += -300;
    document.querySelector('.menu-slider-wrap').style['margin-left'] = pageMarginLeft + 'px';
    showNextChoosen(div)
}

function scrollPageLeft(div) {
    clearActiveChoosen()
    pageCount -= 1;
    pageMarginLeft -= -300;
    document.querySelector('.menu-slider-wrap').style['margin-left'] = pageMarginLeft + 'px';
}

function showDropdownMenuFooter(div){
    div.closest('.drop-menu-footer').querySelector('.drop-down-menu-footer').classList.toggle('active')
    div.querySelector('.arrow-footer').classList.toggle('active')
}

function showNextChoosen(h) {
    let text = h.innerHTML;
   Array.from(h.closest('.page').nextElementSibling.querySelectorAll('h1'))
   .find(el => el.textContent === text).closest('.sub-catalog').classList.toggle('active')
   
}

function clearActiveChoosen() {
    document.querySelector('.sub-catalog.active')?.classList.toggle('active')
}

function scrollSliderBtn(div){
    if (div.className.match('back')){
        if (sliderCount != 0){
            sliderCount +=1280;
        } else {
            sliderCount = maxLenghtSlider; 
        }
        document.querySelector('.scroll-img').style['margin-left'] = sliderCount + 'px';
    } else if (div.className.match('next')){
        if (sliderCount != maxLenghtSlider){
            sliderCount -=1280;
        } else {
            sliderCount = 0; 
        }
        document.querySelector('.scroll-img').style['margin-left'] = sliderCount + 'px';
    }
    
}