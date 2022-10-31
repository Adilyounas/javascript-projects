// let person ={
//     name: `Muhammad Adil`,
//     age: 25,
//     country: `Pakistan`
// }


// function logData(){
//     console.log(person.name + " " + `is ` + person.age + " " +`years old and lived in` + person.country)

// }

// logData()



// ......................................................2..............................



// let age = 66

// if (age < 6){
//     console.log(`Free`)
// }else if (age >= 6 && age <= 18){
//     console.log(`child discount`)
// }else if (age >= 18 && age <= 26){
//     console.log(`student discount`)
// }else if( age >= 27 && age <= 66){
//     console.log(`full price`)

// }else{
//     console.log(`Senior citizen discount`)
// }


// -----------------------3-------------------------------------------------

// let largeCountries = [`China`,`india`, `USA` , `indonesia` , `Pakistan` ]

// for (let i=0; i < largeCountries.length; i++ ){
//     console.log("-" + largeCountries[i])

// }


// .............................................4...................

// let largeCountries = [`Tuvalu`,`india`, `USA` , `indonesia` , `Monaco` ]

// largeCountries.pop()
// largeCountries.push(`Pakistan`)
// largeCountries.shift()
// largeCountries.unshift(343434)

// console.log(largeCountries)

// ...............................5..................



// let dayOfMonth = 31
// let weekDay = `Friday`

// if (weekDay=== "Friday" && dayOfMonth ===31){
//     console.log("😲")
// }


// 5555555555555555555555555555555555555555555

// let hands = [`rock`, `paper`, `scissor`]

// function getHand() {
//     let randomIndex = Math.floor(Math.random()*3)
//     return hands[randomIndex]
// }

// console.log(getHand())


// 666666666666666666666666666666666666666666666666666666666

let fruit = ["🍎" , "🍊" , "🍎" , "🍎" , "🍊"]

let appleShelf = document.querySelector(".apple-shelf")
let orangeShelf = document.querySelector(".orange-shelf")



function sortFruits(){
    for (let i = 0; i < fruit.length; i++){

        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if(fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }


} 

sortFruits()
