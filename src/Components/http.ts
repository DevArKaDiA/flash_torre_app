import axios from "axios";

let corsProxy = 'https://cors-anywhere.herokuapp.com/';

const torreApi = axios.create({
    baseURL: corsProxy + 'https://bio.torre.co/api/',    
})


export default torreApi;