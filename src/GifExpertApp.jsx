import { useState } from "react"
import AddCategory from "./components/AddCategory"

const GifExpertApp = () => {

    const [categories, setCategories] = useState()


  return (
    <div>
        {/* Titulo */}
      <h1>Gif</h1>

      {/* Input */}
    <AddCategory />
      {/* Listado de gift */}
            {/* Gif item */}
    </div>
  )
}

export default GifExpertApp
