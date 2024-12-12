let datavalue = [
    { "name": "云南", "value": 140 },
    { "name": "河南", "value": 642 },
    { "name": "湖北", "value": 505 },
    { "name": "北京", "value": 433 },
    { "name": "浙江", "value": 938 },
    { "name": "辽宁", "value": 236 },
    { "name": "重庆", "value": 247 },
    { "name": "四川", "value": 625 },
    { "name": "广东", "value": 2249 },
    { "name": "江苏", "value": 967 },
    { "name": "山东", "value": 817 },
    { "name": "贵州", "value": 164 },
    { "name": "甘肃", "value": 69 },
    { "name": "河北", "value": 420 },
    { "name": "福建", "value": 474 },
    { "name": "江西", "value": 339 },
    { "name": "陕西", "value": 353 },
    { "name": "海南", "value": 363 },
    { "name": "天津", "value": 162 },
    { "name": "新疆", "value": 78 },
    { "name": "安徽", "value": 433 },
    { "name": "黑龙江", "value": 195 },
    { "name": "吉林", "value": 130 },
    { "name": "宁夏", "value": 42 },
    { "name": "广西", "value": 449 },
    { "name": "湖南", "value": 404 },
    { "name": "上海", "value": 464 },
    { "name": "香港", "value": 20 },
    { "name": "内蒙古", "value": 85 },
    { "name": "青海", "value": 15 },
    { "name": "山西", "value": 129 },
    { "name": "西藏", "value": 18 },
    { "name": "台湾", "value": 2 },
    { "name": "澳门", "value": 1 }
];

// 计算最大值
let maxValue = Math.max(...datavalue.map(item => item.value));

// 设置地图配置
let option = {
    backgroundColor: 'transparent', // 背景设置为透明
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'multiple'
    },
    tooltip: {
        show: true
    },
    visualMap: [
        {
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            text: [''],
            calculable: true,
            max: maxValue,
            inRange: {
                color: ['#fff1e6', '#ffbb88', '#ff7f50', '#ff4500', '#d70000']
            }
        }
    ],
    geo: {
        map: 'china',
        aspectScale: 1,
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(147, 235, 248, 0)', // 删除红色边框
                borderWidth: 0, // 删除边框宽度
                areaColor: {
                    type: 'radial',
                    x: 1,
                    y: 1,
                    r: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(147, 235, 248, .9)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .9)'
                        }
                    ],
                    globalCoord: false
                },
                shadowColor: 'rgba(128, 217, 248, .2)',
                shadowOffsetX: 12,
                shadowOffsetY: 12,
                shadowBlur: 1
            },
            emphasis: {
                areaColor: 'yellow'
            }
        },
        z: 2
    },
    series: [
        {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            name: '评论数量',
            id: 0,
            tooltip: {
                show: true
            },
            label: {
                normal: {
                    show: false,
                    formatter: function (val) {
                        var area_content = '{a|' + val.name + '}' + '-' + '{b|' + val.value + '}';
                        return area_content.split("-").join("\n");
                    },
                    rich: {
                        a: {
                            color: '#fff'
                        },
                        b: {
                            color: '#fff',
                            fontFamily: 'Microsoft YaHei',
                            fontSize: 14,
                            width: 16,
                            height: 16,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#f00', // 保留这个，如果不需要红色边框可以去掉这段
                            textAlign: 'center',
                            padding: 2
                        }
                    },
                },
                emphasis: {
                    show: false
                }
            },
            aspectScale: 1,
            roam: false,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 0)', // 删除红色边框
                    borderWidth: 0, // 删除边框宽度
                    areaColor: 'rgba(147, 235, 248, 0)'
                },
                emphasis: {
                    areaColor: 'rgba(147, 235, 248, 0)'
                }
            },
            zlevel: 5,
            data: datavalue
        }
    ]
};

var dom = document.getElementById("map");
var myChart = echarts.init(dom);
myChart.setOption(option, true);
