

$(document).ready(function(){
    /**
     * Created by lantian on 2015/6/1.
     */
    $(".navbar li").click(function () {
        $(this).siblings().removeClass("active-nav-item");
        $(this).addClass("active-nav-item");
        if ($(this).index() != 3) {
            $("#menu").slideUp();
        }
    });

    $(".deploy").click(function () {
        if($(this).next("div").is(':visible'))
        {
            $(this).find("img").attr("src","image/wgrey-down.png");
            $(this).next("div").slideUp();
        }
        else {
            $(".menu:visible").slideUp();
            $(this).find("img").attr("src","image/wgrey-up.png");
            $(this).next("div").slideDown();
        }
        $(".menu a").addClass("menu-item");
    });

    $(".menu a").click(function () {
        $(this).siblings().removeClass("active-menu-item");
        $(this).addClass("active-menu-item");
    });

    $("#adapterbtn").click(function () {
        $("#menu2").slideToggle();
        $("#menu2 p").addClass("menu-item");
    });

    $("#menu2 p").click(function () {
        $(this).siblings().removeClass("active-menu-item");
        $(this).addClass("active-menu-item");
    });

    $("#map").click(function(){
        $(".deploy").each(function(){
            if($(this).next("div").is(':visible'))
            {
                $(this).find("img").attr("src","image/wgrey-down.png");
                $(this).next("div").slideUp();
            }
        });
    });

    /**
     * Created by jixian on 2015/5/27.
     */
    $(function(){
        var map = new BMap.Map('map',{mapType:BMAP_HYBRID_MAP});
        map.centerAndZoom(new BMap.Point(116.415499, 39.908652),11);
        //var map = new BMap.Map('map');
        //map.centerAndZoom("北京",11);
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
        var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件

        var countyNameArray = [];
        countyNameArray.push("北京市");
        for(var j=0;j<countyNameArray.length;j++){
            getBoundary(countyNameArray[j]);
        }
        realPoints= [];
        realPoints.push(
            [116.373827,40.036663],
            [116.354509,40.032955],
            [116.41764,40.060316],
            [116.263469,39.920058],
            [116.289641,39.957526],
            [116.287091,39.965571],
            [116.278448,39.939022],
            [116.262664,39.935046],
            [116.304425,39.967505],
            [116.263469,39.920058],
            [116.257051,39.934396],
            [116.256409,39.938129],
            [116.287433,40.003037],
            [116.315819,40.012967],
            [116.317243,39.999485],
            [116.324335,39.980431],
            [116.323757,39.96676],
            [116.326533,39.956615],
            [116.341203,39.949749],
            [116.353197,39.958904],
            [116.367562,39.968237],
            [116.34396,39.998588],
            [116.353342,40.010447],
            [116.351806,39.997373],
            [116.351806,39.997373],
            [116.316431,40.03111],
            [116.307689,40.056968],
            [116.265258,40.037884],
            [116.286986,40.041851],
            [116.287793,40.033379],
            [116.305662,39.972746],
            [116.347858,39.964762],
            [116.361866,39.946232],
            [116.377638,39.947442],
            [116.382592,39.954224],
            [116.391361,39.940921],
            [116.391361,39.940921],
            [116.391361,39.940921],
            [116.368144,39.958303],
            [116.379129,39.990704],
            [116.378035,40.009595],
            [116.382766,40.019715],
            [116.355804,40.019611],
            [116.355804,40.019611],
            [116.355804,40.019611],
            [116.343191,40.035867],
            [116.318494,40.041973],
            [116.29715,40.03876],
            [116.319552,40.062324],
            [116.341981,40.062515],
            [116.354037,40.066068],
            [116.37108,40.064838],
            [116.369713,40.087404],
            [116.215615,40.006812],
            [116.221801,40.041015],
            [116.189032,40.032561],
            [116.245018,40.073394],
            [116.276831,40.083536],
            [116.309388,40.083798],
            [116.209116,39.99975],
            [116.209116,39.99975],
            [116.334605,40.046216],
            [116.353422,40.036532],
            [116.360405,40.031115],
            [116.360405,40.031115],
            [116.322936,39.989978],
            [116.312779,39.981704],
            [116.336159,39.982146],
            [116.337062,39.987666],
            [116.337062,39.987666],
            [116.355127,39.975746],
            [116.357802,39.970636],
            [116.372238,39.959125],
            [116.334473,39.954892],
            [116.330715,39.949007],
            [116.344401,39.967949],
            [116.333097,39.984599],
            [116.304074,39.994319],
            [116.300959,40.028441],
            [116.297718,40.032476]
        );

        for(var i=0;i<realPoints.length;i++){
            var lng = realPoints[i][0];
            var lat = realPoints[i][1];
            var point = new BMap.Point(lng,lat);
            var options = {};
            var marker = new BMap.Marker(point,options);
            marker.addEventListener("mousedown",showArea);
            marker.addEventListener("mouseup",deleteLastOverlay);
            marker.addEventListener("mouseover",showLatLng);
            marker.addEventListener("mouseout",deleteLastOverlay);
            map.addOverlay(marker);
        }

        specialPoints = [];
        specialPoints.push(
            [116.311495,39.974533,"苏州街中国人民大学西门"],
            [116.311585,39.971457,"苏州桥小南庄斜街"]
        );
        for(var i=0;i<specialPoints.length;i++){
            var lng = specialPoints[i][0];
            var lat = specialPoints[i][1];
            var point = new BMap.Point(lng,lat);
            var options = {title:specialPoints[i][2]};
            var marker = new BMap.Marker(point,options);
            marker.addEventListener("mousedown",showArea);
            marker.addEventListener("mouseup",deleteLastOverlay);
            //marker.addEventListener("mouseover",showLatLng);
            //marker.addEventListener("mouseout",deleteLastOverlay);
            map.addOverlay(marker);
        }

        function addMarker(e){
            var lng=e.point.lng;
            var lat=e.point.lat;
            var point = new BMap.Point(lng,lat);
            var marker = new BMap.Marker(point);
            marker.enableDragging();
            map.addOverlay(marker);
        }
        function deleteLastMarker(){
            var allOverlay = map.getOverlays();
            var length = allOverlay.length -1;
            map.removeOverlay(allOverlay[length]);
        }
        function showLatLng(e){
            var lat = e.point.lat;
            var lng = e.point.lng;
            var point = new BMap.Point(lng,lat);
            var opts = {
                position : point,    // 指定文本标注所在的地理位置
                offset   : new BMap.Size(30, -30)    //设置文本偏移量
            };
            var label = new BMap.Label("lng: "+lng.toString()+", lat: "+lat.toString(), opts);  // 创建文本标注对象
            label.setStyle({
                color : "white",
                fontSize : "12px",
                height : "20px",
                lineHeight : "20px",
                fontFamily:"微软雅黑"
            });
            map.addOverlay(label);
        }
        function showArea(e){
            var lat = e.point.lat;
            var lng = e.point.lng;
            var point = new BMap.Point(lng,lat);
            var radius = 1000; //单位m
            var circle = new BMap.Circle(point,radius,{strokeColor:"",strokeWeight:1,strokeStyle:"dashed",fillColor:"#66cc00",fillOpacity:0.2});
            map.addOverlay(circle);
        }
        function deleteLastOverlay(e){
            var allOverlay = map.getOverlays();
            var length = allOverlay.length -1;
            map.removeOverlay(allOverlay[length]);
        }
        function getBoundary(countyName){
            var bdary = new BMap.Boundary();
            bdary.get(countyName, function(rs){       //获取行政区域
                //map.clearOverlays();        //清除地图覆盖物
                var count = rs.boundaries.length; //行政区域的点有多少个
                for(var i = 0; i < count; i++){
                    var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1, strokeColor: "#ff0000"}); //建立多边形覆盖物
                    map.addOverlay(ply);  //添加覆盖物
                    map.setViewport(ply.getPath());    //调整视野
                }
            });
        }
        map.enableScrollWheelZoom(true);
        map.addOverlay(top_left_control);
        map.addOverlay(top_left_navigation);
    });
});


