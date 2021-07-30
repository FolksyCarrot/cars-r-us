import { getTechnology, setTechnology } from "./database.js"

const technologyArray = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
            window.alert(`User chose technology package ${event.target.value}`)
        }
    }
)


export const technologyType = () => {
    let HTML = "<ul>"
    const technologyItemsArray = technologyArray.map(style => {
        return `<li> <input type="radio" name ="technology" value = "${style.id}" /> ${style.package} cost ${style.price}</li>`
    })
    HTML += technologyItemsArray.join("")
    HTML += "</ul>"
    return HTML
}