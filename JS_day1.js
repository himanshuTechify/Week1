// Arrow functions 
const fun = () => {

}

// spread operator
const arr = ["hello", "name"];

const clone = [...arr, 2];
console.log(clone)



// shallow cloning
const original = {
    name : "himanshu",
    address : {
        city : "Ahmedabad"
    }
}

const temp = {...original}
console.log(temp)

temp.address.city = "Bangaluru"
console.log(original)


//  Destructuring assignments
const User = {
    firstName : "himanshu",
    lastName : "jack",
    age : 50,
    gender : "male"
}

const {  firstName : name, age : number } = User

console.log(name, number)


