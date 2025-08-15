
import { User } from './Ex12.js';


const user1 = new User("Nandini");


console.log("User Name:", user1.getName());
document.getElementById("username").textContent = "User Name: " + user1.getName();
