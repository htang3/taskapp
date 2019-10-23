import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from "./components/navbar";
import TaskList from "./components/tasklist";
import TaskListEdit from "./components/tasklistedit";
import TaskListCreate from "./components/tasklistcreate";
// import AddUser from "./components/adduser";

//auth
import Amplify from 'aws-amplify';
import config from './aws-exports';

import { withAuthenticator } from "aws-amplify-react";
Amplify.configure(config);
function App() {
  return (
   
      <Router>       
        <Navbar />
        <Switch>
          <Route path="/" exact component={TaskList}/>
          <Route path="/edit/:id" exact component={TaskListEdit}/>
          <Route path="/add" exact component={TaskListCreate}/>
        

        </Switch>
      
      </Router>
       
   
  );
}

export default withAuthenticator(App, true);
