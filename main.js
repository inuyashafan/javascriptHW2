//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function loopity(){
    for (i=0;i<Object.values(person3).length;i++){
        return Object.values(person3)
    }
}
console.log(loopity())


//=======Exercise #2=========//
function Person(name, age, eyecolor) {
    this.name = name
    this.age = age
    this.eyecolor = eyecolor

    this.printInfo = () => {
        console.log("This guy is named " + this.name + " and is " + this.age + " years old and has " + this.eyecolor + " eyes")
        this.age++
    }
    this.setAge = (newAge) => {
        this.age = newAge
    }
}

let john = new Person('John', 20, 'brown')
console.log(john.printInfo())
console.log(john.printInfo())
console.log(john.printInfo())
john.setAge(50)
console.log(john.printInfo())

let donovan = new Person('Donovan', 36, 'grey')
console.log(donovan.printInfo())
console.log(donovan.printInfo())
console.log(donovan.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isStringBig = (stringy) => {
    return new Promise( (resolve, reject) => {
        if (stringy.length>10){
            resolve('word')
        } else{
            resolve('Number')
        }
    })
}
isStringBig('javascripting')

.then ( (result) => {
    console.log('big ' + result)
})

.catch( (error)=>{
    console.log('small ' + error)
})