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

const RestaurantCard =({resData})=>{
    const{
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        deliveryTime}
        =resData?.info;
    
    return(
        <div className="res-card" style={{backgroundColor:"#f3efefdd"}}>
            <img className="res-logo"  alt ="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
            cloudinaryImageId}
            >
            </img>
            <h3>{name}</h3>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating}</h5>
            <h5>{deliveryTime}minutes</h5>
            
        </div>
    )
}

const resList =  [{
                    "info": {
                      "id": "756769",
                      "name": "Seoul Burgers & Shakes",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/f50bac54-c5d5-4d60-afa3-c61e3aa8938c_756769.jpg",
                      "locality": "M H CHANDRAPPA",
                      "areaName": "Sanjay Nagar, New BEL Road",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Burger",
                        "Bubble Tea",
                        "Fast Food",
                        "Beverages",
                        "Juice and shake"
                      ],
                      "avgRating": 4.1
                    
                  }},{
                    "info": {
                      "id": "726204",
                      "name": "Blue Tokai Coffee Roasters",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/7a4a5ef1-88de-4cb6-bf40-67daa2de302f_726204.JPG",
                      "locality": "Sadhashiv Nagar",
                      "areaName": "Sadashiva Nagar",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Cafe",
                        "Coffee",
                        "Beverages"
                      ],
                      "avgRating": 4.5
                  }
                },
                  {
                    "info": {
                      "id": "12810",
                      "name": "A2B - Adyar Ananda Bhavan",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/7/c451c9d3-a539-42b8-9a3b-21d585c7fe6d_12810.JPG",
                      "locality": "RT Nagar",
                      "areaName": "Sanjay Nagar, New BEL Road",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Sweets",
                        "Chinese"
                      ],
                      "avgRating": 4.5,
                      
                    }
                  },
                  {
                    "info": {
                      "id": "435405",
                      "name": "Chaayos Chai+Snacks=Relax",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_435405.JPG",
                      "locality": "Cunningham Road",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages",
                        "Chaat",
                        "Bakery",
                        "Snacks",
                        "Street Food",
                        "healthy",
                        "Home Food",
                        "Maharashtrian",
                        "Italian",
                        "Desserts"
                      ],
                      "avgRating": 4.5
                    }
                  },
                  {
                    "info": {
                      "id": "70251",
                      "name": "Starbucks Coffee",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/4/1ccc3352-d135-4745-a0e9-e59153c0d275_70251.JPG",
                      "locality": "Sadashiva Nagar",
                      "areaName": "Sadashiva Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Bakery",
                        "Ice Cream"
                      ],
                      "avgRating": 4.1
                    }
                  },
                  {
                    "info": {
                      "id": "176071",
                      "name": "Brahmins' Thatte Idli",
                      "cloudinaryImageId": "pe1savupw5miak1g0ylt",
                      "locality": "Malleshwaram",
                      "areaName": "Malleshwaram",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.5,
                    }
                  },
                  {
                    "info": {
                      "id": "792479",
                      "name": "Suchali's Artisan Bakehouse",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/8cf4407f-279d-4d6b-85b9-cd416d5a8581_792479.JPG",
                      "locality": "Sadhashiv Nagar",
                      "areaName": "Malleshwaram",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3}},
                  {
                    "info": {
                      "id": "505720",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/a038f630-79e1-4c35-bb11-fb03f49e8e95_505720.JPG",
                      "locality": "Sanjay Nagar",
                      "areaName": "Sanjay Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.4
                    }},
                  {
                    "info": {
                      "id": "8032",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f448a87b-da49-4da4-9fa4-d9ed0436bbe8_8032.jpg",
                      "locality": "RMV 2nd Stage",
                      "areaName": "Sanjaynagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2
                    }
                  },
                  {
                    "info": {
                      "id": "711748",
                      "name": "Salad Days",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/14/141cb1fa-8517-4aea-a869-487f729596f2_711748.jpg",
                      "locality": "Sarvagna Nagar",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Salads",
                        "healthy",
                        "food",
                        "Snacks"
                      ],
                      "avgRating": 4.5,
                      "parentId": "796",
                      "avgRatingString": "4.5"
                  }},
                  {
                    "info": {
                      "id": "3433",
                      "name": "Nandhini Deluxe",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/d593c004-fb7d-453a-b7a7-d9df7a376d2b_3433.jpg",
                      "locality": "Coles Road",
                      "areaName": "Frazer Town",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Andhra",
                        "Biryani",
                        "North Indian"
                      ],
                      "avgRating": 4.2,
                      "parentId": "2451",
                      "avgRatingString": "4.2",
                    }
                   
                  }];
                  

const Body =()=>{
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
           {
            resList.map(restaurant=>
                (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>

                ))
           }
            
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


