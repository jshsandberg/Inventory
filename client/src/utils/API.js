import axios from "axios";
import {inventory} from "./mockData";

export default {
  
  // Gets the book with the given id
  getuser: function(username) {
    return axios.get("/api/user/" + username);
  },
  // Deletes the user with the given id
  deleteuser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  confirmuser: function(userInfo) {
    return axios.post("/api/user/login", userInfo)
  },
  // Saves a user to the database
  saveuser: function(userData) {
    return axios.post("/api/user/register", userData);
  },
  // Save Inventory to a user
  saveinventory: function(inventoryData) {
    console.log("axios: " + inventoryData)
    return axios.post("/api/inventory", inventoryData)
  },
  getInventory: function(){
    return new Promise((resolve,reject)=> resolve(inventory))
  }
};
