import { useState, useEffect } from "react";
import "../styles/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

// Configurez la bibliothèque Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPlus, faMinus, faCartShopping);

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
    
  );
  

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);
  const handleIncrement = (name) => {
    const updatedCart = cart.map((item) => {
      if (item.name === name) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const handleDecrement = (name) => {
    const updatedCart = cart
      .map((item) => {
        if (item.name === name) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0); // Supprime les articles avec une quantité inférieure à 1
    updateCart(updatedCart);
  };

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
                <span className="lmj-cart-plus">
                  <FontAwesomeIcon icon="fa-solid fa-plus" onClick={() => handleIncrement(name)} />
                </span>
                <span className="lmj-cart-minus">
                  <FontAwesomeIcon icon="fa-solid fa-minus" onClick={() => handleDecrement(name)} />
                </span>
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="2xl" />
      </button>
    </div>
  );
}

export default Cart;
