import React from 'react';
import {Theme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";
import Typography from "@material-ui/core/Typography";

interface IProps {
    theme: Theme,
    title: String,
    number: number,
    unit: String
}

const style = makeStyles(() =>
    createStyles({
        container: {
            width: 200,
            height: 100,
            backgroundColor: '#242424',
            margin: 10,
        },
        containerMobile: {
            width: 'auto',
            height: 200,
            backgroundColor: '#242424',
            margin: 10,
            borderRadius: 10,
        },
        title: {
            color: 'white',
            fontSize: 30,
            marginLeft: 20,
        },
        number: {
            color: 'white',
            fontSize: 30,
            marginLeft: 20,
        }
    }))
;

const NumberShowcase = (props: IProps) => {
    const classes = style();
    const {theme, title, number, unit} = props;

    return (
        <ThemeProvider theme={theme}>
            <div
                className={window.matchMedia("(max-width: 570px)").matches ? classes.containerMobile : classes.container}>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.number}>{number}{unit}</Typography>
            </div>
        </ThemeProvider>

    )
        ;
}

export default NumberShowcase;
