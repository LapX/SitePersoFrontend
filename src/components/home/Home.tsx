import React, {Component} from 'react';
import './Home.css';
import {getUser} from "../../utils/Api";
import Cookies from "universal-cookie/lib";

interface IState {
    email: string,
    picture: string
}

interface IProps {
}

export class Home extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            email: "",
            picture: ""
        }
    }

    componentDidMount() {
        document.documentElement.classList.toggle('animatedBackground');
        this.checkIfUserIsLoggedIn();
    }

    componentWillUnmount() {
        document.documentElement.classList.toggle('animatedBackground');
    }

    checkIfUserIsLoggedIn() {
        const cookies = new Cookies();
        const search = window.location.search;
        const params = new URLSearchParams(search);
        let token = params.get('token');
        if (token === null) {
            const cookie = cookies.get('token');
            if (cookie != null) {
                token = cookie;
            }
        }
        if (token !== null) {
            cookies.set('token', token);
            getUser(token).then(response => this.setState({
                email: response.Email,
                picture: response.Picture
            }))
        }
    }

    render() {
        const {email, picture} = this.state;
        return (
            <div id='welcomeText'
                 className='tile is-ancestor has-text-centered is-vertical'>
                <div className='tile is-parent '>
                    <article className='tile is-child'>
                        <p id='welcomeTitle' className='title'>Dashboard</p>
                        <div className='content'>
                            A beautiful dashboard loaded with random data.
                        </div>
                        <div className={email == "" ? 'is-hidden' : 'content'}>
                            Welcome {email}
                        </div>
                    </article>
                </div>
            </div>
        )
            ;
    }
}

export default Home;
