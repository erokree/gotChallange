import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CharacterCard from "./CharacterCard";
const Characters = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/characters")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="characters">
        {items.map((item) => (
          <CharacterCard
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            image={item.imageUrl}
            title={item.title}
            family={item.family}
          />
        ))}
      </div>
    );
  }
};

export default Characters;
