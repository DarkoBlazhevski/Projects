import React from 'react';
import Todos from "./Todos";


class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: "but some milk"},
      {id: 2, content: "play mario kart"}
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
  }
  render() {
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
    );
  } 
}

export default App;