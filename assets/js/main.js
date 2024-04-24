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
class CardComponent extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div class="flex justify-between gap-3 max-w-[1600px] items-center w-[900px] flex-1">
                ${arrObj.map((card) => {
                    return `
                        <div class="flex flex-col items-center justify-center">
                            <img src="${card.img}" alt="">
                            <p class="font-semibold text-[18px]">${card.title}</p>
                        </div>
                    `
                }).join("")}
            </div>
            `
    } 
}

customElements.define("card-component", CardComponent);

document.addEventListener('DOMContentLoaded', function() {
    let hoverLink = document.getElementById("hoverLink");
    let hoverBox = document.getElementById("HoverBox");
    
    hoverLink.addEventListener('mouseover', function() {
        hoverBox.classList.remove('hidden');
    });
    
    hoverLink.addEventListener('mouseout', function() {
        hoverBox.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let hoverLink = document.getElementById("hoverLink2");
    let hoverBox = document.getElementById("HoverBox2");
    
    hoverLink.addEventListener('mouseover', function() {
        hoverBox.classList.remove('hidden');
    });
    
    hoverLink.addEventListener('mouseout', function() {
        hoverBox.classList.add('hidden');
    });
});
    

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