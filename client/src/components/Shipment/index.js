import React, { useState, useEffect } from "react"
import API from "../../utils/API"


function Shipment() {
    

    const [shipment, setShipment] = useState({ inventory: [] });

    useEffect(() => {
        API.getInventory()
          .then(data => setShipment(data))
      }, []);

    const findDate = (days) => {

        Date.prototype.addDays = function (days) {
          let date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
    
    
        }
        let date = new Date();
        let readableDate = date.addDays(days)
    
    
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


    return (
        <div>
                   <div className="container" id="inventory-container">
          <h1>Inventory Information</h1>
          <div className="row">
            <div className="col-3">
              <div className="list-group" id="list-tab" role="tablist">
                {shipment.inventory.map((info, i) => {
                    console.log(info)
                  return (
                    <a className="list-group-item list-group-item-action" id={`list-${info.item}-list`} data-toggle="list" href={`#list-${info.item}`} role="tab" aria-controls={info.item}>{info.item}</a>
                  )
                })}
              </div>
            </div>
            <div style={{textAlign: "center"}} className="col-9">
              <div className="tab-content" id="nav-tabContent">
                {shipment.inventory.map((shipment, i) => {
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

                })}

              </div>
            </div>
          </div>
        </div>
    </div>
    )
};

export default Shipment