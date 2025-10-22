const blurBg = document.querySelector('.blur')
const offScreenMenu = document.querySelector('.off-screen-menu');
const hamBtn = document.querySelector('.ham-btn')
const closeBtn = document.querySelector('.close-btn')

hamBtn.addEventListener("click", () => {
    blurBg.classList.add('active');
    offScreenMenu.classList.add('active')
    hamBtn.classList.add('active')
    closeBtn.classList.add('active')
})
closeBtn.addEventListener("click", () => {
    blurBg.classList.remove('active');
    offScreenMenu.classList.remove('active')
    hamBtn.classList.remove('active')
    closeBtn.classList.remove('active')
})