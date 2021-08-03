import { mainHTML } from "./cars.js"




const mainContainer = document.querySelector("#container")

const render =() => {
    mainContainer.innerHTML = mainHTML()
}

render()

document.addEventListener("stateChanged", event => {
    console.log("state of data has changed. rerendering HTML")
    render()
    
})