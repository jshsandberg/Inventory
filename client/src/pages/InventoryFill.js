import React from "react";
import NavBar from "../components/NavBar/index"
import InventoryForm from "../components/InventoryForm/index"
import SideBar from "../components/SideBar";

function InventoryFill() {

    return (
        <>
        <NavBar />
        <div className="container-fluid" id="inventory-page">
          <div className="row">
            <div className="col-2">
                <SideBar />
            </div>
            <div className="col-10">
              <InventoryForm></InventoryForm>
            </div>
          </div>
        </div>  
        </>

    )
};

export default InventoryFill