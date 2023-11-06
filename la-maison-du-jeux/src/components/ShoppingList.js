import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/ShoppingList.css";
import Categories from "./Categories";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

// Configurez la bibliothèque Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCartPlus);

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }
 

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(
          ({ id, cover, name, description, condition, price, category }) =>
            !activeCategory || activeCategory === category ? (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  condition={condition}
                  description={description}
                  price={price}
                />
                <span
                  className="lmj-shopping-cart-plus"
                  onClick={() => addToCart(name, price)}
                >
                  <FontAwesomeIcon icon="fa-solid fa-cart-plus" size="xl" />
                </span>
              </div>
            ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
