import React, {Component} from 'react';
import './App.css';
import Typical from 'react-typical'
import Background from './background.jpg'
import Home from './home'
import Shop from './shop'
import Lookbook from './lookbook'
import About from './about'
import Terms from './terms'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
    render() {

        return (

            <BrowserRouter>
                <div className="App">
                    <Route exact path='/' component={Home}/>
                    <Route path='/shop' component={Shop}/>
                    <Route path='/lookbook' component={Lookbook}/>
                    <Route path='/about' component={About}/>
                    <Route path='/terms' component={Terms}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
