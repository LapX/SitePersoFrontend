import React, {Component} from 'react';
import './Dashboard.css';

interface IState {
}

interface IProps {
}

export class Dashboard extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                Dashboard here
            </div>
        )
            ;
    }
}

export default Dashboard;
