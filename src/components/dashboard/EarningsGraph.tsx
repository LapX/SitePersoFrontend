import React from 'react';
import {Theme} from "@material-ui/core";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme} from 'victory';
import {ThemeProvider} from "@material-ui/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";
import Typography from "@material-ui/core/Typography";
import {EarningsGraphData} from "./Dashboard";

interface IProps {
    theme: Theme
    data: Array<EarningsGraphData>
}

const style = makeStyles(() =>
    createStyles({
        container: {
            width: 500,
            backgroundColor: '#242424',
            margin: 10,
            borderRadius: 10,
        },
        containerMobile: {
            width: 'auto',
            backgroundColor: '#242424',
            margin: 10,
            borderRadius: 10,
        },
        typography: {
            color: 'white',
            fontSize: 20,
            margin: 20,
            marginBottom: -50,
            marginLeft: 'auto',
            width: '70%',
        }
    }))
;

const axisStyle = {
    grid: {stroke: 'grey'},
    ticks: {opacity: 0},
    tickLabels: {fill: 'white', font: 'arial'},
}

const EarningsGraph = (props: IProps) => {
    const classes = style();
    const {theme, data} = props;

    return (
        <ThemeProvider theme={theme}>
            <div
                className={window.matchMedia("(max-width: 570px)").matches ? classes.containerMobile : classes.container}>
                <Typography className={classes.typography}>Earnings in the last {data.length} years</Typography>
                <VictoryChart domainPadding={30} theme={VictoryTheme.material}
                              animate={{duration: 1000, easing: "linear"}}>
                    <VictoryAxis tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]} style={axisStyle}/>
                    <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} style={axisStyle}/>
                    <VictoryStack colorScale={"cool"}>
                        {data.map(data => (<VictoryBar
                            key={data.ID}
                            data={data.Tuples}
                            x={"Quarter"}
                            y={"Earnings"}
                        />))}
                    </VictoryStack>
                </VictoryChart>
            </div>
        </ThemeProvider>

    )
        ;
}

export default EarningsGraph;
