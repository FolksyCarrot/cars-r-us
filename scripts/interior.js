import { getInterior, setInterior } from "./database.js"

const interiorArray = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setInterior(parseInt(event.target.value))
            
        }
    }
)


export const interiorStyles = () => {
    let HTML = "<ul>"
    const listItemsArray = interiorArray.map(style => {
        return `<li> <input type="radio" name ="style" value = "${style.id}" /> ${style.seatType} cost ${style.price}</li>`
    })
    HTML += listItemsArray.join("")
    HTML += "</ul>"
    return HTML
}
