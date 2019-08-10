import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from "../../routes/home/Home";

const App: React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Route exact path='/' component={Home}/>
                <Route path='/Home' component={Home}/>
            </HashRouter>
        </div>
    );
}

export default App;
