//hoisting 

console.log(x)
var x;
// let and const can be hoisted but can't use before declare it
//  var declarations are hoisted and initialized with undefined as a value, 
// while const and let are hoisted but not initialized.

// functions 
const temp = () => {
    return ['jack', 23]
}

const [name, age] = temp();
console.log(name,age)


//Immediately invoaked function
;(function dosomething() {
    console.log('executed')
})()

// assign value to variable
const con = (function(){
    return 2+10;
})()
console.log("consoling",con);


// this keyword 
const user = {
    name : "jack",
    age : 16,
    temp : function(){
        console.log("hello" + this.name)
    }
}

user.temp();

user.drive = function(){
    console.log(this.name + " not allowed to drive as he is " + this.age + " years old");
}

user.drive();


// bind keywords
const car = {
    maker: 'Ford',
    model: 'Fiesta'
}
  
const drive = function() {
    console.log(`Driving a ${this.maker} ${this.model} car!`)
}.bind(car)
  
drive()

//binding method of one object to another object
const oneCar = {
    maker : 'ford',
    model : 'fiesta',
    drive(){
        console.log(`Driving a ${this.maker} ${this.model} car!`)
    }
}

const anotherCar = {
    maker : 'tata',
    model : 'vagenar'
}

oneCar.drive.bind(anotherCar)();


