let name = document.getElementById("name");
let surname = document.getElementById("surname");
let phoneNumber = document.getElementById("phone-number");
let subscriptionMonthly = document.getElementById("monthly");
let subscriptionYearly = document.getElementById("yearly");

let nameValidation = document.getElementById("name-validation");
let surnameValidation = document.getElementById("surname-validation");
let phoneNumberValidation = document.getElementById("phone-number-validation");
let subscriptionValidation = document.getElementById("subscription-validation");

let name1 = document.getElementById("name1");
let surname1 = document.getElementById("surname1");
let phoneNumber1 = document.getElementById("phone-number1");
let typePersonal = document.getElementById("personal");
let typeCompany = document.getElementById("company");

let nameValidation1 = document.getElementById("name-validation1");
let surnameValidation1 = document.getElementById("surname-validation1");
let phoneNumberValidation1 = document.getElementById("phone-number-validation1");
let typeValidation = document.getElementById("type-validation");

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

function nameCheck1() {
    var text = name1.value;
    if (text === ""){
        nameValidation1.classList.add("non-valid");
    } 
    else {
        nameValidation1.classList.remove("non-valid");
    }
}

function surnameCheck1() {
    var text = surname1.value;
    if (text === ""){
        surnameValidation1.classList.add("non-valid");
    } 
    else {
        surnameValidation1.classList.remove("non-valid");
    }
}

function phoneNumberCheck1() {
    var text = phoneNumber1.value;
    if (text === ""){
        phoneNumberValidation1.classList.add("non-valid");
    } 
    else {
        phoneNumberValidation1.classList.remove("non-valid");
    }
}

function typeCheck() {
    if (typePersonal.checked || typeCompany.checked) {
    } else {
        typeValidation.classList.add("non-checked");
    }

    if (typePersonal.checked || typeCompany.checked) {
        typeValidation.classList.remove("non-checked");
    }
}

document.querySelector(".send").addEventListener('click', function(){
    nameCheck1();
    surnameCheck1();
    phoneNumberCheck1();
    typeCheck();
});