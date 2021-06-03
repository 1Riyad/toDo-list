import React, { Component } from 'react'
import './ToDo.css';

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            List: this.props.allList,
            newToDo: this.props.newToDo,
            isEditing:false
        }

    }
    componentDidUpdate(){
        // console.log(this.state.newToDo)
        this.state.List=this.state.List;
        this.state.newToDo=this.state.newToDo;
        this.handleFormSubmit(); 
    }
    editToDo(event){
        // event.preventDefault()
        // console.log(event)

        let List = this.state.List
        List[event] = this.state.newToDo
        this.setState({
            isEditing:!this.state.isEditing,
            List
        })   
    }
    handleChange(event){
        console.log(event.target.value)
        this.setState({
            newToDo: event.target.value
        })
    }
    handleFormSubmit(){
            localStorage.setItem('deletetdItem', this.state.deletetdItem);
            this.state.deletetdItem=null;
      };

    render() {
        return (
            <span>
                <span className="TodoInfo">
                {/* {this.props.value} */}
                {this.state.isEditing ?
                    // <input></input>
                    <form action="" onSubmit={(event) => this.editToDo(event)} className="row">
                    <div className="input-group mb-3 col-3">
                        <input id="newToDo" type="text" value={this.state.newToDo}  onChange={(event) => this.handleChange(event)} className="col-3"style={{width:"555px"}} />
                        <input type="submit" value="Confirm" className=" btnModify"/>
                    </div>
                </form>
                    : <div style=  {{fontWeight: "bold", color:"#19575e"}}>
                        {this.props.value} 
                    </div>
                }
                </span>
                <button className="btnModify Edit"onClick={() => this.editToDo(this.props.index)}> Edit </button>
            </span>
        )
    }
}
// onClick={() => this.props.setChanged(this.props.index)}

{/* <form>
    <div className="form-group">
        <label htmlFor="formControlRange">Example Range input</label>
        <input type="range" className="form-control-range" id="formControlRange"></input>
    </div>
</form> */}

 {/* <button className="btn btn-danger margin-left margin-bottom" onClick={() => this.removeToDo(this.props.index)}> Delete </button> */}
