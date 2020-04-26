import React, { useContext, useEffect } from 'react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import moment from 'moment';
import { GlobalContext } from '../../context/GlobalState';

const Chart = () => {
    const { orderItems, getOrderItems } = useContext(GlobalContext);

    const orderItemsFormatted = orderItems.map((item) => ({
        ...item,
        created: moment(item.created).format('lll'),
    }));

    useEffect(() => {
        getOrderItems();
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={orderItemsFormatted}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="created" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalCost" fill="#1890ff" />
                </BarChart>
            </div>
            <div>
                <LineChart
                    width={500}
                    height={300}
                    data={orderItemsFormatted}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="created" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="totalCost"
                        stroke="#1890ff"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </div>
        </div>
    );
};

export default Chart;
