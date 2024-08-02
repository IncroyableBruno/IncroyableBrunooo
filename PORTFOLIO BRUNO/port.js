// tourner la page quand on clique le bouton avancer ou retourner (next et prev)
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) =>{
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn'); 
            setTimeout(() =>{
                pageTurn.style.zIndex = 20 - index;
            }, 500) 
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() =>{
                pageTurn.style.zIndex = 20 + index;
            }, 500)     
        }
    }
})


//Quand on clique sur le bouton contactez moi
const pages = document.querySelectorAll('.book-page.page-right');
const conctactezMoiBtn = document.querySelector('.btn.contact-me');

conctactezMoiBtn.onclick = () => {
    pages.forEach((pages, index) =>{
        setTimeout(() => {
            pages.classList.add('turn');

            setTimeout(() => {
                pages.style.zIndex = 20 + index;       
            }, 500)

        }, (index + 1) * 200 + 100)
    })    
}

// créer une fonction d'index inversé 
let totalPages = pages.length;
let PageNumber = 0;

function reverseIndex() {
    PageNumber--;
    if (PageNumber < 0) {
        PageNumber = totalPages - 1;
    }
}

// Quand on clique sur bouton back profil
const backProfilBtn = document.querySelector('.back-profil');

backProfilBtn.onclick = () => {
    pages.forEach(( _, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[PageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[PageNumber].style.zIndex =10 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

//ouverture d'animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


//ouverture d'animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');    
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;    
}, 2800)
//ouverture d'animation (page left ou page de profil animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;    
}, 3200)

//ouverture d'animation (toutes animations pages right)
pages.forEach(( _, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[PageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[PageNumber].style.zIndex =10 + index;
        }, 500)

    }, (index + 1) * 200 + 2100)
})