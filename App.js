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
        <div className="res-card" style={{backgroundColor:"#f3efefdd"}}>
            <img className="res-logo"  alt ="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_,1600,h_640c_fill/e0vvulfbahjxjz6k4uwi"></img>
            <h3>Meghana foods</h3>
            <h4>Biriyani,South Indian</h4>
            <h4> 4.5 stars</h4>
            <h4> 35 mintues</h4>
        </div>
    )
}

const Body =()=>{
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
            <RestaurantCard/>
             <RestaurantCard/>
              <RestaurantCard/>
               <RestaurantCard/>
                <RestaurantCard/>
                 <RestaurantCard/>
                  <RestaurantCard/>
                   <RestaurantCard/>
                    <RestaurantCard/>
                     <RestaurantCard/>
                <RestaurantCard/>
                 <RestaurantCard/>
                  <RestaurantCard/>
                   <RestaurantCard/>
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


