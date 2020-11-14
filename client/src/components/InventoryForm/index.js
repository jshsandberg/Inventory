import React, { useState } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom"
import "./style.css"

function InventoryForm() {

    const [inventoryObject, setInventoryObject] = useState({});
    const [isSuccessful, setIsSuccessful] = useState(false);


    const sectionStyle = {
        paddingBottom: "30px",
        textAlign: "center"
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(value)
        setInventoryObject({...inventoryObject, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(inventoryObject)
        API.saveinventory({
            name: inventoryObject.name,
            dateAdded: inventoryObject.date,
            quantity:  inventoryObject.amount + " " + inventoryObject.unit,
            cycle: inventoryObject.cycle,
            cost: inventoryObject.cost,
            value: inventoryObject.value,
            sold: inventoryObject.sold
        }).then(res => {
            //console.log(res)
           res.status === 200 ? setIsSuccessful(true) : console.log("it didnt work")    
            // How to remove inputs without reloading
            //window.location.reload()
        })
          .catch(err => console.log(err))

          console.log(isSuccessful)
    }

    
    return (
        <div className="container">
            {isSuccessful === false ?  <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Item Name</label>
                    <input onChange={handleInputChange} name="name" type="text" class="form-control" id="form" aria-describedby="emailHelp" placeholder="Enter item name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Date Added</label>
                    <input onChange={handleInputChange} name="date" type="text" class="form-control" id="form" placeholder="##/##/####" />
                </div>
                <div className="form-row unit">
                    <div class="form-group col-md">
                        <label for="inputState">Unit of Measurement</label>
                        <select onChange={handleInputChange} name="unit" id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>Gallons</option>
                            <option>Pounds</option>
                            <option>Units</option>
                            <option>Liters</option>
                        </select>
                    </div>
                    <div class="form-group col-md">
                        <label for="exampleInputPassword1">Amount</label>
                        <input onChange={handleInputChange} name="amount" type="text" class="form-control" id="form" placeholder="Amount of unit" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Recurring Shipment of Item Every --- Days</label>
                    <input onChange={handleInputChange} name="cycle" type="text" class="form-control" id="form" placeholder="Number of Days" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Cost per Unit</label>
                    <input onChange={handleInputChange} name="cost" type="text" class="form-control" id="form" placeholder="$" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Selling Value of Unit</label>
                    <input onChange={handleInputChange} name="value" type="text" class="form-control" id="form" placeholder="$" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Units Sold</label>
                    <input onChange={handleInputChange} name="sold" type="text" class="form-control" id="form" placeholder="Number of units sold" />
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <br></br>
                <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
            </form>
            :
            <div className="row">
                <div className="col-2">
                   
                </div> 
                <div className="col-8">
                    <div className="shadow container">
                        <h1 style={ sectionStyle }>Your inventory has been updated and saved!</h1>
                        <div className="row">
                            <div className="col-3">

                            </div>
                            <div className="col-3">
                            <button style={{float: "left"}} onClick={(e) => setIsSuccessful(false)}>More</button>

                            </div>
                            <div className="col-3">
                                <Link to="/inventory"><button  style={{float: "right"}}>Home</button></Link>
                               

                            </div>
                            <div className="col-3">

                            </div>

                        </div>
                    </div>
                </div> 
                <div className="col-2">
                   
                </div> 
            
            </div>
            }
           
        </div>
    )
};

export default InventoryForm