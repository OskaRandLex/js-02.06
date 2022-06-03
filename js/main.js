const elColor = document.querySelector('.div-color')
const elBorder = document.querySelector('.div-border')
const elText = document.querySelector('.div-text')



elColor.addEventListener('click', (ev) => {
    elColor.style.backgroundColor = 'blue';
})

elBorder.addEventListener('click', (ev) => {
    elBorder.style.cssText = 'border: 3px solid red';
})

elText.addEventListener('click', (ev) => {
    elText.innerHTML = "Good Job Alex"
})