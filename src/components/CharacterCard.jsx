import React from "react";

const CharacterCard = (props) => {
  return (
    <div>
        <img src={props.image} alt="" srcset="" className="characterImage" />
        <h2 className="characterName">{props.firstName} {props.lastName}</h2>
    </div>
  );
};

export default CharacterCard;
