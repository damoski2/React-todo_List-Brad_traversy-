import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todo from './components/Todo';
import Addtodo from './components/Addtodo';
import About from './components/Pages/About';
import './App.css';
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


class App extends React.Component {
//delete todo
delTodo=(id)=>{

  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res=>this.setState({todos:[...this.state.todos.filter
    (todo=>todo.id!==id)]}));
}

  //toggle complete
  markComplete=(id)=>{
   this.setState({todos:this.state.todos.map(todo=>{
     if(todo.id==id){
       todo.completed = !todo.completed
     }
     return todo;
   }) });
}

//Add todo 
addTodo=(title)=>{
  axios.post('https://jsonplaceholder.typicode.com/todos?',
  {
    title,
    completed:false
  })
  .then(res=>this.setState({todos:[...this.state.todos,res.data]}));
   
}
  state ={
    todos: 
    [
      
  ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?limit=10')
    .then(res=> this.setState({todos:res.data}))
  }

  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header />
           <Route exact path="/" render={props=>(
             <React.Fragment>
               <Addtodo addTodo={this.addTodo} />
               <Todo todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
             </React.Fragment>
           )} />
           <Route path="/about" component={About} />
          </div>   
        </div>
      </Router>
    );
  }
}

export default App;
