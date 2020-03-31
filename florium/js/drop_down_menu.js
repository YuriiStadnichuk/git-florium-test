const b3 = document.querySelector(".bar-3");
const b4 = document.querySelector(".bar-4");
const b5 = document.querySelector(".bar-5");
const b6 = document.querySelector(".bar-6");
const b7 = document.querySelector(".bar-7");
const b8 = document.querySelector(".bar-8");
const b9 = document.querySelector(".bar-9");
const b10 = document.querySelector(".bar-10");
const b11 = document.querySelector(".bar-11");
const b12 = document.querySelector(".bar-12");


const ulList3 = document.querySelector("#bar-categories-3");
const ulList4 = document.querySelector("#bar-categories-4");
const ulList5 = document.querySelector("#bar-categories-5");
const ulList6 = document.querySelector("#bar-categories-6");
const ulList7 = document.querySelector("#bar-categories-7");
const ulList8 = document.querySelector("#bar-categories-8");
const ulList9 = document.querySelector("#bar-categories-9");
const ulList10 = document.querySelector("#bar-categories-10");
const ulList11 = document.querySelector("#bar-categories-11");
const ulList12 = document.querySelector("#bar-categories-12");

function showBlock3() {
    ulList3.classList.toggle("hide");
};
function showBlock4() {
    ulList4.classList.toggle("hide");
};
function showBlock5() {
    ulList5.classList.toggle("hide");
};
function showBlock6() {
    ulList6.classList.toggle("hide");
};
function showBlock7() {
    ulList7.classList.toggle("hide");
};
function showBlock8() {
    ulList8.classList.toggle("hide");
};
function showBlock9() {
    ulList9.classList.toggle("hide");
};
function showBlock10() {
    ulList10.classList.toggle("hide");
};
function showBlock11() {
    ulList11.classList.toggle("hide");
};
function showBlock12() {
    ulList12.classList.toggle("hide");
};



b3.addEventListener("mouseenter", () => {
    showBlock3()
})
b4.addEventListener("mouseenter", () => {
    showBlock4()
})
b5.addEventListener("mouseenter", () => {
    showBlock5()
})
b6.addEventListener("mouseenter", () => {
    showBlock6()
})
b7.addEventListener("mouseenter", () => {
    showBlock7()
})
b8.addEventListener("mouseenter", () => {
    showBlock8()
})
b9.addEventListener("mouseenter", () => {
    showBlock9()
})
b10.addEventListener("mouseenter", () => {
    showBlock10()
})
b11.addEventListener("mouseenter", () => {
    showBlock11()
})
b12.addEventListener("mouseenter", () => {
    showBlock12()
})
