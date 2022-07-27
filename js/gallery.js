let btn_prev = document.querySelector('.prev')
let btn_next = document.querySelector('.next')


let images = document.querySelectorAll('.im')
let imgN = 0
images[imgN].classList.add('shown')


let dotsContainer = document.querySelector('.dots')
for (let i = 0; i < images.length; i++) {
    dotsContainer.innerHTML += '<div class="dot"></div>'
}
let dots = document.querySelectorAll('.dot')
dots[imgN].classList.add('active')


btn_prev.onclick = function () {
    images[imgN].classList.remove('shown')
    dots[imgN].classList.remove('active')
    imgN--
    if (imgN < 0) {
        imgN = images.length - 1
    }
    images[imgN].classList.add('shown')
    dots[imgN].classList.add('active')
    
}

btn_next.onclick = function () {
    images[imgN].classList.remove('shown')
    dots[imgN].classList.remove('active')
    imgN++
    if (imgN > images.length - 1) {
        imgN = 0
    }
    images[imgN].classList.add('shown')
    dots[imgN].classList.add('active')
    
}

dots.forEach(function (item, index) {
    item.onclick = function (e) {
        images[imgN].classList.remove('shown')
        dots[imgN].classList.remove('active')
        imgN = index
        images[imgN].classList.add('shown')
        dots[imgN].classList.add('active')
    }
});