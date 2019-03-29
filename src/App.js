import React, { Component } from 'react';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }

  //https://www.youtube.com/watch?v=e_ZibOe77yo


  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    });
  }
  //ADD FUNCTION
  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }

  //DELETE FUNCTION
deleteItem(id){
  //copy current list of items
  const list =[...this.state.list];

  //filter out item being deleted
  const updateList = list.filter(item => item.id !== id);

  this.setState({list: updateList});
}


  render() {
    return (
      <div>
        <div>
          <h1 className="app-title">To Do List</h1>
        <br />
        <div className="container">

          <input className="task"
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button className="add"
            onClick={() => this.addItem()}
          >
            Add
        </button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="delete"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    x
              </button>
                </li>
              );
            })}
          </ul>
          </div>
        </div>
        </div>

    );
  }
}

export default App;
