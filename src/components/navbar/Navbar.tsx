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
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (nav: string) => {
        setAnchorEl(null);
        if (nav !== "") {
            window.location.href = ghPagesRouting + nav;
        }
    };

    const isMobile = () => {
        return window.matchMedia("(max-width: 570px)").matches;
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="sticky"
                className={hash == "#/" ? classes.homeAppBar : classes.appBar}>
                <Toolbar
                    className={isMobile() ? "is-hidden" : ""}>
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
                    <IconButton color='primary' href={ghPagesRouting + '/LightingControl'}
                                className={classes.button}>
                        <Typography>
                            Lighting control
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
                <Toolbar className={isMobile() ? "" : "is-hidden"}>
                    <IconButton color='primary' onClick={handleClick}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={() => {
                            handleClose("")
                        }}
                    >
                        <MenuItem onClick={() => {
                            handleClose("/")
                        }}>Home</MenuItem>
                        <MenuItem onClick={() => {
                            handleClose("/Dashboard")
                        }}>Dashboard</MenuItem>
                        <MenuItem onClick={() => {
                            handleClose("LightingControl")
                        }}>Lighting control</MenuItem>
                    </Menu>
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