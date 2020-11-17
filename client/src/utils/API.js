import axios from "axios";
import {inventory} from "./mockData";

export default {
  
  // Gets the book with the given id
  getuser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteuser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveuser: function(userData) {
    return axios.post("/api/user/signup", userData);
  },
  // Save Inventory to a user
  saveinventory: function(inventoryData) {
    return axios.post("/api/inventory", inventoryData)
  },
  getInventory: function(){
    return new Promise((resolve,reject)=> resolve(inventory))
  }
};
