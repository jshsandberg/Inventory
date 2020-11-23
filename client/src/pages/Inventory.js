import React from "react";
import Inventory from "../components/Inventory/Inventory"
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function InventoryPage() {

  
  return(
    <>
    <NavBar />
    <div className="container-fluid" id="inventory-page">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Inventory></Inventory>
        </div>
      </div>
    </div>  
    </>
  );
}

export default InventoryPage;