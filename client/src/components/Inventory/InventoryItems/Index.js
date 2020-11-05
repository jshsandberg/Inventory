import React, { useState } from "react";
import "./style.css"
import Modal from "../Modal/Modal"

function InventoryItems(props) {
    
    //console.log(props.Inventory.inventory[0].quantity)

    const [modal, setModal] = useState();

    const alterInventory = event => {
     //console.log(event.target.value)
     setModal(event.target.value)
    }

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
          return (<>
                    <tr>
                        <th scope="row"></th>
                            <td>{item.item}</td>
                            <td>{item.dateAdded}</td>
                            <td>{item.quantity}</td>
                            <button 
                            value={item.item} 
                            type="button" 
                            className="btn btn-primary" 
                            data-toggle="modal" 
                            data-target="#exampleModal" 
                            onClick={alterInventory}>
                              Alter
                            </button>
                    </tr>
                 </>)

                 
      })}
  </tbody>
</table>

<Modal item={modal}></Modal>
        
        
        </div>
    )
};

export default InventoryItems