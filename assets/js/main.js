// Badminton object
const badmintonObj = [
    {
        img: "../assets/icons/image/racquets_240306.png",
        title: "RAQUEST"
        
    },
    {
        img: "../assets/icons/image/strings_240306.webp",
        title: "STRINGS"
        
    },
    {
        img: "../assets/icons/image/shuttlecocks_img.webp",
        title: "SHUTTLECOCKS"
        
    },
    {
        img: "../assets/icons/image/10566_011_520x320.webp",
        title: "APPAREL"
        
    },
    {
        img: "../assets/icons/image/shoes_240306.webp",
        title: "SHOES"
        
    },
    {
        img: "../assets/icons/image/bag.webp",
        title: "BAGS"
        
    },
    {
        img: "../assets/icons/image/accessories_img2.webp",
        title: "ACCESSORIES"
        
    },
    {
        img: "../assets/icons/image/athletes_240306.webp",
        title: "ATHLETES"
        
    },
]
// golfobj
const golfObj = [
    {
        img: "../assets/icons/image/thm_club_ezone.webp",
        title: "RAQUEST"
        
    },
    {
        img: "../assets/icons/image/Mega-Menu-Golf-Shaft_1.webp",
        title: "SHAFTS"
        
    },
    {
        img: "../assets/icons/image/Mega-Golf-Bag.webp",
        title: "GEAR"
        
    },
    {
        img: "../assets/icons/image/golf-athletes.webp",
        title: "APPAREL"
        
    }
]
// tennisobj
const tennisObj = [
    {
        img: "../assets/icons/image/raquet-tennis.webp",
        title: "RAQUEST"
        
    },
    {
        img: "../assets/icons/image/strings-tennis.webp",
        title: "SHAFTS"
        
    },
    {
        img: "../assets/icons/image/tennis-ball.webp",
        title: "GEAR"
        
    },
    {
        img: "../assets/icons/image/apparel-tennis.webp",
        title: "APPAREL"
        
    },
    {
        img: "../assets/icons/image/shoes-tennis.webp",
        title: "SHOES"
        
    },
    {
        img: "../assets/icons/image/tennis_Bag_.webp",
        title: "BAGS"
        
    },
    {
        img: "../assets/icons/image/accessories-tennis.webp",
        title: "ACCESSORIES"
        
    },
    {
        img: "../assets/icons/image/tennis-athlete.webp",
        title: "ATHLETES"
        
    },
]
// runningobj
const runningObj = [
    {
        img: "../assets/icons/image/shoe-orange.webp",
        title: "MEN"
        
    },
    {
        img: "../assets/icons/image/shoe-white.webp",
        title: "WOMEN"
        
    },
    {
        img: "../assets/icons/image/shoe-brown.webp",
        title: "UNISEX"
        
    },
]
// snowboardobj
const snowboardObj = [
    {
        img: "../assets/icons/image/skate.webp",
        title: "BOARD"
        
    },
    {
        img: "../assets/icons/image/skate-shoe.webp",
        title: "BOOT & BINDING"
        
    },
    {
        img: "../assets/icons/image/skate-coat.webp",
        title: "GEAR"
        
    },
    {
        img: "../assets/icons/image/apparel-tennis.webp",
        title: "APPAREL"
        
    },
]


// Baminton component
class BadmintonComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="grid grid-cols-4 grid-rows-2 gap-4 max-w-[1600px] items-center w-[900px] flex-1">
                ${badmintonObj.map((card) => {
                    return `
                        <div class="flex flex-col items-center justify-center bg-[#f7f8f9]">
                            <a href=""><img src="${card.img}" alt=""></a>
                            <p class="font-semibold text-[18px] text-black">${card.title}</p>
                        </div>
                    `
                    }).join("")}
            </div>
            `;
    }
}
customElements.define("badminton-component", BadmintonComponent);

// Golf component
class GolfComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="grid grid-cols-4 grid-rows-2 gap-4 max-w-[1600px] items-center w-[900px] flex-1">
        ${golfObj.map((card) => {
            return `
                <div class="flex flex-col items-center justify-center bg-[#f7f8f9]">
                    <a href=""><img src="${card.img}" alt=""></a>
                    <p class="font-semibold text-[18px] text-black">${card.title}</p>
                </div>
            `
        }).join("")}
    </div>
    `;
    }
}
customElements.define("golf-component", GolfComponent);

// Tennis component
class TennisComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="grid grid-cols-4 grid-rows-2 gap-4 max-w-[1600px] items-center w-[900px] flex-1">
        ${tennisObj.map((card) => {
            return `
                <div class="flex flex-col items-center justify-center bg-[#f7f8f9]">
                    <a href=""><img src="${card.img}" alt=""></a>
                    <p class="font-semibold text-[18px] text-black">${card.title}</p>
                </div>
            `
        }).join("")}
    </div>
    `;
    }
}
customElements.define("tennis-component", TennisComponent);

// Running component
class RunningComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="flex justify-between gap-4 max-w-[1600px] items-center w-[700px] flex-1">
        ${runningObj.map((card) => {
            return `
                <div class="flex flex-col items-center justify-center bg-[#f7f8f9]">
                    <a href=""><img src="${card.img}" alt=""></a>
                    <p class="font-semibold text-[18px] text-black">${card.title}</p>
                </div>
            `
        }).join("")}
    </div>
    `;
    }
}
customElements.define("running-component", RunningComponent);

// Snowboard component
class SnowboardComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="flex justify-between gap-4 max-w-[1600px] items-center w-[900px] flex-1">
        ${snowboardObj.map((card) => {
            return `
                <div class="flex flex-col items-center justify-center bg-[#f7f8f9]">
                    <a href=""><img src="${card.img}" alt=""></a>
                    <p class="font-semibold text-[18px] text-black">${card.title}</p>
                </div>
            `
        }).join("")}
    </div>
    `;
    }
}
customElements.define("snowboard-component", SnowboardComponent);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function openNav() {
    document.getElementById("mySidenav").classList.remove('hidden');
}

function closeNav() {
    document.getElementById("mySidenav").classList.add('hidden');
}

// badminton
function hoverDrop(){
    document.querySelector('#baminton').classList.toggle('hidden')
}
function hoverHide(){
    document.querySelector('#baminton').classList.toggle('hidden')
}
// GOLF Hover
function golfDrop(){
    document.querySelector('#golf').classList.toggle('hidden')
}
function golfHide(){
    document.querySelector('#golf').classList.toggle('hidden')
}
// tennis Hover
function tennisDrop(){
    document.querySelector('#tennis').classList.toggle('hidden')
}
function tennisHide(){
    document.querySelector('#tennis').classList.toggle('hidden')
}
// running Hover
function runningDrop(){
    document.querySelector('#running').classList.toggle('hidden')
}
function runningHide(){
    document.querySelector('#running').classList.toggle('hidden')
}
// snowboard Hover
function snowboardDrop(){
    document.querySelector('#snowboard').classList.toggle('hidden')
}
function snowboardHide(){
    document.querySelector('#snowboard').classList.toggle('hidden')
}
// about Hover
function aboutDrop(){
    document.querySelector('#about').classList.toggle('hidden')
}
function aboutHide(){
    document.querySelector('#about').classList.toggle('hidden')
}

function showDropdown(x){
    if (x === 1){
        let dropdownside = document.getElementById('badminton-drop');
        dropdownside.classList.toggle('hidden')
    }
    if (x === 2){
        let dropdownside = document.getElementById('golf-drop');
        dropdownside.classList.toggle('hidden')
    }
    if (x === 3){
        let dropdownside = document.getElementById('tennis-drop');
        dropdownside.classList.toggle('hidden')
    }
    if (x === 4){
        let dropdownside = document.getElementById('running-drop');
        dropdownside.classList.toggle('hidden')
    }
    if (x === 5){
        let dropdownside = document.getElementById('snowboard-drop');
        dropdownside.classList.toggle('hidden')
    }
    if (x === 6){
        let dropdownside = document.getElementById('about-drop');
        dropdownside.classList.toggle('hidden')
    }
}
function hideDropDown(x){
    if (x === -1){
        let dropdownside = document.getElementById('badminton-drop');
        dropdownside.classList.toggle('hidden')
    }
    if (x === -2){
        let dropdownside = document.getElementById('golf-drop');
        dropdownside.classList.toggle('hidden')
    }
    if (x === -3){
        let dropdownside = document.getElementById('tennis-drop');
        dropdownside.classList.toggle('hidden')
    }
    if (x === -4){
        let dropdownside = document.getElementById('running-drop');
        dropdownside.classList.toggle('hidden')
    }
    if (x === -5){
        let dropdownside = document.getElementById('snowboard-drop');
        dropdownside.classList.toggle('hidden')
    }
    if (x === -6){
        let dropdownside = document.getElementById('about-drop');
        dropdownside.classList.toggle('hidden')
    }
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}    
    slides[slideIndex1-1].style.display = "block";  
    dots[slideIndex1-1].className += " active";
    setTimeout(showSlides1, 2000);
}

let slideIndexRecent = 0;
showSlidesRecent();

function showSlidesRecent() {
    let i;
    let slides = document.getElementsByClassName("recent-slide");
    let dots = document.getElementsByClassName("dot-recent");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndexRecent++;
    if (slideIndexRecent > slides.length) {slideIndexRecent = 1}    
    slides[slideIndexRecent-1].style.display = "flex";  
    dots[slideIndexRecent-1].className += " active";
    setTimeout(showSlidesRecent, 4000);
}

// Slide show for Sports
let currentSlide1 = 0;
function pushArrow(n) {
  const carousel = document.querySelector(" .slideShow ");
  const images = carousel.querySelectorAll(".slide-list");
  const imageWidth = images[0].clientWidth;
  currentSlide1 = Math.max(0, Math.min(currentSlide1 + n, images.length - 1));
  carousel.scrollTo({ left: currentSlide1 * imageWidth, behavior: "smooth" });
}

function clickSlide() {
  document.getElementsByClassName("list-Slide").classList.add("bg-blue-400");
}

let slideIndex2 = 1;
showSlides(slideIndex2);

class Fotter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-[#24292b] h-[870px] md:h-[370px] mt-[200px]">
            <div class="max-w-[1300px] mx-auto">
                <div class="md:justify-between md:items-center md:flex md:h-[50%]">
                    <div class="flex items-center justify-center">
                        <img src="https://www.yonex.com/static/version1712695184/frontend/Yonex/base/en_US/images/Yonex_Logo.svg" alt="" class="items-center flex justify-center size-[130px] Logo ml-3">
                    </div>
                    
                    <div
                class="flex justify-between items-center max-w-[400px] mx-auto md:mr-[30px] md:gap-6"
            >
                <img
                src="../assets/images/icons/facebook-icon.svg"
                alt="facebook-icon"
                class="size-[40px] ml-4"
                />
                <img
                src="../assets/images/icons/twitter_icon.svg"
                alt="twittter-icon"
                class="size-[40px]"
                />
                <img
                src="../assets/images/icons/youtube_icon.svg"
                alt="youtube-icon"
                class="size-[40px]"
                />
                <img
                src="../assets/images/icons/instagram_icon.svg"
                alt="instagram-icon"
                class="size-[40px] mr-4"
                />
            </div>
                </div>
                <hr class="my-4 border-gray-500 opacity-30">
                <div class="md:flex md:justify-between md:items-center">
                    <div>
                        <ul class="md:flex md:flex-row gap-4 text-[#f5f5f5] text-[15px] py-2 flex flex-col justify-center items-center font-[Oswald]">
                            <li class="tracking-[2px]">BADMINTON</li>
                            <li class="tracking-[2px]">GOLF</li>
                            <li class="tracking-[2px]">TENNIS</li>
                            <li class="tracking-[2px]">RUNNING</li>
                            <li class="tracking-[2px]">SNOWBOARDING</li>
                        </ul>
                    </div>
                    <hr class="md:hidden my-4 border-gray-500 opacity-30 ">
                    <div class="flex items-center justify-center">
                        <img src="https://www.yonex.com/static/version1712695184/frontend/Yonex/base/en_US/images/menu-icons/accessibility_icon.svg" alt="" class="size-[50px] cursor-pointer">
                    </div>
                </div>
                <hr class="my-4 border-gray-500 opacity-30">
                <div class="md:flex md:justify-between md:items-center">
                    <div class="md:flex md:flex-row gap-4 text-[#a8a8a8] text-[14px] py-2 flex flex-col justify-center items-center">
                        © 2012-2024 YONEX Co., Ltd.
                    </div>
                    <hr class="md:hidden my-4 border-gray-500 opacity-30">
                    <div class="md:flex md:flex-row gap-4 text-[#a8a8a8] text-[14px] py-2 flex flex-col justify-center items-center">
                        <a href="">Terms & Conditions</a>
                        <a href=""> Accessibility </a>
                        <a href="">Privacy Policy</a>
                        <a href="">Using Yonex Products Safely</a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('my-footer', Fotter)