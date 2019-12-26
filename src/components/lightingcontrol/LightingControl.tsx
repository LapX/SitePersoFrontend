import {Theme} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";

interface IProps {
    theme: Theme
}

const style = makeStyles(() =>
    createStyles({
        videoContainer: {
            marginLeft: '10vw',
            marginTop: '2vh',
            width: '80vw',
            height: '88vh'
        },
        video: {
            margin: 'auto',
            width: '100%',
            height: '100%'
        }
    }))
;

const LightingControl = (props: IProps) => {
    const classes = style();
    const {theme} = props

    return (<div className={classes.videoContainer}>
        <iframe className={classes.video}
                src='https://www.youtube.com/embed/EEEC12kXwYc'
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
        />
    </div>);
}

export default LightingControl;