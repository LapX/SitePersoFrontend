import React, {useEffect, useState} from 'react';
import {AppBar, Theme, Toolbar, Typography} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import Avatar from "@material-ui/core/Avatar";
import {getToken} from "../../utils/Authentication";
import {getUser} from "../../utils/Api";

const ghPagesRouting = '/SitePersoFrontend/#';
const backend = 'https://lapx.herokuapp.com/';

interface IProps {
    theme: Theme
}

const style = makeStyles((theme) =>
    createStyles({
        navbarEnd: {
            marginLeft: 'auto',
            "&:hover": {
                color: '#add5ff',
                background: 'none',
            }
        },
        homeAppBar: {
            background: 'transparent',
            boxShadow: 'none',
            zIndex: theme.zIndex.drawer + 1,
        },
        appBar: {
            background: '#004587',
            boxShadow: 'none',
            zIndex: theme.zIndex.drawer + 1,
        },
        button: {
            "&:hover": {
                color: '#add5ff',
                background: 'none'
            }
        },
    }));


const Navbar = (props: IProps) => {
    const classes = style();
    const {theme} = props;
    const [hash, setHash] = useState(window.location.hash);
    const [userPicture, setUserPicture] = useState("");

    useEffect(() => {
        window.addEventListener("hashchange", onHashChange);
        getUserPicture();
    }, []);

    const onHashChange = () => {
        setHash(window.location.hash)
    }

    const getUserPicture = async () => {
        const token = getToken();
        const userInfo = await getUser(token);
        setUserPicture(userInfo.Picture)
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="sticky"
                className={hash == "#/" ? classes.homeAppBar : classes.appBar}>
                <Toolbar>
                    <IconButton color='primary' href={ghPagesRouting + '/'} className={classes.button}>
                        <Typography>
                            Home
                        </Typography>
                    </IconButton>
                    <IconButton color='primary' href={ghPagesRouting + '/Dashboard'} className={classes.button}>
                        <Typography>
                            Dashboard
                        </Typography>
                    </IconButton>
                    <IconButton color='primary' href={backend + '/auth/google/login'}
                                className={userPicture == "" ? classes.navbarEnd : "is-hidden"}>
                        <Typography>
                            Login
                        </Typography>
                    </IconButton>
                    <IconButton color='primary' href={backend + '/auth/google/login'}
                                className={userPicture == "" ? "is-hidden" : classes.navbarEnd}>
                        <Avatar src={userPicture}/>
                    </IconButton>
                    <IconButton color='primary'
                                className={classes.button}
                                href="https://github.com/LapX">
                        <FontAwesomeIcon icon={faGithub}/>
                    </IconButton>
                    <IconButton color='primary'
                                className={classes.button}
                                href="https://www.linkedin.com/in/tommy-montreuil-30714ba8/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );

}

export default Navbar;