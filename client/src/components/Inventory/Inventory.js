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
  const [inventoryState, setInventoryState] = useState([]);
  const [inventoryStateTest, setInventoryStateTest] = useState([]);
  //const [userCode, setUserCode] = useState("5fb6e9c7439e183e44657964")

  useEffect(() => {
    beforeMount();
    setInventoryState(inventoryStateTest)
    console.log(inventoryState)
        
    }, []);


    console.log(inventoryState)

    const beforeMount = () => {
        API.getuser("jshsandberg").then(res => {

            const inventoryArr = []
       
            for (let i = 0; i < res.data[0].inventory.length; i++){
                API.getInventory(res.data[0].inventory[i])
                .then(res => {
                    inventoryArr.push(res.data)
                    console.log(inventoryArr)
                 })
             }
            setInventoryStateTest(inventoryArr)
    })
}

    

  //console.log(date.addDays(5).getMonth())
  //console.log(date.addDays(5).getDate())



  const updateInventory = (newItem, i) => {
    const newInv = [...inventoryState.inventory];
    newInv[i] = newItem;
    setInventoryState({inventory:newInv})
  }

    return (
        <>
            <div className="container" id="inventory-container">
                <Modal updateInventory={updateInventory} item={item} />
                <h1>Stock Inventory</h1>
                <table className="table table-striped" id="inventory-table">
                    <thead>
                        <tr>
                            <th scope="col" width="10%">#</th>
                            <th scope="col" width="45%">Item Name</th>
                            <th scope="col" width="15%">Date Added</th>
                            <th scope="col" width="10%">Quantity</th>
                            <th scope="col" width="10%">Update</th>
                            <th scope="col" width="10%">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryState.map((item, i) => {
                            console.log(item.name)
                            console.log(item.dateAdded)
                            console.log(item.quantity)
                            return (
                            <>
                                <tr>
                                    <th scope="row"></th>
                                        <td>{item.name}</td>
                                        <td>{item.dateAdded}</td>
                                        {item.quantity < 5 ? <td id="qty-col" style={{ backgroundColor: "#ff000052" }}>{item.quantity}</td> : <td id="qty-col">{item.quantity}</td>}
                                        <td>
                                            {/* <button
                                                key={i}
                                                type="button"
                                                className="btn btn-primary"
                                                data-toggle="modal"
                                                data-target="#exampleModal"
                                                onClick={() => setItem(({...item, i}))}
                                                >
                                            Update
                                            </button> */}
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

        {/* <Shipment
        shipment={inventoryState} >
        </Shipment> */}

        </>
    )
};

export default InventoryItems;
