import { getWheels, setWheels } from "./database.js"

const wheelArray = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
            
        }
    }
)


export const wheelColor = () => {
    let HTML = "<ul>"
    const wheelItemArray = wheelArray.map(style => {
        return `<li> <input type="radio" name ="wheels" value = "${style.id}" /> ${style.wheelType} cost ${style.price}</li>`
    })
    HTML += wheelItemArray.join("")
    HTML += "</ul>"
    return HTML
}