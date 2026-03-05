const heading = document.getElementById('h2')
const greet = document.getElementById('greet')
const input = document.getElementById("input")
greet.addEventListener("click",()=>{
    heading.innerText = "Hello, "+ input.value;
})

const red = document.getElementById('Red')
red.addEventListener('click',() => {
    red.classList.toggle('red')
})
const blue = document.getElementById('Blue')
blue.addEventListener('click',() => {
    blue.classList.toggle('blue')
})
const green = document.getElementById('Green')
green.addEventListener('click',() => {
    green.classList.toggle('green')
})
const yellow = document.getElementById('Yellow')
yellow.addEventListener('click',() => {
    yellow.classList.toggle('yellow')
})