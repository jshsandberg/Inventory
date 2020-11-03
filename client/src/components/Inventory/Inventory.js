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
                    quantity: "2 pounds"
                },
                {
                    item: "milk",
                    dateAdded: "10/15/2020",
                    quantity: "4 gallons"
                },   
                {
                    item: "eggs",
                    dateAdded: "10/05/2020",
                    quantity: "7 dozen"
                },  
                {
                    item: "cups",
                    dateAdded: "08/20/2020",
                    quantity: "300"
                },   
                {
                    item: "forks",
                    dateAdded: "10/20/2020",
                    quantity: "251"
                }, 
                {
                    item: "spoons",
                    dateAdded: "09/09/2020",
                    quantity: "63"
                },
            ]
        }
    

    //console.log(Inventory)

    return (
        <InventoryItems
        Inventory={Inventory}
        > 
        </InventoryItems>
    )


}

export default Inventory