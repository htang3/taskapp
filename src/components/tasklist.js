import React, {Component} from 'react';

import axios from 'axios';
import Task from "./task"


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    this.state = {
        tasks: [],
        isEmpty: false
    }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/task/')
        .then(response => {
            console.log(response.data);
            this.setState({
                tasks: response.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    // .then(res=>res.data)
    // this.setState({
    //     tasks: this.state.tasks.filter(t=>t._id !== id)
    // })
    deleteTask(id) {
        axios.delete('http://localhost:4000/task/'+id)
        .then(response =>{
            this.setState(prevState =>{
                return {
                    tasks: prevState.tasks.filter(t=>t._id !==id)
                }
            }
            )
        })
    }
    editTask(id) {
        this.props.history.push(
             "/edit/"+id
        )
    }

    render(){
        let tasks = <p>Something went wrong</p>
        if (!this.state.isEmpty){
            tasks = this.state.tasks.map(ta => {
                console.log(ta)
                return (
                    <Task key={ta._id}
                          name={ta.name}
                           title={ta.title}
                           description={ta.description}
                           duration={ta.duration}
                           delete={()=>this.deleteTask(ta._id)}
                           edittask={()=>this.editTask(ta._id)}/>
                 )
            })
        }
        return(
            <div>
                <h2>Task List</h2>
                <div>
                    {tasks}
                </div>

            </div>
        )
    }
}
export default TaskList;