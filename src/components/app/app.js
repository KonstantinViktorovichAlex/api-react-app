import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from '../header/header.jsx'
import Time from '../time/time.jsx'
import PageUsers from '../pages/pageUsers.jsx'
import PagePosts from '../pages/pagePosts.jsx'

import './app.css'

class App extends Component {
  
  render(){
   
    return (
      <BrowserRouter>
        <>
          <Header/>
            <div className = 'mainApp'>
              <Route path = '/' exact component = {PageUsers}  />
              <Route path = '/posts' component = {PagePosts}/>
              <Time/>
            </div>
        </>
      </BrowserRouter>
    );
  }
}
export default App;
