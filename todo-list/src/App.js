import './App.css';
import React, { Component } from 'react'
import AllToDo from './AllToDo';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      List: [],
      newToDo:""

    }
}
componentDidMount() {
  this.setState({
    List: ["Understand", "Assert", "Act", "Explain", "Reflect"]
  })
}


clearList() {
  this.setState({
      List: [],
      newToDo: ""
  })
} 
handleChange(event) {
  this.setState({
      newToDo: event.target.value
  })
}
addToDo(event) {
  event.preventDefault()
  let List = this.state.List
  List.push(this.state.newToDo)
  this.setState({
      List,
      newToDo: ""
  })
}

  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-dark bg-dark">

        <header className="App-header">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                    <img  src="https://icons-for-free.com/iconfiles/png/512/done+exam+list+pencil+todo+icon-1320196901489830645.png" width="50px" height="50px" className="App-logo"></img>
          <div className="header-content">
            ToDo List
        </div>
        </header>
      </nav>
      {/* <br></br> */}
      <h1 style={{color:"rgb(60, 11, 109)"}}> ToDo List </h1>
      <form action="" onSubmit={(event) => this.addToDo(event)} className="row">
            <div className="input-group mb-3 col-3" style={{ margin:"15px auto"}}>
                <input id="newToDo" type="text" value={this.state.newToDo} onChange={(event) => this.handleChange(event)} className="col-3" style={{width:"295px",marginRight:"5px"}}/>
                <input type="submit" value="Add ToDo" className="btn btn-success" style={{marginRight:"140px"}}/>
            </div>
        </form>
        <span>
                <button className="btn btn-danger" style={{position:"absolute", margin:"-48px 130px"}} onClick={() => this.clearList()}>Clear List</button>

        </span>
        <br></br>
        <br></br>

      <AllToDo newToDo={this.state.newToDo} allList={this.state.List}></AllToDo>
    </div>
    )
  }
}
