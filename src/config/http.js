
import axios from "axios";


const http = axios.create({
    baseURL: "http://localhost:3333",

  });
  export default http;




  //  json-server modelo.json --port=3333