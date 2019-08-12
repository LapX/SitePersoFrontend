import React from 'react';
import {Theme} from "@material-ui/core";
import EarningsGraph from "./EarningsGraph";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";

interface IProps {
    theme: Theme
}

const style = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: 'auto',
            width: '90%',
            marginTop: 10
        }
    }))
;

const Dashboard = (props: IProps) => {
    const classes = style();
    const {theme} = props
    return (
        <div className={classes.container}>
            <EarningsGraph theme={theme}/>
            <EarningsGraph theme={theme}/>
            <EarningsGraph theme={theme}/>
            <EarningsGraph theme={theme}/>
            <EarningsGraph theme={theme}/>
            <EarningsGraph theme={theme}/>
        </div>
    );

}

export default Dashboard;
