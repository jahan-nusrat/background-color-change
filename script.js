const button = document.querySelector('button')
const para = document.querySelector('p')
button.classList.add('btn', 'btn-style')
const random = function (num) {
    return Math.floor(Math.random() * (num + 1));

}
button.addEventListener('click', () => {
    let rgbColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
    document.body.style.backgroundColor = rgbColor;
    para.style.color = rgbColor
})