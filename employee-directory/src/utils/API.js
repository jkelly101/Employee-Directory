import axios from "axios";

const API =  {
  // Gets all users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=10");
  }
};
export default API