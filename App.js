import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return(
        <div className="heading">
            <div className="logo-container">
                
                    <img  className="logo" src="https://png.pngtree.com/png-clipart/20220604/original/pngtree-restaurant-logo-png-image_7932128.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>

    )
}

const RestaurantCard =()=>{
    return(
        <div className="res-card">
            <h3>Meghana foods</h3>
        </div>
    )
}

const Body =()=>{
    return(
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
            <RestaurantCard/>
            </div>
        </div>
    )
}
const AppLayout =()=>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);


