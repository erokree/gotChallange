import React from "react";

const CharacterCard = (props) => {
  return (
    <div className="characterCard">
        <img src={props.image} alt="" srcset="" className="characterImage" />
        <h2 className="characterName">{props.firstName} {props.lastName}</h2>
        <h2 className="characterTitle">TITLE:{props.title}</h2>
        <h2 className="characterFamily">FAMILY:{props.family}</h2>
    </div>
  );
};

export default CharacterCard;
