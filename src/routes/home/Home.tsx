import React, {Component} from 'react';
import './Home.css';

export class Home extends Component {
    componentDidMount() {
        document.documentElement.classList.toggle('animatedBackground');
    }

    componentWillUnmount() {
        document.documentElement.classList.toggle('animatedBackground');
    }

    render() {
        return (
            <div id='welcomeText' className='tile is-ancestor has-text-centered'>
                <div className='tile is-parent '>
                    <article className='tile is-child'>
                        <p id='welcomeTitle' className='title'>Bienvenue</p>
                        <div className='content'>
                            Ce site a été créé dans l'optique de présenter quelques projets
                            sur lesquels j'ai travaillé au fil des années.
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Home;
