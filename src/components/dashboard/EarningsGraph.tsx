import React from 'react';
import {Theme} from "@material-ui/core";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme} from 'victory';
import {ThemeProvider} from "@material-ui/styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";
import Typography from "@material-ui/core/Typography";

interface IProps {
    theme: Theme
    EarningsGraphData: Array<EarningsGraphData>
}

interface EarningsGraphData {
    ID: number
    Tuples: Array<Tuples>
}

interface Tuples {
    Quarter: number
    Earnings: number
}


const style = makeStyles(() =>
    createStyles({
        container: {
            width: 440,
            backgroundColor: '#242424',
            margin: 10
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
        },
        typographyMobile:{
            color: 'white',
            fontSize: 14,
            margin: 15,
            marginBottom: -30,
            marginLeft: 60,
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
    const {theme, EarningsGraphData} = props;

    const isMobile = () => {
        return window.matchMedia("(max-width: 570px)").matches;
    }

    return (
        <ThemeProvider theme={theme}>
            <div
                className={isMobile() ? classes.containerMobile : classes.container}>
                <Typography className={isMobile() ? classes.typographyMobile : classes.typography}>Earnings in the
                    last {EarningsGraphData.length} years</Typography>
                <VictoryChart domainPadding={30} theme={VictoryTheme.material}>
                    <VictoryAxis tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]} style={axisStyle}/>
                    <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} style={axisStyle}/>
                    <VictoryStack colorScale={"cool"}>
                        {EarningsGraphData.map(data => (<VictoryBar
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
