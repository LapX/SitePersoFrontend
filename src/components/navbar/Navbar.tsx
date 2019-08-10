import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const ghPagesRouting = '/SitePersoFrontend/#';

const theme = createMuiTheme({
    palette: {
        primary: {main: '#FFFFFF'},
        secondary: {main: '#0078ff'},
    },
    typography: {
        fontFamily: 'arial',
        fontSize: 18,
    },
});

const style = makeStyles(() =>
    createStyles({
        navbarEnd: {
            marginLeft: 'auto',
            "&:hover": {
                color: '#add5ff',
                background: 'none'
            }
        },
        appBar: {
            background: 'transparent', boxShadow: 'none',
        },
        button: {
            "&:hover": {
                color: '#add5ff',
                background: 'none'
            }
        }
    }))

export default function Navbar() {
    const classes = style();
    return (
        <ThemeProvider theme={theme}>
            <AppBar className={classes.appBar}>
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
                    <IconButton color='primary'
                                className={classes.navbarEnd}
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
