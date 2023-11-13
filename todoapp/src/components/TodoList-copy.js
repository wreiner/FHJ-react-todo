function TodoList({list, listChanger}) {

  const onDeltem = (idx) => {
    var array = [...list]; // make a separate copy of the array
    var index = array.indexOf(idx)
    if (index !== -1) {
      array.splice(index, 1);
      listChanger({list: array});
    }
  };

  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item}>{item} <a onClick={onDeltem(item)}>delete</a></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


