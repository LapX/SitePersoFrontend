import React, {useEffect, useState} from 'react';
import {Theme} from "@material-ui/core";
import EarningsGraph from "./EarningsGraph";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";
import {getData} from "../../utils/Api";

interface IProps {
    theme: Theme
}

export interface GraphsData {
    EarningsGraphsData: Array<EarningsGraphData>
}

export interface EarningsGraphData {
    ID: number
    Tuples: Array<Tuple>
}

interface Tuple {
    Quarter: number
    Earnings: number
}

const style = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '90%',
        }
    }))
;

const Dashboard = (props: IProps) => {
    const classes = style();
    const {theme} = props
    const [data, setData] = useState([{
        ID: 0, Tuples: [{
            "Quarter": 1,
            "Earnings": 0
        }]
    }])
    const [graphsData, setGraphsData] = useState([{
        GraphsData: {
            EarningsGraphsData: []
        }
    }])

    useEffect(() => {
        fetchAndSetData()
        fetchAndSetGraphsData()
    }, [])

    const fetchAndSetData = async () => {
        const fetchedData = await getData();
        if (fetchedData != null) {
            setData(fetchedData)
        }
    }

    const fetchAndSetGraphsData = async () => {
        const fetchedData = await getData();
        if (fetchedData != null) {
            setData(fetchedData)
        }
    }

    return (
        <div className={classes.container}>
            {graphsData.map(mapper => (
                <EarningsGraph theme={theme} data={mapper.GraphsData.EarningsGraphsData}/>
            ))}
            <EarningsGraph theme={theme} data={data}/>
        </div>
    );

}

export default Dashboard;
