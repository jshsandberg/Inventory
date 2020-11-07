import axios from "axios";

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
    return axios.post("/api/user", userData);
  }
};
