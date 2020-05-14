let nav = document.getElementById("nav");
let burgerIcon = '<svg fill="white" height="35pt" viewBox="0 -53 384 384" width="35pt" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>'
let closeIcon = '<svg fill="white" height="35pt" viewBox="0 0 512 512" width="35pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0"/><path d="m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0"/><path d="m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0"/></svg>'

var activateWidth = window.matchMedia("(max-width: 610px)");
activateWidth.addListener(createBurger);

var removeWidth = window.matchMedia("(min-width: 610px)");
removeWidth.addListener(deleteBurger);

function createBurger(activateWidth) {
    if (activateWidth.matches) {
        let burger = document.createElement("div");
        burger.setAttribute("id", "burger");
        burger.classList.add("icon")
        burger.innerHTML = burgerIcon;
        nav.appendChild(burger);
        burger.addEventListener('click', function(){
            burger.innerHTML = "";
            let close = document.createElement("div");
            close.setAttribute("id", "close");
            close.classList.add("icon");
            close.innerHTML = closeIcon;
            nav.appendChild(close);
            let menu = document.createElement("div");
            menu.setAttribute("id", "menu");
            menu.classList.add("burger-menu");
            nav.appendChild(menu);
            close.addEventListener('click', deleteBurgerNow)
        });
    }
}

function deleteBurger(removeWidth) {
    if (removeWidth.matches) {
        document.getElementById("burger").remove();
        document.getElementById("close").remove();
        document.getElementById("menu").remove();
    }
}

function deleteBurgerNow() {
        document.getElementById("burger").remove();
        document.getElementById("close").remove();
        document.getElementById("menu").remove();
        createBurger(activateWidth);
}

