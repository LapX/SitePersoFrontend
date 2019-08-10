import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";
import Dashboard from "../dashboard/Dashboard"

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar/>
            <HashRouter>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Dashboard' component={Dashboard}/>
            </HashRouter>
        </div>
    );
}

export default App;
