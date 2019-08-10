import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from "./Dashboard";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard theme={theme}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
