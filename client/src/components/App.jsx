import React from 'react';
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomeLogin from './HomePages/HomeLogin.jsx';
import About from './HomePages/About.jsx';
import Tutorial from './HomePages/Tutorial.jsx';
import Navbar from './HeaderComponent/Navbar.jsx'; 

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route name="login" exact path="/" component={HomeLogin} />
          <Route name="about" exact path="/About" component={About} />
          <Route name="tutorial" exact path="/Tutorial" component={Tutorial} />
        </div>  
      </Router>
    )
  }
}

export default App;
