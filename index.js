const burger = document.querySelector("#burger");
const nav = document.querySelector("#nav");
const content = document.querySelector("#content");

burger.addEventListener("click", (e) => {
    nav.classList.toggle("hidden");
}, false);

function changeContentView(url) {
    content.src = url;
}