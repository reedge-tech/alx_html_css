document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("navbar");

    hamburger.addEventListener("click", function () {
        nav.classList.toggle("show");
    });
});
