import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavigationBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About Me/About';
import Home from './Components/Home/Home';
import NewsFeed from './Components/NewsFeed/NewsFeed';
import Video from './Assests/Video/Video';



class App extends Component {
  render() {
    return (
        <BrowserRouter >
        <div>
          <NavBar />
          <Switch>
            <Route path = "/" component = {Home} exact ></Route>
            <Route path = "/about" component = {About} exact></Route>
          </Switch>
          <NewsFeed  />
          <Video />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
