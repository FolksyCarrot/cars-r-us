const database = {
    PaintColor: [{
        id: 1, 
        color: "Silver",
        price: 15
    }, {
        id: 2, 
        color: "Midnight Blue",
        price: 10
    }, {
        id: 3, 
        color: "Firebrick Red",
        price: 22
    }, {
        id: 4, 
        color: "Spring Green",
        price: 118
    }],
    Interior: [{
        id: 1, 
        seatType: "Beige Fabric",
        price: 33
    }, {
        id: 2, 
        seatType: "Charcoal Fabric",
        price: 87
    }, {
        id: 3, 
        seatType: "White Leather",
        price: 120
    }, {
        id: 4, 
        seatType: "Black Leather",
        price: 135
    }],
    Technology: [{
        id: 1, 
        package: "Basic Package",
        price: 4
    }, {
        id: 2, 
        package: "Navigation Package",
        price: 20
    }, {
        id: 3, 
        package: "Visibility Package",
        price: 1350
    }, {
        id: 4, 
        package: "Ultra Package",
        price: 3
    }], 
    Wheels: [{
        id: 1, 
        wheelType: "17-inch Pair Radial",
        price: 300
    }, {
        id: 2, 
        wheelType: "17-inch Pair Radial Black",
        price: 2300
    }, {
        id: 3, 
        wheelType: "18-inch Spoke Silver",
        price: 29700
    }, {
        id: 4, 
        wheelType: "18-inch Spoke Black Radial",
        price: 3
    }],
    customerOrders: [
        {
            // paintId: 1,
            // interiorId: 2,
            // technologyId: 3,
            // wheelId: 2,
            // timestamp: 1614659931693

       
        }],

    orderBuilder = {}

}

export const getPaint = () => {
    return database.PaintColor.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.Interior.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.Technology.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.Wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customerOrders.map(orders => ({...orders}))
}



export const setPaint = (id) => {
    database.orderBuilder.paintId = id
} 

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
} 


export const addCustomerOrder = () => {
    //copy the object from the array that we want to use, so that it can be used elsewhere, without disrupting the database
    const newCustomOrders = {...database.orderBuilder}

    //adding a new ID/Primary Key to the CustomerOrders object. 
    let lastIndex;
    if (database.customerOrders.length === 0) {
        lastIndex = 1
        newCustomOrders.id = lastIndex
    } else {
        lastIndex = database.customerOrders.length -1
        newCustomOrders.id = lastIndex + 1
    }

    // Add a timestamp to the order
    newCustomOrder.timestamp = Date.now()

    //push new object to permanent placeholder. i.e. orderbuilder is temporary because it resets after every button click. and customOrders is the permanent placeholder.
    database.customerOrders.push(newCustomOrders)

    // reset temporary placeholder
    database.orderBuilder = {}

    //custom event
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


