import { CDN_URL } from "../utils/constants";

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
            src={CDN_URL+
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
export  default RestaurantCard;