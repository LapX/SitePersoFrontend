import React, {useEffect, useState} from 'react';
import {Theme} from "@material-ui/core";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme, VictoryThemeDefinition} from 'victory';
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";
import {getData} from "../../utils/Api";

interface IProps {
    theme: Theme
}

const style = makeStyles(() =>
    createStyles({
        container: {
            minWidth: 500,
        },
        containerMobile: {
            minWidth: 100,
        },
    }))
;

const EarningsGraph = (props: IProps) => {
    const classes = style();
    const [data, setData] = useState([{
        ID: 0, Tuples: [{
            "Quarter": 1,
            "Earnings": 0
        }]
    }])

    useEffect(() => {
        fetchAndSetData()
    }, [])

    const fetchAndSetData = async () => {
        const fetchedData = await getData();
        if (fetchedData != null) {
            setData(fetchedData)
        }
    }

    let chartTheme: VictoryThemeDefinition = {
        ...VictoryTheme.material,
    }

    return (
        <div className={window.matchMedia("(max-width: 570px)").matches ? classes.containerMobile : classes.container}>
            <VictoryChart domainPadding={30} theme={chartTheme} animate={{duration: 2000, easing: "linear"}}>
                <VictoryAxis tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                             style={{}}/>
                <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)}/>
                <VictoryStack colorScale={"cool"}>
                    {data.map(data => (<VictoryBar
                        animate={{duration: 1, easing: "exp"}}
                        key={data.ID}
                        data={data.Tuples}
                        x={"Quarter"}
                        y={"Earnings"}
                    />))}
                </VictoryStack>
            </VictoryChart>
        </div>
    );
}

export default EarningsGraph;
