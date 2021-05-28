/**  
 * @author: AlexanderCD
 * @description: Pokédex Objecto
 * @date: 27/05/2021
**/ 
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export default axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  headers: {
    
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    /*"Authorization": process.env.REACT_APP_TOKEN_FINBE*/
  }
});
