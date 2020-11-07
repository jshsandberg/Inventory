import React, { useEffect, useState } from "react";
import "./style.css"


function InventoryItems(props) {

  const [newItem, setNewItem] = useState({})
  const [newName, setNewName] = useState();
  const [newDate, setNewDate] = useState();
  const [newSize, setNewSize] = useState();
  const [newPush, setNewPush] = useState({});
  const [inventoryState, setInventoryState] = useState({...props});

//console.log(props)

const findDate = (days) => {

Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;

  
  }
  let date = new Date();
  let readableDate = date.addDays(days)


  //console.log(readableDate)

  return <p>{`${readableDate.getMonth() + 1}/
  ${readableDate.getDate()}
  /20${readableDate.getYear() - 100} `}</p>
  
 
}

findDate()


  const handleInputChange = event => {
    console.log(event.target.value)
    //setInput(event.target.value)
  }

  const updateInventory = () => {
    const newItem = ({
      item: newName,
      dateAdded: newDate,
      quantity: newSize,
    })

    
    inventoryState.inventory.push(newItem)
    console.log(inventoryState)
    
    

  }
    


    

    useEffect(() => {
     
    },[inventoryState]); 

   

    return (
        <div className="container">
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
  {inventoryState.inventory.map(item => {
          return (<>
                    <tr>
                        <th scope="row"></th>
                            <td>{item.item}</td>
                            <td>{item.dateAdded}</td>
                            {item.quantity < 5 ? <td style={{backgroundColor: "red"}}>{item.quantity}</td> : <td>{item.quantity}</td>}
                            <td><button 
                            //value={item} 
                            type="button" 
                            className="btn btn-primary" 
                            data-toggle="modal" 
                            data-target="#exampleModal" 
                         
                            >
                              Update
                            </button></td>
                            <td><button
                            type="button"
                            className="btn btn-primary"
                            style={{backgroundColor:"red"}}
                            >
                              Delete
                            </button></td>
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

                                        {/* Dropdown Code */}
                                                    {/* <div class="dropdown">
                                                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Choose what to update:
                                                      </button>
                                                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#">Item Name</a>
                                                        <a class="dropdown-item" href="#">Date Added</a>
                                                        <a class="dropdown-item" href="#">Quantity</a>
                                                      </div>
                                                    </div> */}
                                        {/* Dropdown Code */}

                                                  
                                    </h5>
                                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <input onChange={e => setNewName(e.target.value)} name="name" placeholder={item.item}></input>
                                      <br></br>
                                      <br></br>
                                      <input onChange={e => setNewDate(e.target.value)} name="date" placeholder={item.dateAdded}></input>
                                      <br></br>
                                      <br></br>
                                      <input onChange={e => setNewSize(e.target.value)} name="size" placeholder={item.quantity}></input>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button onClick={updateInventory} type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                    </tr>
                 </>)

                 
      })}
  </tbody>
</table>

<div>
  <div className="container">
      <h1>Shipment Dates</h1>
      <div className="row">
  <div className="col-4">
    <div className="list-group" id="list-tab" role="tablist">
      {inventoryState.inventory.map(info => {
        return (
        <a className="list-group-item list-group-item-action" id={`list-${info.item}-list`} data-toggle="list" href={`#list-${info.item}`} role="tab" aria-controls={info.item}>{info.item}</a>
        )
      })}
    </div>
  </div>
  <div className="col-8">
  <div className="tab-content" id="nav-tabContent">
    {inventoryState.inventory.map(shipment => {
      console.log(shipment.cycle[1].every)
      return (
      <div className="tab-pane fade show" id={`list-${shipment.item}`} role="tabpanel" aria-labelledby={`list-${shipment.item}-list`}>
        <p>Last Bought: {shipment.dateAdded}</p>
        <p>Day Inventory will be Arriving: {findDate(shipment.cycle[1].every)}</p>
        <p>Cost Value: </p>
        <p>Sale Value: </p>
        <p>Net Gain: </p>
      </div>
      )
    })}
   
      {/* <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">hello</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div> */}
    </div>
  </div>
</div>
  </div>
</div>


        
        
        </div>
    )
};

export default InventoryItems