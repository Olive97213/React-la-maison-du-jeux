import "../styles/Categories.css";
import { useState } from "react";

function Categories({ setActiveCategory, categories, activeCategory }) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div className="lmj-categories">
      <div
        className={`lmj-menu-burger ${isBurgerMenuOpen ? "active" : ""}`}
        onClick={toggleBurgerMenu}
      >
        <span></span>
      </div>
      <div className={`lmj-side-menu ${isBurgerMenuOpen ? "open" : ""}`}>
        <ul className="lmj-categories-list">
          <li>
            <button
              onClick={() => setActiveCategory("")}
              className={activeCategory === "" ? "active" : ""}
            >
              Tout afficher
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? "active" : ""}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
