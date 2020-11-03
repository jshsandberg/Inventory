import React from "react";
import "./style.css"

function InventoryItems(props) {
    
    console.log(props.Inventory.inventory[0].quantity)


    return (
        <div className="container">
   <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item Name</th>
      <th scope="col">Date Added</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
  {props.Inventory.inventory.map(item => {
      console.log(item.item)
          return (<>
                    <tr>
                        <th scope="row"></th>
                            <td>{item.item}</td>
                            <td>{item.dateAdded}</td>
                            <td>{item.quantity}</td>
                    </tr>
                 </>)

                 
      })}
  
  </tbody>
</table>
        </div>
    )
};

export default InventoryItems