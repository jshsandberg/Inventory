import React from "react";
import "./style.css";
function NavTab() {
  return (
    <nav class="navbar navbar-expand-lg ">
      <a class="nav-item nav-link " href="/">Dashboard</a>
      <a class="nav-item nav-link" href="/portfolio">Inventory</a>
      <a class="nav-item nav-link" href="/contact">Logout</a>
    </nav>
  );
}

export default NavTab;
