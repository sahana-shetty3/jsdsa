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
export  default RestaurantCard;