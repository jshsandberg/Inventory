import React from "react";
import InventoryItems from "../Inventory/InventoryItems/Index"


function Inventory() {

    const Inventory = 
        {
            businessName: "Coffee Shop",
            inventory: [
                {
                    item: "beans",
                    dateAdded: "09/20/2020",
                    quantity: 2,
                    cycle: [
                        {
                            amount: 5
                        },
                        {
                            every: 30
                        }
                    ]
                },
                {
                    item: "milk",
                    dateAdded: "10/15/2020",
                    quantity: 5,
                    cycle: [
                        {
                            amount: 5
                        },
                        {
                            every: 30
                        }
                    ]
                },   
                {
                    item: "eggs",
                    dateAdded: "10/05/2020",
                    quantity: 12,
                    cycle: [
                        {
                            amount: 5
                        },
                        {
                            every: 30
                        }
                    ]
                },  
                {
                    item: "cups",
                    dateAdded: "08/20/2020",
                    quantity: 25,
                    cycle: [
                        {
                            amount: 5
                        },
                        {
                            every: 30
                        }
                    ]
                },   
                {
                    item: "forks",
                    dateAdded: "10/20/2020",
                    quantity: 85,
                    cycle: [
                        {
                            amount: 5
                        },
                        {
                            every: 30
                        }
                    ]
                }, 
                {
                    item: "spoons",
                    dateAdded: "09/09/2020",
                    quantity: 9,
                    cycle: [
                        {
                            amount: 5
                        },
                        {
                            every: 30
                        }
                    ]
                },
            ]
        }
    

    //console.log(Inventory)

    return (
        <InventoryItems
        {...Inventory}
        > 
        </InventoryItems>
    )


}

export default Inventory