// const img = document.querySelector('.img')
// const btns = document.querySelectorAll('button[data-color]')
// const pictures = {
//     natural: "./public/natural_titan.webp",
//     titanium: "./public/desert_titan.webp",
//     black: "./public/black_titan.webp",
//     white: "./public/white_titan.webp",
// }

// btns.forEach((btn) => {
//     btn.onclick = () => {
//         img.style.backgroundImage = `url(${pictures[btn.getAttribute('data-color')]})`
//         // img.setAttribute('src', pictures[btn.getAttribute('data-color')])
//     }
// })

const img = document.querySelector('.img')
const btns = document.querySelectorAll('button[data-color]')
const info = document.querySelector(".info")
const picture = {
    grey: './grey.png',
    white: './white.png'
}
console.log(picture)

btns.forEach((btn) => {
    btn.onclick = () => {
        img.style.backgroundImage = `url(${picture[btn.getAttribute('data-color')]})`
        const color = btn.getAttribute('data-color');
        if (color === 'grey') {
            info.innerHTML = "<h1>Macbook Pro</h1><h3>Space Grey</h3><h2>$2,599</h2>";
        } else if (color === 'white') {
            info.innerHTML = "<h1>Macbook Pro</h1><h3>White</h3><h2>$1,999</h2>";
        }
    }
})
