import React, { Component } from 'react'
import Menu from './components/Menu'
import { HashRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Menu/>
                    <div className="mb-3"></div>
                    <Route path = "/" exact>
                        <Home/>
                    </Route>
                    <Route path = "/contact">
                        <Contact/>
                    </Route>
                    <Route path = "/about">
                        <About/>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default App
