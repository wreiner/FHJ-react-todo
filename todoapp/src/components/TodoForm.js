import React, { useState } from 'react';

function TodoForm({listChanger}) {
  const [input, setInput] = useState('');

  const onChangeValue = (e) => {
    setInput(e.target.value);
  };

  const onAddItem = () => {
    if (input.trim() !== '') {
      listChanger((prevItems) => [...prevItems, input]);
      setInput('');
    }
  };

  return (
    <div>
      <form>
        <input value={input} onChange={onChangeValue} />
        <button type="button" onClick={onAddItem}>
          Add Item
        </button>
      </form>
    </div>
  );
}

export default TodoForm;