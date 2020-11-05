import React, { useEffect, useState } from "react";
import "./style.css"


function InventoryItems(props) {

  const [newItem, setNewItem] = useState({})
  const [newName, setNewName] = useState();
  const [newDate, setNewDate] = useState();
  const [newSize, setNewSize] = useState();
  const [modal, setModal] = useState();
  const [inventoryState, setInventoryState] = useState({...props});

//console.log(props)


  const handleInputChange = event => {
    console.log(event.target.value)
    //setInput(event.target.value)
  }

  const updateInventory = () => {
    setNewItem({
      item: newName,
      dateAdded: newDate,
      quantity: newSize,
    })

    console.log(newItem)
    

    console.log(inventoryState)

  }
    
    //console.log(props.Inventory.inventory[0].quantity)

    

    useEffect(() => {
      inventoryState.inventory.push(newItem)
    },[newItem]); 

   
    const alterInventory = (item) => {
     //console.log(item)
     setModal(item)
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
  {inventoryState.inventory.map(item => {
          return (<>
                    <tr>
                        <th scope="row"></th>
                            <td>{item.item}</td>
                            <td>{item.dateAdded}</td>
                            <td>{item.quantity}</td>
                            <button 
                            //value={item} 
                            type="button" 
                            className="btn btn-primary" 
                            data-toggle="modal" 
                            data-target="#exampleModal" 
                            onClick={(e) => {alterInventory(item)}}>
                              Alter
                            </button>
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


        
        
        </div>
    )
};

export default InventoryItems