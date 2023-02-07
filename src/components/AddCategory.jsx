import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmitValue = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value.length < 1) return;

    onNewCategory(value);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmitValue}>
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
        //   onChange={event => onInputChange(event)} I send the first prop I can do it like the one on top
      />
    </form>
  );
};
