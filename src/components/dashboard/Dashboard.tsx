import React from 'react';
import {Theme} from "@material-ui/core";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme} from 'victory';
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles/createStyles";

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

const data2012 = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];

const data2013 = [
    {quarter: 1, earnings: 15000},
    {quarter: 2, earnings: 12500},
    {quarter: 3, earnings: 19500},
    {quarter: 4, earnings: 13000}
];

const data2014 = [
    {quarter: 1, earnings: 11500},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 20000},
    {quarter: 4, earnings: 15500}
];

const data2015 = [
    {quarter: 1, earnings: 18000},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 15000},
    {quarter: 4, earnings: 12000}
];

const dataList = [data2012, data2013, data2014, data2015]

export default function Dashboard(props: IProps) {
    const {theme} = props
    const classes = style();
    return (
        <div className={classes.graph}>
            <VictoryChart domainPadding={30} theme={VictoryTheme.material}>
                <VictoryAxis tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}/>
                <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)}/>
                <VictoryStack colorScale={"blue"}>
                    {dataList.map(data => <VictoryBar
                        data={data}
                        x={"quarter"}
                        y={"earnings"}
                    />)}
                </VictoryStack>
            </VictoryChart>
        </div>
    );

}

