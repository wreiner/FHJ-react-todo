function TodoList({list, listChanger}) {

  const onDelItem = (e) => {
    // https://stackoverflow.com/a/36326779
    var array = [...list];
    var index = array.indexOf(e.target.innerText)
    if (index !== -1) {
      array.splice(index, 1);
      listChanger(array);
    }
  };

  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item} onClick={onDelItem}>{item} </li>
        ))}
      </ul>
    </div>
  );
}


export default TodoList;
