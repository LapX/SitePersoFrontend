import React from 'react';
import ReactDOM from 'react-dom';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import EarningsGraph from "./EarningsGraph";

const theme = createMuiTheme({});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EarningsGraph theme={theme}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
