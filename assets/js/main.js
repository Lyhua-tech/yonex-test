// Sport card object
const arrObj = [
    {
        img: "https://www.yonex.com/media/catalog/category/NANOFLARE_800.png",
        title: "BADMINTON"
    },
    {
        img: "https://www.yonex.com/media/catalog/category/ezone-100.png",
        title: "TENNIS"
    },
    {
        img: "https://www.yonex.com/media/catalog/category/EZONE_GT_d_ts_Head.png",
        title: "GOLF"
    },
    {
        img: "https://www.yonex.com/media/catalog/category/Carbon-Cruise-Aerus.png",
        title: "RUNNING"
        
    },
    
]
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
// Sports card component
class CardComponent extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="flex justify-between gap-3 max-w-[1600px] items-center flex-1">
                ${arrObj.map((card) => {
                    return `
                        <div class="flex flex-col items-center justify-center">
                            <img src="${card.img}" alt="" class="bg-[#f7f8f9]" >
                            <p class="font-semibold text-[18px] ">${card.title}</p>
                        </div>
                    `
                }).join("")}
            </div>
            `
    } 
}
customElements.define("card-component", CardComponent);

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

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1 -1].style.display = "block";  
  dots[slideIndex1 -1].className += " active";
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

function hoverShow(){
    let whiteblock = document.getElementById('white-block')
    let footersec = document.getElementById('footer-sec')
    whiteblock.classList.add('hidden')
    footersec.classList.add('top-[160px]')
}
function hoveride(){
    let whiteblock = document.getElementById('white-block')
    let footersec = document.getElementById('footer-sec')
    whiteblock.classList.remove('hidden')
    footersec.classList.remove('top-[160px]')
}