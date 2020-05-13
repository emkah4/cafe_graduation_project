let optionBlocks = document.querySelectorAll('.option-block');
let slideBlocks = document.querySelectorAll('.slide-block');

for (i = 0; i < optionBlocks.length; i++){
    optionBlocks[i].addEventListener('click', function(){
        for(j = 0; j < optionBlocks.length; j++){
            optionBlocks[j].classList.remove('show');
        }

        this.classList.add('show');

        let showIndex = this.dataset.index;

        for(y = 0; y < slideBlocks.length; y++){
            slideBlocks[y].classList.remove('show')
        }

        document.querySelector('.slide-block[data-index="' + showIndex + '"]').classList.add('show');

    });
}

var mySwiper = new Swiper ('.swiper-container', {

    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 100,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        
        780: {
            slidesPerView: 2,
            spaceBetween: 50
        },
        
        1200: {
            slidesPerView: 3,
            spaceBetween: 100
        }
    },


    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
