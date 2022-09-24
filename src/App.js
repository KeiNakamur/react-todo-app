import React from 'react';
//ToDOListを作りたい
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //nameに入ったものをtodos配列に入れたい
      todos: [],
      name: ''
    }
  }
  onInputValueChanged = (event) => {
    const inputValue = event.target.value;
    this.setState(
      {
        name: inputValue
      });
  }
  addTodo = () => {
    const {todos, name} = this.state;
    this.setState({
      todos: [...todos, name]
    });
  }
  onDelete = (index) => {
    const {todos, name} = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]

    })
  }

  render(){
    const {todos} = this.state;
    return (
      <div>
        <input type="text" 
          onInput={this.onInputValueChanged}
        />
        <button onClick ={this.addTodo}>追加</button>
        <ul>
          {todos.map((todo, index) => <li key={index}>
            {todo}
            <button onClick={() => this.onDelete(index)}>削除</button>
          </li>)}
        </ul>
      </div>
    );
  }
};

export default App;