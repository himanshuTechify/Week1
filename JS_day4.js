// this keyword with arrow function
const suv = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    drive : () => {
        console.log(`${this.manufacturer} ${this.model}`)
    }
}
  
suv.drive();


//loops
const list = ['a','b','c']

list.forEach( item => console.log(item))


const user = {
    name : "jack",
    age : 23,
    city : "Amd"
}

// for..in

for(let p in user){
    console.log(user[p])
}

//for.. of
for(const [index, value] of ['a','b','c'].entries()){
    console.log(value);
    console.log(index);
}

//this loop will execute 1 to 5 if we use let 
//if we use var then it will print 55555
const operations = []

for (let i = 0; i < 5; i++) {
  operations.push(() => {
    console.log(i)
  })
}

for(const value of operations){
    value();
}


//array
const a = Array(12).fill(0)

a.unshift(23)

a.push(34)
for(const value of a){
    console.log(value)
}

console.log(a.includes(1999,7))
console.log(a.includes(34))

