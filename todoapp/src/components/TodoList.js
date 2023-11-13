function TodoList({list, listChanger}) {

  const oonDelItem = (e) => {
    // https://stackoverflow.com/a/36326779
    var array = [...list];
    var index = e.target.id
    if (index !== -1) {
      array.splice(index, 1);
      listChanger(array);
    }
  };

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

  return (
    <div>
      <ul>
        {list.map((item, idx) => (
          <li id={idx} key={idx} onClick={() => onMarkDone(idx)}>{item.done ? <s>{item.todo}</s> : item.todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
