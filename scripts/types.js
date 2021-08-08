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
    const typeArray = Type.map(type => {
        return `<li> <input type="radio" name ="type" value = "${type.id}" /> ${type.value}</li>`
    })

    HTML += typeArray.join("")
    HTML += "</ul>"
    return HTML





    // the below code will also work starting at line 15
    
    // for (const types of Type) {
    //     HTML += `<li> <input type="radio" name ="type" value = "${types.id}" /> ${types.value}</li>`
    //     }   
        
    //     HTML += "</ul>"
    //     return HTML
}

