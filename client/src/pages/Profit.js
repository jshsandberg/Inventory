import React from "react";
import Profit from "../components/Profits/Profits"
import NavBar from "../components/NavBar/index"
import SideBar from "../components/SideBar";

function ProfitPage() {
    return (
        <>
            <NavBar />
            <div className="container-fluid" id="inventory-page">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Profit />
        </div>
      </div>
    </div>  
        </>
    )
}

export default ProfitPage