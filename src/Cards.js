import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

function Cards(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgSrc} alt="iPhone" className="card_img" />
        <div className="cardInfo">
          <h3 className="card_title">
            <FontAwesomeIcon icon={faApple} /> {props.title}
          </h3>
          <h3>{props.model} </h3>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button>Buy Now </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Cards;
