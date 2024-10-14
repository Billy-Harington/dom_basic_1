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
const img = document.querySelector('.img');
const btnsColor = document.querySelectorAll('button[data-color]');
const btnsStorage = document.querySelectorAll('button[data-storage]');
const info = document.querySelector('.info');

let currentColor = 'white';
let currentPrice = 1999; 


const picture = {
    grey: './grey.png',
    white: './white.png'
};


btnsColor.forEach((btn) => {
    btn.onclick = () => {
        currentColor = btn.getAttribute('data-color');
        img.style.backgroundImage = `url(${picture[currentColor]})`;

       
        if (currentColor === 'grey') {
            info.innerHTML = `<h1>Macbook Pro</h1><h3>Space Grey</h3><h2>$${currentPrice}</h2>`;
        } else if (currentColor === 'white') {
            info.innerHTML = `<h1>Macbook Pro</h1><h3>White</h3><h2>$${currentPrice}</h2>`;
        }
    };
});

btnsStorage.forEach((btn) => {
    btn.onclick = () => {
        currentPrice = btn.getAttribute('data-price'); 
    
        if (currentColor === 'grey') {
            info.innerHTML = `<h1>Macbook Pro</h1><h3>Space Grey</h3><h2>$${currentPrice}</h2>`;
        } else if (currentColor === 'white') {
            info.innerHTML = `<h1>Macbook Pro</h1><h3>White</h3><h2>$${currentPrice}</h2>`;
        }
    };
});
