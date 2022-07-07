import React from "react";
const CharacterCard = (props) => {
  return (
    <div className="characterCard">
      <img src={props.image} alt="characterImg" srcSet="" className="characterImage" />
      <h2 className="characterName">
        {props.firstName} {props.lastName}
      </h2>
      <h2 className="characterDetails">
        TITLE:{props.title} <br />
        FAMILY:{props.family}
      </h2>
    </div>
  );
};

export default CharacterCard;
