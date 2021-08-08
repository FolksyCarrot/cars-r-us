import { paintColor } from "./paintColor.js"
import { technologyType } from "./technology.js"
import { wheelColor } from "./wheels.js"
import { interiorStyles } from "./interior.js"
import { addCustomerOrder } from "./database.js"
import { Orders } from "./orders.js"
import { modelType } from "./types.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomerOrder()
            
           
        }
    }
)


export const mainHTML = () => {
    const HTML =
    ` 
<h1>Cars-R-Us</h1>
<article class="choices">
    <section class="choices__paint options">
        <h2>Paint Color</h2>
        <p>${paintColor()}</p>
    </section>
    <section class="choices__sizes options">
        <h2>Technology</h2>
        <p>${technologyType()}</p>
    </section>
    <section class="choices__wheel options">
        <h2>Wheels</h2>
        <p>${wheelColor()}</p>
    </section>
    <section class="choices__styles options">
        <h2>Interior</h2>
        <p>${interiorStyles()}</p>
    </section>
</article>

<div>
    <h2>Car Models</h2>
    ${modelType()}
</div>

<article>
    <button id="orderButton">Create Custom Order</button>
</article>

<article class="customOrders">
    <h2>Custom Jewelry Orders</h2>
    <p>${Orders()}</p>
</article>
`
return HTML
}

