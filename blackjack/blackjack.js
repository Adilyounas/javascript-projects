// let firstCard = 50;
// let secondCard = 10;

// let sum = firstCard + secondCard;




// if (sum < 21){
//     console.log(`Do you want to draw a new card? 🙂`)
// } else if( sum ===21){
//     console.log(`Do you want to draw a new card? 😆`)

// } else{
//     console.log(`You're out of the game! 😅`)

// }








////////////////////////////////////////////////////////////////////////////////////////////////


// let age = 28


// if (age < 22){
//     console.log(`You are not allow here!`)
// } else if(age >= 22){
//     console.log(`Welcome!`)
// }




////////////////////////////////////////////////////////////////////////////////////////////////




// let age =105

// if (age === 100){
//     console.log(`Here is your birthday card from the king!`)
// } else if (age < 100){
//     console.log(`not eligible`)
// } else if (age > 100){
//     console.log(`not elegible, you have alredy gottten one`)
// }




////////////////////////////////////////////////////////////////////////////////////////////////

// let myself = [`Master in Msc Social work` , `work in telenor prepaid call center, i have done my B.A from government college gujranwala`,  `Adil younas`, 25 , false]











// console.log(myself)
// let myCurocity = `hi there i am using my own document for the scrimba documentation as well as`
// myself.push(myCurocity)
// console.log(myself)


// myself.pop()
// console.log(myself)



// let cards =[7,3,9,`i love you`]

// for (let i = 0; i < cards.length;  i++ ){
//     console.log(cards)
// }












////////////////////////////////////////////////////////////////////////////////////////////////




let cardContainer = []
let sum = 0
let hasBlackjack = false
let isAlive = false;
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")

let player = {
    name: "Adil",
    chips: 145
}
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + `$ :` + player.chips




function getRandomCard(){
   let randomNumber = Math.floor( Math.random()*13 ) + 1 ;
   if (randomNumber >10){
       return 10
   }else if(randomNumber===1){
       return 1
   }else{
       return randomNumber
   }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardContainer = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()

}

function renderGame() {

    if (sum <= 20) {
        message = `do you want to draw a new card?`

    } else if (sum === 21) {
        message = `wohoo! you've got the blackjack!`
        hasBlackjack = true
    } else {
        message = `you're out of the game!`
        isAlive = false


    }
    messageEl.textContent = message;

    cardEl.textContent = `Cards : ` 
    for( i=0; i<cardContainer.length; i++){
        cardEl.textContent += cardContainer[i] +` `
    }

    sumEl.textContent = "Sum:" + sum


}







function newCard(){
  
    if (hasBlackjack===false  && isAlive===true){

        let card = getRandomCard()
        
        sum +=card  //21+card
        
        cardContainer.push(card)
        console.log(cardContainer)
        
        
        renderGame()
    
    
    }
    
    }