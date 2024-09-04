//callback functions
setTimeout( () => {
    console.log("settimeout called")
}, 2000)


// setInterval

const id = setInterval( () => {
    console.log("practise")
}, 200)

clearInterval(id)

//recursive setTimeout 

const myFunction = () => {
    console.log("heloo");

    setTimeout(myFunction,100)
}
myFunction();