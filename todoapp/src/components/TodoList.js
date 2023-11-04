import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            list: [],
        };
    }


    render() {
        return (
          <div>
            <ul>
              {this.state.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        );
      }
}

export default TodoList;
