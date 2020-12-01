import React from "react";
import "./style.css";
import InventoryDealsLogo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

function SideBar() {


  return (  
    <div className="sidenav">
      <ul>
          <li id="logo-li">
            <img src={InventoryDealsLogo} id="logo" alt="logo"></img>
          </li>
          <li>
            <Link to={"/inventory/"}>
            <i class="fa fa-th" aria-hidden="true"></i> Dashboard</Link>
          </li>
          <li>
            <Link to={"/inventoryfill/"}>
            <i class="fa fa-plus" aria-hidden="true"></i> Add Inventory</Link>
          </li>
          <li>
            <p><i class="fa fa-truck" aria-hidden="true"></i> Shipments</p>
          </li>

          <li>
            <p><i class="fa fa-envelope" aria-hidden="true"></i> Invoices</p>
          </li>
          <li>
          <p><i class="fa fa-balance-scale" aria-hidden="true"></i> Profits &amp; Losses</p>

          </li>
          <li>
            <Link to="/" id="logout">
            <i class="fa fa-sign-out" aria-hidden="true"></i> Logout  </Link>
          </li>
      </ul>
    </div>
  );
}

export default SideBar;