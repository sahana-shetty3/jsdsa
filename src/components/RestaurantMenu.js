import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=333800&submitAction=ENTER"
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (err) {
      console.error("Error fetching menu", err);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const resCard = resInfo?.cards?.find((card) => card?.card?.card?.info);

  const { name, cuisines, costForTwoMessage, avgRating, areaName } =
    resCard?.card?.card?.info || {};

  const menuCard = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  );

  // Path: data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
  const categoryCards =
    menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards = categoryCards[2]?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        <strong>Rating:</strong>⭐{avgRating}
      </p>
      <p>
        <strong>Cuisines:</strong> {cuisines?.join(", ")}
      </p>
      <p>
        <strong>Location:</strong> {areaName}
      </p>
      <p>
        <strong>Cost for two:</strong> {costForTwoMessage}
      </p>

      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}-{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;