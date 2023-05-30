import React from "react";
import "./Cards.css";
import { CardData } from "../../Data/Data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {CardData.map((card, id) => {
        return (
          <div key={id} className="parentContainer">
            <Card
              id={card.id}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
