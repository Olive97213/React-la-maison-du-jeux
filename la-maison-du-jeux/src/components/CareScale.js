// import Sun from "../assets/sun.svg";
// import Disque from "../assets/disque.svg";
import "../styles/CareScale.css";

const quantityLabel = {
  1: "mauvais état",
  2: "moyen état",
  3: "bon état",
};

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType = (
    <span className="lmj-carescale-icon" alt="disque-icon">💿</span>
  );

  return (
    <div
      onClick={() =>
        alert(
          `Cet article est en ${quantityLabel[scaleValue]} ${
            careType === "etat" ? "état" : ""
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;

