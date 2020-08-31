// .......... React Router Assignment
import React from 'react';
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Events from './Events'
import Contact from './Contact'
import Quicklink from './Quicklink'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/events' component={Events} />
                <Route path='/contact' component={Contact} />
                <Route path='/quicklink' component={Quicklink} />
            </BrowserRouter>
        </div>
    )
}

export default App