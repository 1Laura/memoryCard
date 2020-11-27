const memoryGame = document.querySelector('.memoryGame');
// const cards = document.querySelectorAll('.memoryCard');

// let colorArray = ['#fd4508', '#457300', '#d604f8', '#ca0505', '#eed00f', '#0036cb']

colorsArray = []

createCard()


function createCard() {
//colors
    for (let i = 0; i < 6; i++) {
        let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16)
        colorsArray.push(randomColor, randomColor)
    }

    //html card
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * colorsArray.length)
        memoryGame.innerHTML += `
        <div class="${colorsArray[randomIndex]}" onclick="flipCard(event)"></div>`

        // let memoryCard = document.createElement("div")
        // memoryCard.classList.add('memoryCard')
        // memoryCard.addEventListener('click', flipCard)
        //
        // let frontFace = document.createElement("div")
        // frontFace.classList.add('frontFace')
        //
        // frontFace.classList.add(colorArray[random])
        // // memoryCard.addEventListener('click', flipCard)
        //
        // let backFace = document.createElement("div")
        // backFace.classList.add('backFace')
        // // backFace.addEventListener('click', flipCard)
        //
        // memoryCard.appendChild(backFace)
        // memoryCard.appendChild(frontFace)
        // memoryGame.appendChild(memoryCard)

        // colorsArray = colorsArray.filter((color, index) => index !== randomIndex)
        colorsArray.splice(randomIndex, 1)
    }
}

let clickedCard = {
    one: null,
    two: null,
    counter: 0
}

function flipCard(event) {
    let color = event.target.className
    event.target.style.backgroundColor = color

    if (clickedCard.counter === 0 && !event.target.classList.contains('flip')) {
        clickedCard.one = event.target
        clickedCard.one.style.backgroundColor = color
        return clickedCard.counter++
    }
    if (clickedCard.counter === 1 && !event.target.classList.contains('flip')) {
        clickedCard.two = event.target
        clickedCard.two.style.backgroundColor = color
        checkForMatch()
    }
}

function checkForMatch() {
    if (clickedCard.one.className === clickedCard.two.className) {
        clickedCard.one.classList.add('flip')
        clickedCard.two.classList.add('flip')
        clickedCard.counter = 0
    } else {
        setTimeout(() => {
            clickedCard.one.classList.remove('flip')
            clickedCard.two.classList.remove('flip')
            clickedCard.one.style.backgroundColor = 'white'
            clickedCard.two.style.backgroundColor = 'white'
            clickedCard.counter = 0
        }, 900)
    }
}