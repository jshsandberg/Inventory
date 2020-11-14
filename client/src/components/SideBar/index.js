import React from "react";
import "./style.css";
import HomePageLogo from "./../../assets/homepagelogo.png";
import InventoryLogo from "./../../assets/inventorylogo.jpg";
import LogoutLogo from "./../../assets/logoutlogo.jpg";
import InventoryDealsLogo from "./../../assets/logo.jpeg";
import { Link } from "react-router-dom";
function SideBar(props) {

  return (


    <div className="sidenav">
      <ul>
        <li>
          <img src={InventoryDealsLogo} id="logo" alt="logo"></img>
        </li>
        <li>
          <Link to="/" id="dashboard"><img src={HomePageLogo} alt="" className="logo"></img>Dashboard</Link>
        </li>
        <li>
          <Link to="/portfolio"><img src={InventoryLogo} alt="" className="logo"></img>Inventory</Link>
        </li>
        <li>
          <Link to="/contact" id="logout"><img src={LogoutLogo} alt="" className="logo"></img>Logout</Link>
        </li>
      </ul>
    </div>

  );
}

export default SideBar;