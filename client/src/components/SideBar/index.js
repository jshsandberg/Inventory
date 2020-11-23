import React from "react";
import "./style.css";
import HomePageLogo from "./../../assets/homepagelogo.png";
import InventoryLogo from "./../../assets/inventorylogo.jpg";
import LogoutLogo from "./../../assets/logoutlogo.jpg";
import InventoryDealsLogo from "./../../assets/logo.png";
import { Link, useHistory, useParams } from "react-router-dom";

function SideBar(props) {

  let id = useParams()
  console.log(id.id)

  return (  
    <div className="sidenav">
      <ul>
          <li>
            <img src={InventoryDealsLogo} id="logo" alt="logo"></img>
          </li>
          <li>
            <Link to={"/inventory/user/" + id.id}>
            <i class="fa fa-th" aria-hidden="true"></i> Dashboard</Link>
          </li>
          <li>
            <Link to={"/inventory/user/form/" + id.id}>
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