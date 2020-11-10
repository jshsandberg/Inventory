import React, { useEffect, useState } from "react";
import Shipment from "../Shipment/index"

//API methods
import API from "../../utils/API";

import "./style.css"

const Modal = (props) => {

  const {
    updateInventory,
    item,
  } = props;

  const [input, setInput] = useState({});

  const handleInputChange = ({target: {value,name}}) => {
    setInput({...input, [name]:value})
  }

  useEffect(()=> setInput(item), [props])


  return (
    <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Choose what to update:
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <input onChange={handleInputChange} name="item" value={input.item} placeholder={item.item}></input>
                    <br></br>
                    <br></br>
                    <input onChange={handleInputChange} name="dateAdded" value={input.dateAdded} placeholder={item.dateAdded}></input>
                    <br></br>
                    <br></br>
                    <input onChange={handleInputChange} name="quantity" value={input.quantity} placeholder={item.quantity}></input>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick={() => updateInventory(input, item.i)} type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
  </div>
  )
}


function InventoryItems() {

  const [item, setItem] = useState({})
  const [inventoryState, setInventoryState] = useState({ inventory: [] });

  useEffect(() => {
    API.getInventory()
      .then(data => setInventoryState(data))
  }, []);


 


  //console.log(date.addDays(5).getMonth())
  //console.log(date.addDays(5).getDate())



  const updateInventory = (newItem, i) => {
    const newInv = [...inventoryState.inventory];
    newInv[i] = newItem;
    setInventoryState({inventory:newInv})
  }




  return (
        <>
            <div className="container">
                <Modal updateInventory={updateInventory} item={item} />
                    <h1>Stock Inventory</h1>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Date Added</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventoryState.inventory.map((item, i) => {
                                    return (
                                    <>
                                        <tr>
                                            <th scope="row"></th>
                                                <td>{item.item}</td>
                                                <td>{item.dateAdded}</td>
                                                {item.quantity < 5 ? <td style={{ backgroundColor: "red" }}>{item.quantity}</td> : <td>{item.quantity}</td>}
                                                <td>
                                                    <button
                                                        key={i}
                                                        type="button"
                                                        className="btn btn-primary"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                        onClick={() => setItem(({...item, i}))}
                                                        >
                                                    Update
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        style={{ backgroundColor: "red" }}
                                                        >
                                                    Delete
                                                    </button>
                                                </td>
                                        </tr>
                                    </>
                                    )
                                })}
                            </tbody>
                        </table>
            </div >
                
            <Shipment
                shipment={inventoryState}
            >
            </Shipment>

        </>
  )
};

export default InventoryItems