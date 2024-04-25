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
const hoverObj = [
    {
        img: "../assets/icons/image/racquets_240306.png",
        title: "RAQUEST"
        
    },
    {
        img: "../assets/icons/image/racquets_240306.png",
        title: "RAQUEST"
        
    },
    {
        img: "../assets/icons/image/racquets_240306.png",
        title: "RAQUEST"
        
    },
    {
        img: "../assets/icons/image/racquets_240306.png",
        title: "RAQUEST"
        
    },
]
class CardComponent extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="flex justify-between gap-3 max-w-[1600px] items-center w-[900px] flex-1">
                ${arrObj.map((card) => {
                    return `
                        <div class="flex flex-col items-center justify-center">
                            <img src="${card.img}" alt="">
                            <p class="font-semibold text-[18px] ">${card.title}</p>
                        </div>
                    `
                }).join("")}
            </div>
            `
    } 
}
customElements.define("card-component", CardComponent);

class HoverComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="flex justify-between gap-4 max-w-[1600px] items-center w-[900px] flex-1">
        ${hoverObj.map((card) => {
            return `
                <div class="flex flex-col items-center justify-center">
                    <img src="${card.img}" alt="">
                    <p class="font-semibold text-[18px] text-black">${card.title}</p>
                </div>
            `
        }).join("")}
    </div>
    `;
    }
}
customElements.define("hover-component", HoverComponent);

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