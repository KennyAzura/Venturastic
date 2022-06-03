const items = document.getElementsByClassName('nav_page_li')
const tabContents = document.querySelectorAll('.main')
const navPageItem = document.getElementsByClassName('nav_page_li-item')
const removeActiveItem = () => {
    let tabItems1 = document.getElementsByClassName('nav_page_li')
    let tabItems2 = document.getElementsByClassName('nav_page_li-a')
    let tabLiItems = document.getElementsByClassName('nav_page_li-item_div')
    let array1 = Array.from(tabItems1)
    let array2 = Array.from(tabItems2)
    let arrLiItem = Array.from(tabLiItems)
    array1.forEach((e) => {
        if(e.classList.contains('active') && e.classList.contains('effect-nav')) {
            e.classList.remove('active')
            e.classList.remove('effect-nav')
        }
    })
    array2.forEach((e) => {
        if(e.classList.contains('active') && e.classList.contains('effect-nav')) {
            e.classList.remove('active')
            e.classList.remove('effect-nav')
        }
    })
    arrLiItem.forEach((e) => {
        if(e.classList.contains('active') && e.classList.contains('effect-nav')) {
            e.classList.remove('active')
            e.classList.remove('effect-nav')
        }
    })
}
const removeActiveTabContent = () => {
    Array.from(tabContents).map((e) => {
        if(e.classList.contains('active-tab-content')) {
            e.classList.remove('active-tab-content')
        }
    })
}

const handleClick = (event) => {
    removeActiveItem()
    event.target.classList.add('active')
    event.target.classList.add('effect-nav')
    let dataId = event.target.dataset.id
    removeActiveTabContent()
    console.log(event.target)
    Array.from(tabContents).map((e) => {
        if(e.dataset.id == dataId) {
            e.classList.add('active-tab-content')
            console.log(dataId)
        }
    })
}
Array.from(items).forEach((item) => {
    item.addEventListener('click', handleClick)
})

// open menu
var menuOpen = document.getElementById('nav_menu-open');
var Block = document.querySelector('.nav_page');

menuOpen.onclick = function(){
    Block.classList.toggle('Block')
}

// button to top
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active')
    }
})