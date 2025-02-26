import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => { 
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newValue = inputValue.trim();
    if(newValue.length <= 1) return;

    // setCategories( categories =>  [inputValue, ...categories]);
    onNewCategory(newValue);
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text" 
        placeholder="Buscar gifs"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}/>
    </form>
  );
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}