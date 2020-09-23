import React from "react";
import "./styles.css";
import Cards from "./Cards";
import Sdata from "./Sdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div>
      <h1 className="heading_style">
        Top 6 <FontAwesomeIcon icon={faApple} /> iPhones to buy this Holiday
      </h1>

      {Sdata.map(function pCard(val) {
        return (
          <Cards
            imgSrc={val.pImg}
            title={val.pTitle}
            model={val.pModel}
            link={val.pLink}
          />
        );
      })}
      <h5 className="footer"> Copyright 2020 | All Rights Reserved </h5>
    </div>
  );
}
