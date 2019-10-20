import React, {Component} from 'react';

import axios from 'axios'
class TaskListEdit extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: "",
            title: "",
            description:"",
            duration: 0,
            users: [],
            submitted: false
        }
    }
    //call this lifecycle before anything display
    componentDidMount() {
        axios.get("http://localhost:4000/task/"+this.props.match.params.id)
        .then(response =>{
            console.log(response.date)
            this.setState({
                    name: response.data.name,
                    title: response.data.title,
                    description: response.data.description,
                    duration: response.data.duration,
            })

            }
        ) 
        .catch((err)=>console.log(err))
        // axios.get("http://localhost:4000/user")
        // .then(response => {
        //     if (response.data.length>0){
        //         this.setState({
        //             users: response.data.map(user => user.name),                
        //         })
                
        //     }
        // })
    }
    nameHandler(e) {
        this.setState({
            name: e.target.value
        })
    }
    titleHandler(e) {
        this.setState({
            title: e.target.value
        })
    }
    descriptionHandler(e) {
        this.setState({
            description: e.target.value
        })
    }
    durationHandler(e){
        this.setState({
            duration: e.target.value
        })
    }
    onSubmit(e) {
        const task = {
            name:this.state.name,
             title:this.state.title,
             description:this.state.description,
             duration:this.state.duration
        } 
        //
        if(this.state.name===""||this.state.title===""||this.state.decription===""||this.state.duration<1){
            alert("Duration > 0 and all field must be filled");
            this.props.history.push("/add")
        }
        else {
         axios.post('http://localhost:4000/task/update/'+this.props.match.params.id, task)
        .then(res => console.log(res.data))
        this.setState({
            submitted: true
        })
        this.props.history.push("/")
        }
    }
    render(){
        return(
            <div>
                <h2>Update Task</h2>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        {/* <label>Name</label> */}
                        {/* <select className='form-control' ref="firstnameInput" value={this.state.name}
                            onChange={this.nameHandler} required>
                            {
                                this.state.users.map((user)=>{
                                    return <option key={user} value={user}>
                                        {user}
                                    </option>
                                })
                            }
                        </select> */}
                          <div className='form-group'>
                             <label>Assignee Name</label>
                             <input type="text" 
                                className='form-control'
                                value= {this.state.name}
                                onChange={this.nameHandler.bind(this)}/>

                        </div>
                        <div className='form-group'>
                             <label>Task Title</label>
                             <input type="text" 
                                className='form-control'
                                value= {this.state.title}
                                onChange={this.titleHandler.bind(this)}/>

                        </div>
                        <div className='form-group'>
                             <label>Task Description</label>
                             <input type="text" 
                                className='form-control'
                                value= {this.state.description}
                                onChange={this.descriptionHandler.bind(this)}/>

                        </div>
                        <div className='form-group'>
                             <label>Hour</label>
                             <input type="tet" 
                                className='form-control'
                                value= {this.state.duration}
                                onChange={this.durationHandler.bind(this)}/>

                        </div>
                    </div>
                    <button className ="btn btn-secondary"type="submit" value="add task">Update Task</button>

                </form>

                
            </div>
        )
    }
}
export default TaskListEdit;