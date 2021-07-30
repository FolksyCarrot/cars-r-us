import { mainHTML } from "./cars.js"



const mainContainer = document.querySelector("#container")

const render =() => {
    mainContainer.innerHTML = mainHTML
}

render()