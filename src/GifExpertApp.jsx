import { useState } from "react"
import AddCategory from "./components/AddCategory"

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball', 'One puch'])

    const onAddCategory = (onNewCategory) =>{
     
  setCategories([onNewCategory, ...categories])
        }

  return (
    <div>
        {/* Titulo */}
      <h1>Gifts</h1>

      {/* Input */}
    <AddCategory 
    // setCategories={setCategories} 
    onNewCategory={event => onAddCategory(event)}
    />
      {/* Listado de gift */}
      <ol>
        {
            categories.map(category => {
                return <li key={category}>{category}</li>
            })
        }
      </ol>
            {/* Gif item */}
    </div>
  )
}

export default GifExpertApp
