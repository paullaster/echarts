import * as echarts from "echartts";

const chart = echarts.init(document.getElementById("myCharts"));

const dataFromApi = [
    {
        user_id: "user1",
        activities: 30,
        total_ativities: 80,
        date: '2023-03-01'
    },
    {
        user_id: "user2",
        activities: 20,
        total_ativities: 80,
        date: '2023-03-01'
    },
    {
        user_id: "user3",
        activities: 3,
        total_ativities: 80,
        date: '2023-03-01'
    },
    {
        user_id: "user4",
        activities: 10,
        total_ativities: 80,
        date: '2023-03-01'
    },
    {
        user_id: "user5",
        activities: 17,
        total_ativities: 80,
        date: '2023-03-01'
    }
]

const options = {
    title: {
        text: "dummy rendering",
    },
    tooltip:{},
    legend: {
        data: ["dummy"]
    },
    xAxis: {
        data: dataFromApi.map(d => d.user_id)
    },
    yAxis: {},
    series: [
        {
            name: "% of activities by user per day",
            type: "bar",
            data: dataFromApi.map(d => (d.activities / d.total_ativities) * 100)
        }
    ]
};

chart.setOption(options);