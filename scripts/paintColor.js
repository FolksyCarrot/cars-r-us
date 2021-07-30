import { getPaint, setPaint } from "./database.js"

const paintArray = getPaint()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setPaint(parseInt(event.target.value))
            
        }
    }
)

export const paintColor = () => {
    let HTML = "<ul>"
    const paintItemsArray = paintArray.map(style => {
        return `<li> <input type="radio" name ="paint" value = "${style.id}" /> ${style.color} cost ${style.price}</li>`
    })
    HTML += paintItemsArray.join("")
    HTML += "</ul>"
    return HTML
}
