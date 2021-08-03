import { getTypes, setType } from "./database.js"

const Type = getTypes()

document.addEventListener(
    "change", (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)

export const modelType = () => {
    let HTML = "<ul>"
    for (const types of Type) {
        HTML += `<li> <input type="radio" name ="type" value = "${types.id}" /> ${types.value}</li>`
        }   
        
        HTML += "</ul>"
        return HTML
}

