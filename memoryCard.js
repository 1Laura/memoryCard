const memoryGame = document.querySelector('.memoryGame');
// const cards = document.querySelectorAll('.memoryCard');

let colorArray = ['#fd4508', '#457300', '#d604f8', '#ca0505', '#eed00f', '#0036cb']

// '#fd4508', '#457300', '#d604f8', '#ca0505', '#eed00f', '#0036cb']

function createCard() {
    for (let i = 0; i < 12; i++) {
        // let randomColor = Math.floor(Math.random() * colorArray.length)
        let random = Math.floor(Math.random() * colorArray.length)
        console.log(random)
        let memoryCard = document.createElement("div")
        memoryCard.classList.add('memoryCard')
        memoryCard.addEventListener('click', flipCard)

        let frontFace = document.createElement("div")
        frontFace.classList.add('frontFace')

        frontFace.classList.add(colorArray[random])
        // memoryCard.addEventListener('click', flipCard)

        let backFace = document.createElement("div")
        backFace.classList.add('backFace')
        // backFace.addEventListener('click', flipCard)

        memoryCard.appendChild(backFace)
        memoryCard.appendChild(frontFace)
        memoryGame.appendChild(memoryCard)


        // console.log(memoryCard)
    }
}

createCard()


function flipCard(event) {

    let randomColor = Math.floor(Math.random() * colorArray.length)

    // event.path[0] =
    event.target.backgroundColor = randomColor.value
    // console.log(event.target.backgroundColor)
}


// function makeSquares()  {
// //     for (let x = 0; x < 12; x++) {
//         let randomColor = Math.floor(Math.random() * colors.length)
//         container.innerHTML += `<div class="${colors[randomColor]}" onclick="boxClicked(${x})"></div>`
//         // container.innerHTML += `<div class="${colors[randomColor]}" onclick="boxClicked(${x})"></div>`
//         colors = colors.filter((item, index) => index != randomColor)
//         console.log(colors[randomColor])
//     }
// }


////// pvz
// const cards = document.querySelectorAll('.memory-card');

// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;
//
// function flipCard() {
//     if (lockBoard) return;
//     if (this === firstCard) return;
//     this.classList.add('flip');
//     if (!hasFlippedCard) {
//         hasFlippedCard = true;
//         firstCard = this;
//         return;
//     }
//     secondCard = this;
//     checkForMatch();
// }
//
// function checkForMatch() {
//     let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
//     isMatch ? disableCards() : unflipCards();
// }
//
// function disableCards() {
//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click', flipCard);
//     resetBoard();
// }
//
// function unflipCards() {
//     lockBoard = true;
//     setTimeout(() => {
//         firstCard.classList.remove('flip');
//         secondCard.classList.remove('flip');
//         resetBoard();
//     }, 1500);
// }
//
// function resetBoard() {
//     [hasFlippedCard, lockBoard] = [false, false];
//     [firstCard, secondCard] = [null, null];
// }
//
// (function shuffle() {
//     cards.forEach(card => {
//         let randomPos = Math.floor(Math.random() * 12);
//         card.style.order = randomPos;
//     });
// })();
//
// cards.forEach(card => card.addEventListener('click', flipCard));


//////////////mano
// let container = document.getElementById('container')
// let colors = [blue, ]
//
// function makeSquares() {
//     for (let x = 0; x < 12; x++) {
//         let randomColor = Math.floor(Math.random() * colors.length)
//         container.innerHTML += `<div class="${colors[randomColor]}" onclick="boxClicked(${x})"></div>`
//         // container.innerHTML += `<div class="${colors[randomColor]}" onclick="boxClicked(${x})"></div>`
//         colors = colors.filter((item, index) => index != randomColor)
//         console.log(colors[randomColor])
//     }
// }
//
// generateColor()
// makeSquares()
//
// function boxClicked(event, x) {
// //     let boxColor = event
//     console.log(event.target.classList)
//     // console.log(colors)
//     // console.log(x)
// }
//
// function generateColor() {
//     for (let i = 0; i < 6; i++) {
//         let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16)
//         console.log(randomColor)
//         colors.push(randomColor)
//     }
//     colors = [...colors, ...colors]
//     // console.log(colors)
// }

