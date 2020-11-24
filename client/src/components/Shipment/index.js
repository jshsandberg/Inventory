import React from "react"


function Shipment(props) {

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
                {props.shipment.map((info, i) => {
                    //console.log(info)
                  return (
                    <a className="list-group-item list-group-item-action" id={`list-${info.name}-list`} data-toggle="list" href={`#list-${info.name}`} role="tab" aria-controls={info.name}>{info.name}</a>
                  )
                })}
              </div>
            </div>
            <div style={{textAlign: "center"}} className="col-9">
              <div className="tab-content" id="nav-tabContent">
                {props.shipment.map((shipment, i) => {
                  //console.log(shipment)
                  return (
               
                      <div className="tab-pane fade show" id={`list-${shipment.name}`} role="tabpanel" aria-labelledby={`list-${shipment.name}-list`}>
                        <p>Last Bought: {shipment.dateAdded}</p>
                        {/* <p>Day Inventory will be Arriving: {findDate(shipment.cycle)}</p> */}
                        <p>Unit Price: ${shipment.cost}</p>
                        <p>Sale Price: ${shipment.value}</p>
                        <p>Units Sold: {shipment.sold}</p>
                        <p>Net Gain: ${((shipment.value) - (shipment.cost)) * (shipment.sold)}</p>
                        <p>Profit Margin: {(Math.floor(((shipment.value) - (shipment.cost)) / (shipment.sold) * 100))} %</p>
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