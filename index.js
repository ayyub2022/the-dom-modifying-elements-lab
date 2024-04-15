
// Write your code here!

const mainNode = document.querySelector('main#main')
mainNode.remove()

let newHeader = document.createElement("h1")

newHeader.setAttribute("id", "victory")

newHeader.textContent = "Ayub is the champion"
