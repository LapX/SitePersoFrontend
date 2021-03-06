import React, {useEffect, useState} from 'react';
import {Theme} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";
import {getGraphsData} from "../../utils/Api";
import {getToken} from "../../utils/Authentication";
import EarningsGraph from "./EarningsGraph";
import ClippedDrawer from "../drawer/ClippedDrawer";

interface IProps {
    theme: Theme
}

const style = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            paddingLeft: 65
        }
    }))
;

const Dashboard = (props: IProps) => {
    const classes = style();
    const {theme} = props
    const [graphsData, setGraphsData] = useState({
        EarningsGraphArray: [{
            EarningsGraphData: []
        }]
    })

    useEffect(() => {
        fetchAndSetGraphsData()
    }, []);

    const fetchAndSetGraphsData = async () => {
        const token = getToken();
        const fetchedData = await getGraphsData(token);
        if (fetchedData.EarningsGraphArray != null) {
            setGraphsData(fetchedData)
        } else {
            setGraphsData({EarningsGraphArray: []})
        }
    };

    return (
        <>
            <ClippedDrawer theme={theme} updateCallback={fetchAndSetGraphsData}/>
            <div className={classes.container}>
                {graphsData.EarningsGraphArray.map(data => (
                    <EarningsGraph theme={theme} EarningsGraphData={data.EarningsGraphData}/>))
                }
            </div>
        </>
    );
}

export default Dashboard;
