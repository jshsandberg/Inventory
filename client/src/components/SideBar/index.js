import React from "react";
import "./style.css";
import HomePageLogo from "./../../assets/homepagelogo.png";
import InventoryLogo from "./../../assets/inventorylogo.jpg";
import LogoutLogo from "./../../assets/logoutlogo.jpg";
import InventoryDealsLogo from "./../../assets/logo.jpeg";
function SideBar(props) {

  return (


    <div className="sidenav">
      <ul>
        <li>
          <img src={InventoryDealsLogo} id="logo"></img>
        </li>
        <li>
          <a href="/" id="dashboard"><img src={HomePageLogo} className="logo"></img>Dashboard</a>
        </li>
        <li>
          <a href="/portfolio"><img src={InventoryLogo} className="logo"></img>Inventory</a>
        </li>
        <li>
          <a href="/contact" id="logout"><img src={LogoutLogo} className="logo"></img>Logout</a>
        </li>
      </ul>
    </div>

  );
}

export default SideBar;