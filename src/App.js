import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import {UserContext} from './UserContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Output from './components/Output'
import Readfile from './components/Readfile'

function App() {
  const [file,setFile] = useState('')
  return (

        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">ReadFile</Link>
              </li>
              <li>
                <Link to="/output">See Text Without Comments</Link>
              </li>

            </ul>

            <hr />

            <Switch>
            <UserContext.Provider value={{file,setFile}}>
              <Route exact path="/">
                <Readfile />
              </Route>
              <Route path="/output">
                <Output />
              </Route>
              </UserContext.Provider>

            </Switch>

          </div>
        </Router>
      );
    }

export default App;
