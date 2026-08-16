import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body =()=>{

    const [listOfRestaurant,setListOfRestaurant] =useState([]);

    useEffect(()=>{
        fetchData();

    },[])

    const fetchData =async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    if(listOfRestaurant.length===0){
        return <Shimmer/>
    }

   
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurant.filter((res)=>res.info.avgRating>4.2
                                                              );
                    console.log(listOfRestaurant);
                    setListOfRestaurant(filteredList);

                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
           {
            listOfRestaurant.map(restaurant=>
                (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>

                ))
           }
            
            </div>
        </div>
    )
}
export default Body;