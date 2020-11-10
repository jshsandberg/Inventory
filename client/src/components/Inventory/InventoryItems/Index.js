import React, { useEffect, useState } from "react";
import GaugeChart from 'react-gauge-chart';

//API methods
import API from "../../../utils/API";

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

  //object, array destructuring, rest and spread op, ternary, template literal, object, literal, OOP, classes, inheritance, scope, async, closure, data algo...


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

  //console.log(props)

  const findDate = (days) => {

    Date.prototype.addDays = function (days) {
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



  Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;


  }
  let date = new Date();


  console.log(date.addDays(5).getMonth())
  console.log(date.addDays(5).getDate())



  const updateInventory = (newItem, i) => {
    const newInv = [...inventoryState.inventory];
    newInv[i] = newItem;
    setInventoryState({inventory:newInv})
  }




  return (
    // modal component

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
            return (<>
              <tr>
                <th scope="row"></th>
                <td>{item.item}</td>
                <td>{item.dateAdded}</td>
                {item.quantity < 5 ? <td style={{ backgroundColor: "red" }}>{item.quantity}</td> : <td>{item.quantity}</td>}
                <td><button
                  //value={item} 
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => setItem(({...item, i}))}
                >
                  Update
                            </button></td>
                <td><button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: "red" }}
                >
                  Delete
                            </button></td>
               
              </tr>
            </>)


          })}
        </tbody>
      </table>

      <div>
        <div className="container">
          <h1>Inventory Information</h1>
          <div className="row">
            <div className="col-3">
              <div className="list-group" id="list-tab" role="tablist">
                {/* {inventoryState.inventory.map(info => {
                  return (
                    <a className="list-group-item list-group-item-action" id={`list-${info.item}-list`} data-toggle="list" href={`#list-${info.item}`} role="tab" aria-controls={info.item}>{info.item}</a>
                  )
                })} */}
              </div>
            </div>
            <div className="col-4">
              <div className="tab-content" id="nav-tabContent">
                {/* {inventoryState.inventory.map(shipment => {
                  return (
                    <div className="tab-pane fade show" id={`list-${shipment.item}`} role="tabpanel" aria-labelledby={`list-${shipment.item}-list`}>
                      <p>Last Bought: {shipment.dateAdded}</p>
                      <p>Day Inventory will be Arriving: {findDate(shipment.cycle[1].every)}</p>
                      <p>Unit Price: {shipment.sale.unitPrice}</p>
                      <p>Sale Price: {shipment.sale.salePrice}</p>
                      <p>Units Sold: {shipment.sale.unitsSold}</p>
                      <p>Net Gain: {((shipment.sale.salePrice) - (shipment.sale.unitPrice)) * (shipment.sale.unitsSold)}</p>
                      <p>Profit Margin: {(Math.floor(((shipment.sale.salePrice) - (shipment.sale.unitPrice)) / (shipment.sale.unitsSold) * 100))} %</p>
                    </div>
                  )
                })} */}

              </div>
            </div>
            <div className="col-4">
              {/* {inventoryState.inventory.map(profit => {
                console.log((Math.floor(((profit.sale.salePrice) - (profit.sale.unitPrice)) / (profit.sale.unitsSold))))
                return (
                  <GaugeChart id="garge-chart1"
                    nrOfLevels={20}
                    percent={
                      (Math.floor(((profit.sale.salePrice) - (profit.sale.unitPrice)) / (profit.sale.unitsSold)))
                    }
                  />
                )
              })} */}

            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default InventoryItems