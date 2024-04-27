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
class CardComponent extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="flex justify-between gap-3 max-w-[1600px] items-center flex-1">
                ${arrObj.map((card) => {
                    return `
                        <div class="flex flex-col items-center justify-center">
                            <img src="${card.img}" alt="" class="" >
                            <p class="font-semibold text-[18px] ">${card.title}</p>
                        </div>
                    `
                }).join("")}
            </div>
            `
    } 
}
customElements.define("card-component", CardComponent);

class BadmintonComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="grid grid-cols-4 grid-rows-2 gap-4 max-w-[1600px] items-center w-[900px] flex-1">
                ${badmintonObj.map((card) => {
                    return `
                        <div class="flex flex-col items-center justify-center bg-[#f7f8f9]">
                            <img src="${card.img}" alt="">
                            <p class="font-semibold text-[18px] text-black">${card.title}</p>
                        </div>
                    `
                    }).join("")}
            </div>
            `;
    }
}
customElements.define("badminton-component", BadmintonComponent);

class GolfComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="grid grid-cols-4 grid-rows-2 gap-4 max-w-[1600px] items-center w-[900px] flex-1">
        ${golfObj.map((card) => {
            return `
                <div class="flex flex-col items-center justify-center bg-[#f7f8f9]">
                    <img src="${card.img}" alt="">
                    <p class="font-semibold text-[18px] text-black">${card.title}</p>
                </div>
            `
        }).join("")}
    </div>
    `;
    }
}
customElements.define("golf-component", GolfComponent);

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

function hoverDrop(){
    document.querySelector('#baminton').classList.remove('top-[-100%]')
    document.querySelector('#baminton').classList.add('top-[10%]')
    // document.querySelector('#baminton').classList.remove('hidden')
}
function hoverHide(){
    document.querySelector('#baminton').classList.remove('top-[10%]')
    document.querySelector('#baminton').classList.add('top-[-100%]')
    // document.querySelector('#baminton').classList.remove('hidden')
}
// const hoverDrop = document.getElementById('hoverLink')
// hoverDrop.addEventListener('mouseenter', function(){
//     document.getElementById('baminton').classList.remove('hid')
// })