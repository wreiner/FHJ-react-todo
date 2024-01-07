import React, { useState, useEffect } from 'react';
import './TodoForm.css';

function TodoForm({list, listChanger, updateIdx, updateChanger}) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const onChangeValue = (e) => {
    setInput(e.target.value);
  };

  const validateInput = () => {
    if (input.length < 5) {
      setError('lalla5');
      return false;
    }
    return true;
  };

  const onAddItem = () => {
    if (input.trim() !== '') {
      if (!validateInput()) {
        return;
      }
      if (updateIdx !== null && updateIdx >= 0) {
        var array = [...list];
        array[updateIdx].todo = input;
        listChanger(array);
        updateChanger(-1);
      } else {
        let newTodo = { "todo": input, "done": false }
        listChanger((prevItems) => [...prevItems, newTodo]);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (updateIdx !== null && list.length > 0) {
      setInput(list[updateIdx].todo);
    }
  }, []);

  return (
    <>
      <div className="input-button-container">
          <input value={input} onChange={onChangeValue} placeholder='What do you need todo?' className='inputclass' />
          <button type="button" onClick={onAddItem} style={{ alignSelf: 'flex-start'}}>
            {updateIdx !== null ? "Update" : "Add"} Item
          </button>
      </div>
      <div className="error-container">
        {error && <p style={{ color: 'red', margin: '0'}}>{error}</p>}
      </div>
    </>
  );
}

export default TodoForm;