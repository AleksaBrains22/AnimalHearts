import { useState } from "react";
import aligator from "./svg/aligator.webp";
import cat from "./svg/cat.png";
import cow from "./svg/cow.jfif";
import dog from "./svg/dog.jpg";
import hearth from "./svg/hearth.png";
import horse from "./svg/horse.jfif";
import bird from "./svg/bird.jfif";
import "./AnimalShow.css";
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  aligator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img className="heart" alt="heart" src={hearth} style={{ width: 10 + 10 * clicks + "px" }} />
    </div>
  );
}

export default AnimalShow;
