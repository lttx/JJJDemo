/**
 * Created by lt on 2015/6/1.
 */
$(document).ready(function() {


    $(function () {
        $('#pm-rank-table').tablesorter({
            widgets: ['zebra', 'columns'],
            usNumberFormat: false,
            sortReset: true,
            sortRestart: true
        });
    });

    ////数据源，json的格式.
    //var content = [{"name": "万柳", "nongdu": "175","pos":"海淀区"},
    //    {"name": "万柳", "nongdu": "175","pos":"海淀区"},
    //    {"name": "万柳", "nongdu": "175","pos":"海淀区"},
    //    {"name": "万柳", "nongdu": "175","pos":"海淀区"},
    //    {"name": "万柳", "nongdu": "175","pos":"海淀区"},
    //    {"name": "万柳", "nongdu": "175","pos":"海淀区"},
    //    {"name": "万柳", "nongdu": "175","pos":"海淀区"},
    //    {"name": "万柳", "nongdu": "175","pos":"海淀区"}
    //
    //                ];
    //    var seach=$("#search");
    //    seach.keyup(function(event){
    //        //var keyEvent=event || window.event;
    //        //var keyCode=keyEvent.keyCode;
    //        // 数字键：48-57
    //        // 字母键：65-90
    //        // 删除键：8
    //        // 后删除键：46
    //        // 退格键：32
    //        // enter键：13
    //        //if((keyCode>=48&&keyCode<=57)||(keyCode>=65&&keyCode<=90)||keyCode==8||keyCode==13||keyCode==32||keyCode==46){
    //        //获取当前文本框的值
    //        var seachText=$("#search").val();
    //        if(seachText!=""){
    //            //构造显示页面
    //            var tab="<table width='300' border='1' cellpadding='0' cellspacing='0'><tr align='center'><td>监测站点</td><td>PM2.5浓度</td><td>污染等级</td><td>站点位置</td></tr>";
    //            //遍历解析json
    //            $.each(content,function(name, item){
    //                //如果包含则为table赋值
    //                if(item.name.indexOf(seachText)!=-1){
    //                    tab+="<tr align='center'><td>"+item.name+"</td><td>"+item.nongdu+"</td><td><div class='pmlevel'></div></td><td>"+item.pos+"</td></tr>";
    //                }
    //            });
    //            tab+="</table>";
    //            $("#pm-rank-table-div").html(tab);
    //            //重新覆盖掉，不然会追加
    //            tab="<table width='300' border='1' cellpadding='0' cellspacing='0'><tr align='center'><td>监测站点</td><td>PM2.5浓度</td><td>污染等级</td><td>站点位置</td></tr>";
    //        }else{
    //            $("#pm-rank-table-div").html("");
    //        }
    //        // }
    //    });

    $("tbody tr").each(
        function(){
            var level = $(this).children("td").eq(1).text();
            if(level>=500) {
                $(this).find(".pmlevel").css("background-color", "#8E236B");
            }
            else if(level>400)
            {
                $(this).find(".pmlevel").css("background-color", "#8E236B");
            }
            else if(level>300)
            {
                $(this).find(".pmlevel").css("background-color", "#8E236B");
            }
            else if(level>200)
            {
                $(this).find(".pmlevel").css("background-color", "#A020F0");
            }
            else if(level>150)
            {
                $(this).find(".pmlevel").css("background-color", "#FF0000");
            }
            else if(level>100)
            {
                $(this).find(".pmlevel").css("background-color", "#FF6100");
            }
            else if(level>50)
            {
                $(this).find(".pmlevel").css("background-color", "#FFFF00");
            }
            else
            {
                $(this).find(".pmlevel").css("background-color", "#00FF00");
            }
        }
    );

    $(window).resize(function(){
        var width = $(window).width();
        if(width<1000) {
            //alert("1");
           $(window).width("1000px");
        }
    });

    $(".city_child li").click(function(){
        var text = $(this).text();
        $(".pmdistrict").html(text);
    });

    var option={};

    require.config({
        paths: {
            echarts: 'js/dist'
        }
    });

    // 使用
    require(
        [
            'echarts',
            'echarts/chart/gauge', // 使用柱状图就加载bar模块，按需加载
        ],
        //
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('realTimeData'));

            option = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                series : [
                    {
                        name:'PM2.5',
                        type:'gauge',
                        center : ['50%','60%'],    // 默认全局居中
                        radius : [0, '75%'],
                        startAngle: 180,
                        endAngle : 0,
                        min: 0,                     // 最小值
                        max: 500,                   // 最大值
                        precision: 0,               // 小数精度，默认为0，无小数点
                        splitNumber: 10,             // 分割段数，默认为5
                        axisLine: {            // 坐标轴线
                            show: true,        // 默认显示，属性show控制显示与否
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: [[0.03, 'green'],[0.08, 'yellow'],[0.13, 'orange'], [0.3, 'red'], [0.5, 'purple'], [0.7, 'maroon'], [1, 'maroon']],
                                width: 50
                            }
                        },
                        axisTick: {            // 坐标轴小标记
                            show: true,        // 属性show控制显示与否，默认不显示
                            splitNumber: 5,    // 每份split细分多少段
                            length :8,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle控制线条样式
                                color: '#eee',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                            show: true,
                            formatter: function(v){
                                switch (v+''){
                                    case '15': return '优';
                                    case '40': return '良';
                                    case '65': return '轻度污染';
                                    case '150': return '中度污染';
                                    case '250': return '重度污染';
                                    case '350': return '严重污染';
                                    case '500': return '严重污染';
                                    default: return '';
                                }
                            },
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                length: 6,
                                color: '#333'
                            }
                        },
                        splitLine: {           // 分隔线
                            show: true,        // 默认显示，属性show控制显示与否
                            length :18,         // 属性length控制线长
                            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                color: '#eee',
                                width: 2,
                                type: 'solid'
                            }
                        },
                        pointer : {
                            length : '80%',
                            width : 8,
                            color : 'auto'
                        },
                        title : {
                            show : true,
                            offsetCenter: ['5%', '-40%'],       // x, y，单位px
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                color: '#333',
                                fontSize : 12,
                                bold: true
                            }
                        },
                        detail : {
                            show : true,
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderWidth: 0,
                            borderColor: '#ccc',
                            width: 500,
                            height: 350,
                            offsetCenter: [0, '-80%'],       // x, y，单位px
                            formatter:'{value}',
                            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                color: 'auto',
                                fontSize : 20
                            }
                        },
                        data:[{value: 50, name: 'PM2.5'}]
                    }
                ]
            };

            clearInterval(timeTicket);
            var timeTicket = setInterval(function (){
                option.series[0].data[0].value = (Math.random()*500).toFixed(0) - 0;
                myChart.setOption(option, true);
            },2000);

            $("#loadimg").hide();
        }
    );

    // meanValueLine configuration
    require(
        [
            'echarts',
            'echarts/theme/macarons',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        //
        function (ec,theme) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('meanValueLine'),theme);
            var option = {
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['Mean PM2.5 Value']
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
                        boundaryGap : false,
                        data : ['7:00','8:00','9:00','10:00','11:00','12:00','13:00']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value}',
                            height: '30%'
                        }
                    }
                ],
                series : [
                    {
                        name:'PM2.5',
                        type:'line',
                        data:[13, 78, 342, 765, 222, 150, 10],
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

        }
    );
    window.addEventListener("resize", function () {
        option.chart.resize();
    });
});







