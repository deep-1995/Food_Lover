import React from "react";

const Recipe = ({ title, calories, image, Ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="food image" />
      <ol>{Ingredients}</ol>
    </div>
  );
};

export default Recipe;
