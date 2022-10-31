
const Obj = {
    name:"adil younas",
    city:"Gujranwala",
    phone:"03040053938"
};
console.log(Obj)

//object to json
// Obj.name Obj.city can't be use in json formate
const jsonData = JSON.stringify(Obj)
console.log(jsonData)

//json to object

const orgObj = JSON.parse(jsonData)
console.log(orgObj)

