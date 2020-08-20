const colors = ["red", "orange", "yellow", "teal", "green", "blue", "violet", "purple", "indigo", "black"]
const btn = document.querySelector(`#btn`)
const hex = document.querySelector(`#hexCode`)

btn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * 10)
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    hex.innerHTML = colors[randomNumber]
})