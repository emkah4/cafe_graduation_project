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

let name = document.getElementById("name");
let surname = document.getElementById("surname");
let phoneNumber = document.getElementById("phone-number");
let subscriptionMonthly = document.getElementById("monthly");
let subscriptionYearly = document.getElementById("yearly");

let nameValidation = document.getElementById("name-validation");
let surnameValidation = document.getElementById("surname-validation");
let phoneNumberValidation = document.getElementById("phone-number-validation");
let subscriptionValidation = document.getElementById("subscription-validation");

function nameCheck() {
    var text = name.value;
    if (text === ""){
        nameValidation.classList.add("non-valid");
    } 
    else {
        nameValidation.classList.remove("non-valid");
    }
}

function surnameCheck() {
    var text = surname.value;
    if (text === ""){
        surnameValidation.classList.add("non-valid");
    } 
    else {
        surnameValidation.classList.remove("non-valid");
    }
}

function phoneNumberCheck() {
    var text = phoneNumber.value;
    if (text === ""){
        phoneNumberValidation.classList.add("non-valid");
    } 
    else {
        phoneNumberValidation.classList.remove("non-valid");
    }
}

function subscriptionCheck() {
    if (subscriptionMonthly.checked || subscriptionYearly.checked) {
    } else {
        subscriptionValidation.classList.add("non-checked");
    }

    if (subscriptionMonthly.checked || subscriptionYearly.checked) {
        subscriptionValidation.classList.remove("non-checked")
    }
}

document.querySelector(".get-started").addEventListener('click', function(){
        nameCheck();
        surnameCheck();
        phoneNumberCheck();
        subscriptionCheck();
});