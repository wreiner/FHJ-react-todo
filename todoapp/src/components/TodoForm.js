export default function TodoForm() {
    function addItem(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newItem = formData.get('newItem');
        console.log(`will add '${newItem}'`);
      }

    return (
      <form onSubmit={addItem}>
        <input name="newItem" />
        <button type="submit">Add Item</button>
      </form>
    );
  }
