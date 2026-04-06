const mainBox = document.querySelector(".block-1")
const text = document.querySelector(".text-box h2")
const paragraph = document.querySelector(".text-box p")

const sliderBack = document.querySelector(".slider-back")
const slideForward = document.querySelector(".slider-forward")

let index = 0

slideForward.addEventListener('click', () => {
    if (index === 2) {
        index = 0
    } else {
        index += 1
    }
    change(index)
})

sliderBack.addEventListener('click', () => {
    if (index === 0) {
        index = 2
    } else {
        index -= 1
    }
    change(index)
})



function change(index) {
    switch (index) {
        case 1:
            text.textContent = "We are available all across the globe"
            paragraph.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.`
            mainBox.style.backgroundImage = "url('images/desktop-image-hero-2.jpg')"
            break
        
        case 2:
            text.textContent = "Manufactured with the best materials"
            paragraph.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
            to ensure that every product is made as perfect and as consistent as possible. With three decades of 
            experience in this industry, we understand what customers want for their home and office.`
            mainBox.style.backgroundImage = "url('images/desktop-image-hero-3.jpg')"
            break
        
        case 0:
            text.textContent = "Discover innovative ways to decorate"
            paragraph.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.`
            mainBox.style.backgroundImage = "url('images/desktop-image-hero-1.jpg')"
            break

    }

}

const slider = document.querySelector('.slider'); // сам слайдер
const block1 = document.querySelector('.block-1');
const block2 = document.querySelector('.block-2');
let sliderOriginalParent = block2; // запоминаем, откуда взяли

function moveSliderForMobile(e) {
    if (e.matches) { // ширина <= 550px
        // если слайдер ещё не внутри block-1, перемещаем
        if (slider.parentElement !== block1) {
            block1.appendChild(slider);
        }
    } else { // ширина > 550px
        // возвращаем обратно в block-2 (например, перед .slider или в конец)
        if (slider.parentElement !== sliderOriginalParent) {
            sliderOriginalParent.appendChild(slider);
        }
    }
}

const mobileQuery = window.matchMedia('(max-width: 550px)');
mobileQuery.addListener(moveSliderForMobile);
moveSliderForMobile(mobileQuery); // вызвать сразу при загрузке

