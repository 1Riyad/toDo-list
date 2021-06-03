import React, { Component } from 'react'
import Todo from './Todo';
import './ToDo.css';

export default class AllToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: this.props.allList,
            delted:null
        }
        this.removeToDo = this.removeToDo.bind(this)
        console.log(this)

    }
    componentDidMount() {
        this.setState({
            List: ["Understand", "Assert", "Act", "Explain", "Reflect"]
        })
    }

    componentDidUpdate(){
        this.state.List=this.props.allList;
    }
    removeToDo(index){
        console.log(index);
        console.log(this);

        let List = this.state.List
        List.splice(index,1)
        this.setState({
            List
        })
    }
    setChanged(index)
    {
        let List = this.state.List
        List.splice(index,1)
        this.setState({
            List
        })
    }

    render() {
        const items = this.state.List.map((value, index) => {
            return (
                <tbody  key={index.toString()} >
                <tr>
                  <th className="ide" scope="col">{index+1}</th>
                  <td> 
                      <Todo key={index.toString()} value={value} index={index} allList={this.state.List}></Todo>
                  </td>
                  <td> 
                      {/* <button className="btn btn-danger margin-left margin-bottom btnModify Delete" onClick={() => this.removeToDo(index)}> Delete </button> */}
                      <button className="btnModify Delete" onClick={() => this.removeToDo(index)}> Delete </button>
                  </td>
                  <td></td>
                </tr>
                </tbody>
            // <li className="list-group-item list-group-item-action list-group-item-warning" key={index}>

            //     <Todo value={value} index={index} allList={this.state.List} setChanged={this.setChanged}></Todo>
            //     <span>
            //     <button className="btn btn-danger margin-left margin-bottom" onClick={() => this.removeToDo(index)}> Delete </button>
            //     </span>
            // </li>
            )
        })
        return (
            <div className="AllToDo">

            <table className="">

                <thead className="">
                <tr>
                    <th scope="col">#</th>
                    <th className="TodoInfo" scope="col">ToDo</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <br></br>
            {items}

            </table>

            </div>
            // <div>
            //     <h1>To do List</h1>
            //     <ul className="list-group list-group-flush list-group-numbered">
            //         {items}
            //     </ul>
            // </div>
        )
    }
}


// Testing Commit with Mr. Abdullah