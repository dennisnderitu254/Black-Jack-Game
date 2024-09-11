// 2. Use getRandomCard() to set the vaues of firstCard and secondCard
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    return 5
}

// Create a new function called startGame() that calls renderGame()
function startGame(){
    renderGame()
}

function renderGame() {
    cardsEl.textContent = " Cards: " 
    // Creating a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message   
}

// function newCard() {
//     console.log("Drawing a new card from the deck!")
//     //  1. Create a card variable, and hard code its value to a number (2-11)
//     let card = 7
//     // 2. Add the new card to the sum variable
//     sum += card
//     // 3. Call startGame()
//     startGame()
// }

function newCard() {
    // Use  the getRancomCard() to set the value of card
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
