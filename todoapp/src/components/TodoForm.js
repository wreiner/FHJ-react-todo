import React, { useState, useEffect } from 'react';

function TodoForm({list, listChanger, updateIdx, updateChanger}) {
  const [input, setInput] = useState('');

  const onChangeValue = (e) => {
    setInput(e.target.value);
  };

  const onAddItem = () => {
    if (input.trim() !== '') {
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
    <div>
      <form>
        <input value={input} onChange={onChangeValue} placeholder='What do you need todo?' />
        <button type="button" onClick={onAddItem}>
          {updateIdx !== null ? "Update" : "Add"} Item
        </button>
      </form>
    </div>
  );
}

export default TodoForm;