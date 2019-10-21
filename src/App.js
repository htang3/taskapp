import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from "./components/navbar";
import TaskList from "./components/tasklist";
import TaskListEdit from "./components/tasklistedit";
import TaskListCreate from "./components/tasklistcreate";
import AddUser from "./components/adduser";

function App() {
  return (
   
      <Router>
      {/* <div className="container"> */}
       
        <Navbar />
        <Switch>
          <Route path="/" exact component={TaskList}/>
          <Route path="/edit/:id" exact component={TaskListEdit}/>
          <Route path="/add" exact component={TaskListCreate}/>
          {/* <Route path="/user" exact component={AddUser}/> */}
          {/* </div> */}

        </Switch>
      
      </Router>
       
   
  );
}

export default App;
