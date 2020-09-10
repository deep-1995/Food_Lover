import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import ParticlesBg from "particles-bg";
const Ingrediant = () => {
  const APP_ID = "c7634025";
  const APP_KEY = "e84e75ebc855bd7f510b21a249eee3c6";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chiken");
  //   const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.taraget.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="row">
      <ParticlesBg type="thick" bg={true} />
      <div
        style={{
          margin: "30px auto",
          maxWidth: "500px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div
          className="card "
          onsubmit={getSearch}
          style={{
            margin: "30px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              value={search}
              onChange={updateSearch}
            />
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
          {/* <div class="card-action">
            <a class="waves-effect waves-light btn ">button</a>
          </div> */}
        </div>
      </div>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          Ingredients={recipe.recipe.Ingredients}
        />
      ))}
    </div>
  );
};
export default Ingrediant;
