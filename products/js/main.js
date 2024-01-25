// ---------- mouse hover tab ----------------------
const pilListFigureImg = document.querySelectorAll(".product-images-list li figure img");
const pilList = document.querySelectorAll(".product-images-list li");
const ppcFigureImg = document.querySelector(".product-picture-container figure img");

// Set the initial image source
ppcFigureImg.src = pilListFigureImg[0].src;

pilListFigureImg.forEach((changeImg) => {
    changeImg.addEventListener("mouseover", () => {
        // Get the image source from the hovered element
        const imgSrc = changeImg.src;

        // Update the image source in the product container
        ppcFigureImg.src = imgSrc;

        pilListFigureImg.forEach((f) => {
            f.classList.remove("ppc-f-img");
        });

        changeImg.classList.add("ppc-f-img");
    });

    changeImg.addEventListener("mouseout", () => {
        // You can add behavior for mouseout here if needed
    });

});

// if (window.innerWidth <= 800) {
// console.log("prince");
//     document.getElementsByClassName("product-images-ss").style.display = "none";
// }

// if (window.innerWidth <= 800) {
//     console.log("prince");
//     const elements = document.getElementsByClassName("product-images-ss");
//     for (let i = 0; i < elements.length; i++) {
//         elements[i].style.display = "none";
//     }
// }

// function hideProductImagesOnSmallScreen() {
//     const productImagesSs = document.querySelector(".product-images-ss");
//     const productImagesList = document.querySelector(".product-images-list");
//     const productImagesListLi = document.querySelectorAll(".product-images-list li");
//     const isSmallScreen = window.innerWidth <= 568;

//     if (isSmallScreen) {
//         productImagesSs.classList.add("product-images-slideshow");
//         productImagesList.classList.add("swiper-wrapper");
//         // productImagesList.classList.remove("flex-col");
//         // productImagesList.classList.remove("gap-5");
//         // productImagesList.classList.remove("");
//     } else {
//         productImagesSs.classList.remove("product-images-slideshow");
//         productImagesList.classList.remove("swiper-wrapper");
//         // productImagesList.classList.add("flex-col");
//     }

//     for (let i = 0; i < productImagesListLi.length; i++) {
//         if (isSmallScreen) {
//             productImagesListLi[i].classList.add("swiper-slide");
//         } else {
//             productImagesListLi[i].classList.remove("swiper-slide");
//         }
//     }
// }

// // Initial execution on page load
// hideProductImagesOnSmallScreen();

// // Add event listener for window resize
// window.addEventListener("resize", hideProductImagesOnSmallScreen);



// ------------------ Slideshow ------------------------
// const wrapper = document.querySelector('.img-wrapper');
// const next = document.querySelector('.next')
// const pre = document.querySelector('.pre')
// const horizontal = document.querySelector('.horizontal')
// const vetical = document.querySelector('.vertical');
// let sum = 0;
// let minus = 0;

// next.addEventListener('click', () => {
//     if (sum >= 750) {
//         sum = 0;
//     } else {
//         sum += 170;
//     }
//     if (wrapper.style.flexDirection === 'row') {
//         wrapper.style.transform = `translateX(-${sum}px)`
//     } else {

//         wrapper.style.transform = `translateY(-${sum}px)`
//     }
//     minus = sum;
// });

// pre.addEventListener('click', () => {
//     if (minus <= 0) {
//         minus = 750;
//     }
//     else {
//         minus = sum - 180;
//     }
//     if (wrapper.style.flexDirection === 'row') {
//         wrapper.style.transform = `translateX(-${minus}px)`
//     } else {

//         wrapper.style.transform = `translateY(-${minus}px)`
//     }
//     sum = minus;
// })

// horizontal.addEventListener('click', () => {
//     wrapper.style.transform = 'transalte(0,0)';
//     wrapper.style.flexDirection = 'row';
// })
// vetical.addEventListener('click', () => {
//     wrapper.style.transform = 'transalte(0,0)';
//     wrapper.style.flexDirection = 'column';
// })




