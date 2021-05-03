// 1. Object Person.
const person = {
    name: "Lea",
    age: 29,
    food: "chocolate cake",
}


for (const propertyName in person) {
    console.log("The property is ", propertyName,  person[propertyName])
}
// console.log(person.age)                  These are 
// console.log(person["age"])               all
// console.log(person[propertyName])        the same




// 2. Get Values
const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
}

const keys = Object.values(getObjectValues);
console.log(keys);




// 3. Add A Method.
const person2 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    print: function() {
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`);
    }
};
person2.print()



// BONUS QUESTIONS

// 1. Convert keys and values into an array
const objectToArray = {
  A: 1,
  B: 2,
  C: 3,
}
const intoArray = Object.entries(objectToArray);
console.log(intoArray);

const objectToArray2 = {
    cats: 1,
    dogs: 2,
    turtles: 4,
}
const arrayFromObject = Object.entries(objectToArray2);
console.log(arrayFromObject)



// 2. List Properties
let student = {
    name: "Mike",
    class: "4A",
    course: "English",
}
const arrayOfProperties = Object.keys(student);
console.log(arrayOfProperties)



// 3. Merge.
const first = {firstName: "John"}
const last = {lastName: "Smith"}

const theMerge = {
    ...first,
    ...last,
}

console.log(theMerge)

// 4. Switch Keys and Values.
let personAgain = {
    name: "John",
    job: "teacher"
}

