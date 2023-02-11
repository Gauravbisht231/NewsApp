
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Footer from './components/Footer';

export default class App extends Component {
pagesize=30;
state={
  progress:0
}
setprogress=(progress)=>{
this.setState({progres: progress})
}
  render() {
    return (
      <div className='bg-dark text-white'>
      <div>
        <HashRouter>
          <Navbar />
          <LoadingBar
        color='green'
        height='10'
        progress={this.state.progress}
     
      />
          
          <Routes>
            <Route path="/" element={<News setprogress={this.setprogress}  key='general'  pagesize={this.pagesize} country="in" category="general" />}></Route>
            <Route path="/business" element={<News setprogress={this.setprogress}  key='business' pagesize={this.pagesize} country="in" category="business" />}></Route>
            <Route path="/entertainment" element={<News setprogress={this.setprogress}  key='entertainment' pagesize={this.pagesize} country="in" category="entertainment" />}></Route>
            <Route path="/health" element={<News setprogress={this.setprogress} key='health'  pagesize={this.pagesize} country="in" category="health" />}></Route>
            <Route path="/science" element={<News setprogress={this.setprogress} key='science'  pagesize={this.pagesize} country="in" category="science" />}></Route>
            <Route path="/sports" element={<News setprogress={this.setprogress}  key='sports' pagesize={this.pagesize} country="in" category="sports" />}></Route>
            <Route path="/technology" element={<News setprogress={this.setprogress}  key='technology' pagesize={this.pagesize} country="in" category="technology" />}></Route>
          </Routes>
         
        </HashRouter>
        <Footer/>
      </div>
      </div>
    )
  }
}

