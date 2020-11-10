import React from "react";
import Inventory from "../components/Inventory/Inventory"
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function InventoryPage() {
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-9">
          <Inventory></Inventory>
        </div>
      </div>
    </div>  
  );
}

export default InventoryPage;