/*
* @Author: ly
* @Date:   2017-01-13 15:24:21
* @Last Modified by:   ly
* @Last Modified time: 2017-01-16 10:36:55
*/


    // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main1'));
    	// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
var dataBJ = [
    [167,176,160,108,4.8],
];

var dataGZ = [
    [178,198,157,108,3.9],
];

var dataSH = [
    [116,87,131,84,1.7],
];

var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

option = {
    backgroundColor: '#161627',
    title: {
        text: '早高峰出行时间（7:40-9:07）',
        left: 'center',
        textStyle: {
            color: '#eee'
        }
    },
    legend: {
        bottom: 35,
        data: ['高档车', '中档车', '经济型车'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    // visualMap: {
    //     show: true,
    //     min: 0,
    //     max: 20,
    //     dimension: 6,
    //     inRange: {
    //         colorLightness: [0.5, 0.8]
    //     }
    // },
    radar: {
        indicator: [
            {name: '公司企业', max: 300},
            {name: '政府', max: 250},
            {name: '科教文化', max: 200},
            {name: '购物', max: 300},
            {name: '医疗', max: 5},
            // {name: 'SO2', max: 100}
        ],
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                // color: 'rgb(238, 197, 102)'
                color:"#f35e0c",
                fontSize: 12
                            }
        },
        splitLine: {

            lineStyle: {

                color: [
                    // 'rgba(255, 0, 0, 0.6)', 'rgba(255, 0, 0, 0.9)',
                    // 'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    // 'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                    "#622503","#622503",


                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '高档车',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#ff0332'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        },
        {
            name: '中档车',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataSH,
            symbol: 'none',
            itemStyle: {
                normal: {
                    // color: 'rgba(0, 0, 255, 0.6)'
                    color:"#f4ec08"
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        },
        {
            name: '经济型车',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataGZ,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#03ff56'
                }
            },
            areaStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);