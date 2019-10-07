import {Drawer, ListItem, ListItemText, Theme} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";
import {ThemeProvider} from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartBar} from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";


interface IProps {
    theme: Theme
}

const drawerWidth = 170;

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
        expansionPanel: {
            backgroundColor: '#242424',
            color: '#ffffff'
        },
        button: {
            backgroundColor: '#202020',
            color: '#ffffff',
            fontSize: 25,
            width: 60
        },
        avatar: {
            backgroundColor: '#004587',
            marginRight: 12
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
                <ExpansionPanel className={classes.expansionPanel}>
                    <ExpansionPanelSummary
                    >
                        <ListItem button key={'Graphs'}>
                            <Avatar className={classes.avatar}>
                                <FontAwesomeIcon icon={faChartBar}/>
                            </Avatar>
                            <ListItemText primary={'Graphs'}/>
                        </ListItem>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ButtonGroup size="small" aria-label="small outlined button group"
                        >
                            <Button className={classes.button}>+</Button>
                            <Button className={classes.button}>-</Button>
                        </ButtonGroup>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Drawer>
        </ThemeProvider>
    );
}

export default ClippedDrawer;