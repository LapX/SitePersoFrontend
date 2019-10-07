import {Drawer, ListItem, ListItemText, Theme} from "@material-ui/core";
import React, {useState} from "react";
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
import {addGraphs} from "../../utils/Api";
import {getToken} from "../../utils/Authentication";
import IconButton from "@material-ui/core/IconButton";
import {Menu} from "@material-ui/icons";


interface IProps {
    theme: Theme
    updateCallback: Function
}

const drawerWidth = 170;

const style = makeStyles((theme) =>
    createStyles({
        drawerOpen: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerClosed: {
            width: theme.spacing(7) + 1,
            flexShrink: 0,
        },
        drawerPaperOpen: {
            width: drawerWidth,
            backgroundColor: '#242424',
            color: '#ffffff'
        },
        drawerPaperClosed: {
            width: theme.spacing(7) + 1,
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
            marginRight: 12,
            marginLeft: 10
        },
        toolbar: theme.mixins.toolbar
    }))
;

const ClippedDrawer = (props: IProps) => {
    const {theme, updateCallback} = props
    const classes = style();
    const [isDrawerOpened, setDrawerOpen] = useState(false);
    const [isGraphsOpen, setGraphsOpen] = useState(false);

    const adjustNumberOfGraphs = async (number: number) => {
        await addGraphs(getToken(), number);
        updateCallback();
    }

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpened);
        setGraphsOpen(!isGraphsOpen);
    }

    const toggleGraphs = () => {
        setGraphsOpen(!isGraphsOpen);
    }

    return (
        <ThemeProvider theme={theme}>
            <Drawer
                theme={theme}
                className={isDrawerOpened ? classes.drawerOpen : classes.drawerClosed} variant="permanent" classes={{
                paper: isDrawerOpened ? classes.drawerPaperOpen : classes.drawerPaperClosed,
            }}>
                <div className={classes.toolbar}/>
                <IconButton
                    onClick={toggleDrawer}
                ><Menu color='primary'/>
                </IconButton>
                <ExpansionPanel className={classes.expansionPanel}
                                expanded={isGraphsOpen && isDrawerOpened}>
                    <ExpansionPanelSummary onClick={isDrawerOpened ? toggleGraphs : toggleDrawer}>
                        <ListItem button key={'Graphs'}>
                            <Avatar className={classes.avatar}>
                                <FontAwesomeIcon icon={faChartBar}/>
                            </Avatar>
                            <ListItemText primary={'Graphs'} className={isDrawerOpened ? "" : "is-hidden"}/>
                        </ListItem>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ButtonGroup size="small" aria-label="small outlined button group">
                            <Button onClick={() => {
                                adjustNumberOfGraphs(-1)
                            }} className={classes.button}>-</Button>
                            <Button onClick={() => {
                                adjustNumberOfGraphs(1)
                            }} className={classes.button}>+</Button>
                        </ButtonGroup>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Drawer>
        </ThemeProvider>
    );
}

export default ClippedDrawer;