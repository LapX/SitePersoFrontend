import React, {Component} from 'react';
import './Navbar.css';

const ghPagesRouting = '/SitePersoFrontend/#';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav id='navbar' className='navbar is-dark'>
                    <div className='navbar-brand'>
                        <p
                            role='button'
                            ref='burgerMenu'
                            className='navbar-burger'
                        >
                            <span aria-hidden='true'/>
                            <span aria-hidden='true'/>
                            <span aria-hidden='true'/>
                        </p>
                    </div>

                    <div id='navMenu' ref='navMenu' className='navbar-menu'>
                        <div className='navbar-start'>
                            <a className='navbar-item' href={ghPagesRouting + '/'}>
                                Home
                            </a>
                            <a className='navbar-item' href={ghPagesRouting + '/Dashboard'}>
                                Dashboard
                            </a>
                        </div>
                        <div className='navbar-end'>
                            <p className='navbar-item'>Tommy Montreuil</p>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
