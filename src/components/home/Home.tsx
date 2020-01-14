import React, {Component} from 'react';
import './Home.css';
import {getUser} from "../../utils/Api";
import {getToken, setToken} from "../../utils/Authentication";

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
        setToken();
        this.getUserInfo();
    }

    componentWillUnmount() {
        document.documentElement.classList.toggle('animatedBackground');
    }

    getUserInfo() {
        const token = getToken();
        getUser(token).then(response => this.setState({
            email: response.Email,
            picture: response.Picture
        }))
    }

    render() {
        const {email} = this.state;
        return (
            <div id='welcomeText'
                 className='tile is-ancestor has-text-centered is-vertical'>
                <div className='tile is-parent '>
                    <article className='tile is-child'>
                        <p id='welcomeTitle' className='title'>LapX Personal Website</p>
                        <div className='content is-medium'>
                            Here you will find personal projects I worked on in my free time.
                        </div>
                        <div className='content is-small'>
                            Click the Github icon to see the code.
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
