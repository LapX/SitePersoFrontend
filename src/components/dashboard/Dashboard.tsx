import React, {useEffect, useState} from 'react';
import {Theme} from "@material-ui/core";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme} from 'victory';
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";
import {getData} from "../../utils/Api";

interface IProps {
    theme: Theme
}

const style = makeStyles(() =>
    createStyles({
        graph: {
            maxWidth: 1000
        }
    }))
;

const Dashboard = (props: IProps) => {
    const classes = style();
    const [data, setData] = useState([{
        ID: 1, Tuples: [{
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

    return (
        <div className={classes.graph}>
            <VictoryChart domainPadding={30} theme={VictoryTheme.material}>
                <VictoryAxis tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}/>
                <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)}/>
                <VictoryStack colorScale={"blue"}>
                    {data.map(data => (<VictoryBar
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

export default Dashboard;
