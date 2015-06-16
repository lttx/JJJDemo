/**
 * Created by lt on 2015/6/1.
 */
$(document).ready(function() {


    var option={};

    require.config({
        paths: {
            echarts: 'js/dist'
        }
    });
    require(
        [
            'echarts',
            'echarts/theme/macarons',
            'echarts/chart/line'
        ],
        //
        function (ec,theme) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('rm-data'),theme);
            option = {
                title : {
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['道路污染数据监测']
                },
                toolbox: {
                    show : true,
                    feature : {
                        //mark : {show: true},
                        //dataView : {show: true, readOnly: false},
                        //magicType : {show: true, type: ['line', 'bar']},
                        //restore : {show: true},
                        //saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['7:00','8:00','9:00','10:00','11:00','12:00','13:00']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value}'
                        },
                        height:'10%'
                    }
                ],
                series : [
                    {
                        name:'PM2.5',
                        type:'line',
                        data:[1, 3, 28, 19, 279, 53, 78],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    }
                ]
            };

            myChart.setOption(option);
            setTimeout(function (){
                window.onresize = function () {
                    myChart.resize();
                }
            },200);
        }
    );


    //column image
    require(
        [
            'echarts',
            'echarts/theme/macarons',
            'echarts/chart/bar'
        ],
        //
        function (ec,theme) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('analyse-data'),theme);
            option = {
                title : {
                    //text: '某地区蒸发量和降水量',
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['PM2.5排放量']
                },
                toolbox: {
                    //show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'PM2.5排放量',
                        type:'bar',
                        data:[2.0, 4.9, 76.7, 135.6, 162.2, 32.6, 6.4],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    }
                ]
            };

            myChart.setOption(option, true);
            setTimeout(function (){
                window.onresize = function () {
                    myChart.resize();

                }
            },200);
        }
    );

    //column image
    require(
        [
            'echarts',
            'echarts/theme/macarons',
            'echarts/chart/bar',
            'echarts/chart/line'
        ],
        //
        function (ec,theme) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('analyse-data-2'),theme);
            option = {
                title : {
                    //text: '某地区蒸发量和降水量'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['PM2.5排放量']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'PM2.5排放量',
                        type:'bar',
                        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    }
                ]
            };

            myChart.setOption(option, true);
            setTimeout(function (){
                window.onresize = function () {
                    myChart.resize();

                }
            },200);
        }
    );

    //column image
    require(
        [
            'echarts',
            'echarts/theme/macarons',
            'echarts/chart/bar',
            'echarts/chart/pie',
            'echarts/chart/funnel'
        ],
        //
        function (ec,theme) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('pm-static-div'),theme);
            option = {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['优','良','中','差']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'center',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'天数',
                        type:'pie',
                        radius : ['50%', '70%'],
                        itemStyle : {
                            normal : {
                                label : {
                                    show : false
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis : {
                                label : {
                                    show : true,
                                    position : 'center',
                                    textStyle : {
                                        fontSize : '20',
                                        fontWeight : 'bold'
                                    }
                                }
                            }
                        },
                        data:[
                            {value:135, name:'优'},
                            {value:120, name:'良'},
                            {value:28, name:'中'},
                            {value:82, name:'差'}
                        ]
                    }
                ]
            };

            myChart.setOption(option, true);

            setTimeout(function (){
                window.onresize = function () {
                    myChart.resize();
                }
            },200);
        }
    );

    //window.addEventListener("resize", function () {
    //    option.chart.resize();
    //});

    $(function() {
        var map = new BMap.Map('map');
        //map.centerAndZoom(new BMap.Point(116.415499, 39.908652),11);
        //var map = new BMap.Map('map');
        map.centerAndZoom("北京", 11);
        var marker = new BMap.Marker(new BMap.Point(116.415499, 39.908652));
        map.addOverlay(marker);
        $("#searchPos").click(function(){
            map.clearOverlays();
            var value = $("#searchPosName").val();
            var local = new BMap.LocalSearch(map, {
                renderOptions:{map: map}
            });
            local.search(value);
        });
    });




});





