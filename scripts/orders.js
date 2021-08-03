import { getOrders, getInterior, getPaint, getTechnology, getWheels, getTypes } from "./database.js"

const buildOrderListItem = (order) => {


    const wheels = getWheels()
        const foundWheels = wheels.find(
            (wheel) => {
                return wheel.id === order.wheelId
            }
        )
       

    const interiors = getInterior()
        const foundInterior = interiors.find(
            (interior) => {
                return interior.id === order.interiorId
            }
        )
       


    const paints = getPaint()
        const foundPaint = paints.find(
            (paint) => {
                return paint.id === order.paintId
            }
        )
        


    const technologies = getTechnology()
        const foundTechnology = technologies.find(
            (tech) => {
                return tech.id === order.technologyId
            }
        )

    const types = getTypes()
        const foundType = types.find(
            (type) => {
                return type.id === order.typeId
            }
        )


        let totalCost = foundTechnology.price + foundPaint.price + foundWheels.price + foundInterior.price

        if (order.typeId === 1){
            totalCost *= 1
        } else if(order.typeId === 2) {
            totalCost *= 1.5
        } else if(order.typeId === 3) {
            totalCost *= 2.25
        }


    return `<li>
        Order #${order.id} cost ${totalCost}
    </li>`
}

export const Orders = () => {
    
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
