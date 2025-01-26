const userInput = document.getElementById("userInput")
userInput.addEventListener("input",()=>{
    localStorage.setItem('userInput',userInput.value)
})
window.addEventListener('load',()=>{
    const userValue = localStorage.getItem('userInput')
    userInput.value = userValue
})
const button = document.getElementById("button")
button.addEventListener("click",()=>{
    localStorage.removeItem("userInput");
    userInput.value = ""
})