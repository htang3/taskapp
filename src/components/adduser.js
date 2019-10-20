import React, {Component} from 'react';
import axios  from 'axios'
class AddUser extends Component {
     constructor(props){
        super(props)
        this.nameHandler=this.nameHandler.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
        this.state ={
            name: "",
        }
    }
     nameHandler(e) {
        this.setState({
            name: e.target.value
        })
    }
     onSubmit(e) {
        const user = {
            name:this.state.name,
            
     
        } 
       
        //
        console.log(user);
        axios.post('http://localhost:4000/user/adduser', user)
        .then(res => res.data)
        this.setState({
            name: ""
        }) 
    }
    render(){
        return(
            <div>
                <h2>Add User</h2>
                <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                             <label>Name</label>
                             <input type="text" 
                                required
                                className='form-control'
                                value= {this.state.name}
                                onChange={this.nameHandler}/>

                        </div>
                    <div className='form-group'>
                     <input className ="btn btn-secondary"type="submit" value="add user"/>
                    </div>
                   
                </form>
            </div>
        )
    }
}
export default AddUser;