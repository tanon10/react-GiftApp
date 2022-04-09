import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["One Punch Man", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch Man"]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "hunter"]);
  //   };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
