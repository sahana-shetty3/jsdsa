import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    const [btnName,setBtnName]=useState("Login")
    console.log("header render")
    return(
        <div className="heading">
            <div className="logo-container">
                
                    <img  className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <button className="login"
                     onClick={()=>
                     { setBtnName("Logout")
                        
                     }
                     }>
                        {btnName}</button>
                </ul>
            </div>
        </div>

    )
}

export default Header;