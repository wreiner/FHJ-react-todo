import { MdDeleteForever } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList({list, listChanger}) {

  const [updateEntry, setUpdateEntry] = useState(-1);

  const onDelItem = (index) => {
    // https://stackoverflow.com/a/36326779
    var array = [...list];
    array.splice(index, 1);
    listChanger(array);
  };

  const onMarkDone = (index) => {
    // https://stackoverflow.com/a/36326779
    var array = [...list];
    array[index].done = true;
    listChanger(array);
  };

  const onEdit = (index) => {
    setUpdateEntry(index);
  };

  return (
    <div>
      <>
        {
          updateEntry >= 0
            ? (
              <TodoForm list={list} listChanger={listChanger} updateIdx={updateEntry} updateChanger={setUpdateEntry} />
            ) : (
              <p></p>
            )
        }
      </>
      <>
      {
        list?.length > 0
          ? (
            <ul>
            {list.map((item, idx) => (
              <li id={idx} key={idx}>
                <span onClick={() => onMarkDone(idx)}>{item.done ? <s>{item.todo}</s> : item.todo}</span>
                <MdEdit onClick={() => onEdit(idx)}/>
                <MdDeleteForever onClick={() => onDelItem(idx)}/>
              </li>
            ))}
            </ul>
          ) : (
            <p>No Todos added yet</p>
          )
      }
      </>
    </div>
  );
}

export default TodoList;
