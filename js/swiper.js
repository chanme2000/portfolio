const swiper = new Swiper('div.wrap', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: {
    el: 'div.swiper-pagination',
    type: 'fraction'
    },

    // Navigation arrows
    navigation: {
    nextEl: 'div.swiper-button-next',
    prevEl: 'div.swiper-button-prev',
    },
    spaceBetween: 50,
    slidesPerView: 'auto',
    grabCursor: true,
    centeredSlides: true,
    speed: 1000,

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },

    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
});

const btoStart = document.querySelector('ul li.btoStart');
console.log(btoStart);
const btoStop = document.querySelector('ul li.btoStop');
console.log(btoStop);
const videoStop = document.querySelectorAll('video');
console.log(videoStop);

btoStart.addEventListener('click',function(){
    swiper.autoplay.start();

    for (let el of videoStop) {
        el.pause();
    }

    // videoStop.forEach(index => {
    //     index.pause();
    // });

    // for ( let i=0; i<=videoStop.length; i++) {
    //     videoStop[i].pause();
    // }

})
btoStop.addEventListener('click',function(){
    swiper.autoplay.stop();
})

// btoStart.addEventListener('click',function(){
//     let swiperAuto = swiper.autoplay.start();
//     if (swiperAuto == true) {
//         swiper.autoplay.start();
//         for (let el of videoStop) {
//             el.pause();
//         }
//     } else {
//         swiper.autoplay.stop();
//     }
// })

videoStop.forEach(index => {
    index.addEventListener('mouseenter',function(){
        index.setAttribute('controls','controls');
    })
    index.addEventListener('mouseleave',function(){
        index.removeAttribute('controls','controls');
    })
});
    

