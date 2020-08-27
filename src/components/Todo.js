import React,{Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.todos)
    return this.props.todos.map((todo)=>(
    <Todoitem key={todo.id} todo = {todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

 Todo.propTypes ={
     todos:PropTypes.array.isRequired,
     markComplete:PropTypes.func.isRequired,
     delTodo:PropTypes.func.isRequired,
     //todos:PropTypes.array.isRequired
 }
export default Todo;
