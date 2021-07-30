




document.addEventListener(
    "click",
    (event) => {
    }
)

export const getCars = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__interior options">
                <h2>Interior</h2>
            </section>
            <section class="choices__paintColor options">
                <h2>Paint Color</h2>
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
        </article>
    `
}
