import * as echarts from "echartts";

const chart = echarts.init(document.getElementById("myCharts"));

const options = {
    title: {
        text: "dummy rendering",
    },
    tooltip:{},
    legend: {
        data: ["dummy"]
    },
    xAxis: {
        data: []
    }
};

chart.setOption(options);