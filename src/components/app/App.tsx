import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from "../home/Home";
import Navbar from "../navbar/Navbar";
import Dashboard from "../dashboard/Dashboard"
import LightingControl from "../lightingcontrol/LightingControl"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    palette: {
        primary: {main: '#FFFFFF'},
        secondary: {main: '#0078ff'},
    },
    typography: {
        fontFamily: 'arial',
        fontSize: 18,
    },
});

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar theme={theme}/>
            <HashRouter>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Dashboard' component={() => <Dashboard theme={theme}/>}/>
                <Route exact path='/LightingControl' component={() => <LightingControl theme={theme}/>}/>
            </HashRouter>
        </div>
    );
}

export default App;
