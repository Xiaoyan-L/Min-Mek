import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Router from "./components/Router";
import ShowMessage from './containers/ShowMessage';
import { connect } from 'react-redux';
import { getUnit } from './actions/unit';
import { withRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getUnit());
  }
  render() {
    return (
      <div className="App mt-3">
        <ShowMessage />
        <div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to='/' className="nav-link">
                Unit Info
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/mechs' className="nav-link">
                Mechs
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/pilots' className="nav-link">
                Pilots
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/org' className="nav-link">
                Organization
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-2 border pb-1">
          <Router />
        </div>
      </div>
    );
  }
}
//export default App;
export default withRouter(connect()(App));
