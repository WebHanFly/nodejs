import React from 'react';
import {Icon,Input} from 'antd';
import style from '../css/style.scss';
import {
    HashRouter  as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './home';
import Artical from './artical';
import Manage from './manage';

class App extends React.Component{
    render(){
        return(
            <Router>
            <div>
              <Switch>
                <Route path="/artical">
                  <Artical />
                </Route>
                <Route path="/manage">
                  <Manage />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        )
    }
}


export default App;