import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext";
import Shipment from "../Shipment/index"



//API methods
import API from "../../utils/API";

import "./style.css"
import { resolve } from "path";

const jwt = require('jsonwebtoken')



const Modal = (props) => {

  const {
    updateInventory,
    item,
  } = props;

  const [input, setInput] = useState({});

  const handleInputChange = ({target: {value,name}}) => {
    setInput({...input, [name]:value})
  }

  useEffect(()=> {
      setInput(item);
    }, [props]);

 const forceUpdate = () => {
     window.location.reload(); 
 }

  return (
    <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Choose what to update: {item.name}
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Unit Price: $ </p><input onChange={handleInputChange} name="cost" value={input.cost} placeholder={item.cost}></input>
                    <br></br>
                    <br></br>
                    <p>Shipment Dates: </p><input onChange={handleInputChange} name="dateAdded" value={input.dateAdded} placeholder={item.dateAdded}></input>
                    <br></br>
                    <br></br>
                    <p>In Stock: </p><input onChange={handleInputChange} name="quantity" value={input.quantity} placeholder={item.quantity}></input>
                </div>
                <div className="modal-footer">
                    <button onClick={forceUpdate} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick={() => updateInventory(input, item.i)} type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
  </div>
  )
}


function InventoryItems() {
  
	// const { user } = useContext(UserContext);
  const [item, setItem] = useState({})
  const [inventoryState, setInventoryState] = useState([]);


  useEffect(() => beforeMount(), []);


    const beforeMount = async () => {

        let token = localStorage.getItem("auth-token")

        const decoded = await jwt.verify(token, "secret");


        try {
            const newUser = await API.getUserbyId(decoded.id)
            
            const userInventory = newUser.data.inventory

            const inventoryArr = []

                for (let i = 0; i < userInventory.length; i++){
                    const inventoryItems = await API.getInventory(userInventory[i]);
                    console.log(inventoryItems.data)
                    if (inventoryItems.data != null) {
                        inventoryArr.push(inventoryItems.data)
                    }
                 
                }

                
                // for (let i = 0; i < inventoryArr.length; i++) {
                //     if (inventoryArr[i] === null) {
                //         inventoryArr.splice(i, 1)
                //     }
                // }

                console.log(inventoryArr)
                setInventoryState(inventoryArr)
        }
        
        catch (err) {
            console.log(err)
        }

    }

  const updateInventory = (newItem) => {
    API.updateInventory(newItem._id, newItem)
    .then(res => console.log(res))
  }

  const deleteInventory = async (id) => {
      const deleteInventory = await API.deleteInventory(id);
      window.location.reload();
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
                            <th scope="col" width="30%">Item Name</th>
                            <th scope="col" width="10%">Unit Price</th>
                            <th scope="col" width="10%">Date Added</th>
                            <th scope="col" width="10%">In Stock</th>
                            <th scope="col" width="10%">Update</th>
                            <th scope="col" width="10%">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryState.map((item, i) => {
                            return (
                            <>
                                <tr>
                                    <th scope="row"></th>
                                        <td>{item.name}</td>
                                        <td>$ {item.cost}</td>
                                        <td>{item.dateAdded}</td>
                                        {item.quantity < 5 ? <td id="qty-col" style={{ backgroundColor: "#ff000052" }}>{item.quantity}</td> : <td id="qty-col">{item.quantity}</td>}
                                        <td>
                                            <button
                                                key={i}
                                                type="button"
                                                className="btn btn-primary"
                                                data-toggle="modal"
                                                data-target="#exampleModal"
                                                onClick={() => setItem(({...item}))}
                                                >
                                            Update
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                style={{ backgroundColor: "red" }}
                                                onClick={() => {
                                                    //setItemId({...item}); 
                                                deleteInventory(item._id)}}
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
        shipment={inventoryState} >
        </Shipment>

        </>
    )
};

export default InventoryItems;
