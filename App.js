
import Login from './Login_components/Login';
import './App.css';
import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Signup from './Login_components/Sign-up';
import Forgot from './Login_components/forgotpassword';

function App()
{
  return(
    <div>
      <BrowserRouter> 
        <Switch>    
            <Route exact path="/">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
            <Route exact path="/forgot">
              <Forgot/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
