
const darkmode1 = "#202020";
const darkmode2 = "#2b2b2b";
const lightmode1 = "#f5f5f5";
const lightmode2 = "#fff";
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const experience = document.querySelector(".experience");
const portfolio = document.querySelector(".portfolio");
const services = document.querySelector(".services");
const testimonial = document.querySelector(".testimonial");
const blog = document.querySelector(".blog");
const footer = document.querySelector(".footer");
const navbar_brand = document.querySelector(".navbar-brand>img");
const personhome = document.querySelector(".personhome");
const check = document.getElementById("darkmode-toggle");
const chanecolorsection1 = [home, experience, services, blog, footer];
const chanecolorsection2 = [about, portfolio, testimonial, contact];

function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
const list=["dark","light"];
function changeColor() {
    if (check.classList.contains("dark")) {
        chanecolorsection1.forEach(el => {
            el.style.backgroundColor = darkmode1;
        });
        chanecolorsection2.forEach(el => {
            el.style.backgroundColor = darkmode2;
        });
        navbar_brand.src = "images/logo.png";
        personhome.src = "images/personhome2.png";
        check.classList.remove("dark");
        document.body.classList.remove(...list);
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove(...list);

        check.classList.add("dark");
        document.body.classList.add("light");
        chanecolorsection1.forEach(el => {
            el.style.backgroundColor = lightmode1;
        });
        chanecolorsection2.forEach(el => {
            el.style.backgroundColor = lightmode2;
        });
        navbar_brand.src = "images/dark-logo.png";
        personhome.src = "images/personhome.png";
    }
}

check.addEventListener('click', changeColor);


