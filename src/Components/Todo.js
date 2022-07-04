import React, { Component } from 'react'

class Todo extends Component {
    constructor(){
        super();
        this.state={
            tasks:[{task:"Check Mails",id:1},{task:"Read Articles",id:2},{task:"Complete HW",id:3}],
            currentTask:''
        }
         
    }
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            currentTask:e.target.value
        })
    }
    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currentTask,id:this.state.tasks.length+1}],
             currentTask:''
        })
    }

    handleDelete=(id)=>{
        let newArray=this.state.tasks.filter((taskObj)=>{
            return taskObj.id!=id;
        })
        this.setState({
            tasks:[...newArray],
            
        })
    }
  render() {
    return (
      <div className='App' >
        <h1>Manage you TODO List here</h1>
        <input type="text"  value={this.state.currentTask} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>ADD</button>
        <div>
        {
            this.state.tasks.map((taskObj)=>(
                //key is givig so this react will find it easy to indetify the changes.
                <div key={taskObj.id}>
                    <p>{taskObj.task}</p>
                    <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
                    
                </div>//()=> we have used arrow function to give the definition otherwise it will call directy without clicking on delete button

            ))
        }
        </div>
      </div>
    )
  }
}

export default Todo;
