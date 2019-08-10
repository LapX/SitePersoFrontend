import React, {Component} from 'react';
import './Home.css';

interface IState {
}

interface IProps {
}

export class Home extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        document.documentElement.classList.toggle('animatedBackground');
    }

    componentWillUnmount() {
        document.documentElement.classList.toggle('animatedBackground');
    }

    render() {
        return (
            <div id='welcomeText'
                 className='tile is-ancestor has-text-centered is-vertical'>
                <div className='tile is-parent '>
                    <article className='tile is-child'>
                        <p id='welcomeTitle' className='title'>Welcome</p>
                        <div className='content'>
                            lorem ipsum
                        </div>
                    </article>
                </div>
            </div>
        )
            ;
    }
}

export default Home;
