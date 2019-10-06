import {Drawer, List, ListItem, ListItemText, Theme} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";
import {ThemeProvider} from "@material-ui/styles";

interface IProps {
    theme: Theme
}

const drawerWidth = 140;

const style = makeStyles((theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#242424',
            color: '#ffffff'
        },
        toolbar: theme.mixins.toolbar
    }))
;

const ClippedDrawer = (props: IProps) => {
    const {theme} = props
    const classes = style();

    return (
        <ThemeProvider theme={theme}>
            <Drawer
                theme={theme}
                className={classes.drawer} variant="permanent" classes={{
                paper: classes.drawerPaper,
            }}>
                <div className={classes.toolbar}/>
                <List>
                    {['Graphs', 'Todo list'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </ThemeProvider>
    );
}

export default ClippedDrawer;