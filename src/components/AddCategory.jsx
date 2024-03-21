import React, { useState } from 'react'

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('')

  return (
  <input type="text" placeholder='Buscar Gifts' value={inputValue} />
  )
}

export default AddCategory
