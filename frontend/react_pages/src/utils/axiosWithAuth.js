import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  
  return axios.create({
    //update base url to server url
    baseURL: "https://africanmarketplaceunit4.herokuapp.com",
    headers: { Authorization: token }
  
  })
}


export default axiosWithAuth;