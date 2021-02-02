import './App.css';
import { Component } from 'react';
import Authentication from './Components/Authentication'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class homePage extends Component {

  state = {
    email: "",
    password: ""
  }
  render() {
    return (
      <div className="main">{
        /*<Router>
          <Link to="Authentication">Login</Link>

          <Switch>
            <Route path="/Authentication">
              <Authentication />
            </Route>
          </Switch>
        </Router>*/}
         <Authentication />
      </div>
    )
  }
}

export default homePage;
