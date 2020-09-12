import React, { useState } from "react";
import RecipeDetails from "./recipeDetail";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div
      className="card input-filed red lighten-2 "
      style={{
        margin: "210px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
