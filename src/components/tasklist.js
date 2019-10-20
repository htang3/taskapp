import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    this.state = {
        tasks: []
    }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/task/')
        .then(response => {
            this.setState({
                tasks: response.data
            })
        })
        .console((err)=>{
            console.log(err);
        })
    }
    deleteTask(id) {
        axios.delete('http://localhost:4000/task/'+id)
        .then(res=>res.data)
        this.setState({
            tasks: this.state.tasks.filter(t=>t._id !== id)
        })
    }
    taskList(){
        return this.state.tasks.map(task =>{
            // return <Task key={task._id}
            //             task={task}
            //             deletetask = {this.deleteTask}/>
        })
    }
    render(){
        return(
            <div>
                Hello from add task list here
            </div>
        )
    }
}
export default TaskList;