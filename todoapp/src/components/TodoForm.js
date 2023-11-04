import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        value: "",
        list: [],
    };
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAddItem = () => {
    console.log(`will add '${this.state.value}'`);

    this.setState(state => {
        const list = [...state.list, state.value];

      return {
        list,
        value: '',
      };
    });
  };

  render() {
    return (
      <div>
      <form>
        <input value={this.state.value} onChange={this.onChangeValue} />
        <button type="button" onClick={this.onAddItem}>Add Item</button>
      </form>
      </div>
    );
  }
}

export default TodoForm;
