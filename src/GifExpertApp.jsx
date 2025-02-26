import { useState } from "react"
import { GifGrid, AddCategory } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([])

  const onAddCategories = ( newCategory ) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return <>
    <h2>GifExpertApp</h2>
    <AddCategory 
      onNewCategory={ value => onAddCategories(value) }
    />
    { categories.map((category) => (
        <GifGrid 
          key={category} 
          category={category} />
      )) 
    }
    </>;
}