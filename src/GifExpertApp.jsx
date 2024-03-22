import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([ "One puch"]);

  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return; // esto lo que verifica si la categoria existe no hacer nada
    setCategories([onNewCategory, ...categories]);
  };

  return (
    <div>
      <h1>Gifts</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

export default GifExpertApp;
