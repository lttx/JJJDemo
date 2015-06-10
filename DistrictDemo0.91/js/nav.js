$(document).ready(function() {
    /**
     * Created by jixian on 2015/5/27.
     */
    $("#left-tittle").text("区域部署");
    var map;
    //var ply;
    allmap();
    $(".city p").click(function(){
        var location = this.id;
        if(location=="beijing")
        {
            beijingmap();
        }
        else if(location=="tianjin")
        {
            tianjinmap();
        }
        else if(location=="hebei")
        {
            hebeimap();
        }
    });

    $('.city_child li').click(function(){
        var curLi = $(this).text().trim();
        var curCity = $(this).parent().parent().children('.city_info').text().trim();
        //map.clearOverlays();
        //map.removeOverlay(ply);
        map.setZoom(11);
        map.setCenter(curLi);
    });

    function allmap(){
        $(function () {
            map = new BMap.Map('map', {mapType: BMAP_HYBRID_MAP});
            map.centerAndZoom(new BMap.Point(105.694761, 35.907521), 6);

            map.addEventListener("click",function(e){
                alert(e.point.lng.toString() + ','+ e.point.lat.toString());
            });
            for (var i = 0; i < allMapPoints.length; i++) {
                var lng = allMapPoints[i].geoCoord[0]+ Math.random() * 5 * -1;
                var lat = allMapPoints[i].geoCoord[1]+ Math.random() * 3 * -1;
                var point = new BMap.Point(lng, lat);
                var options = {};
                var marker = new BMap.Marker(point, options);
                map.addOverlay(marker);
            }
            setMarkerAnimation(map);

            var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
            var top_left_navigation = new BMap.NavigationControl();
            map.enableScrollWheelZoom(true);
            map.addOverlay(top_left_control);
            map.addOverlay(top_left_navigation);
        });
    }

    function beijingmap() {
        $(function () {
            var cityName = '北京';
            map = initMap('map',cityName,{mapType: BMAP_HYBRID_MAP});
            drawBoundary(map,cityName);
            var newPoints = generatePoint(beijingBoundaries,40.54, 39.52, 30, 117.12, 115.972, 40);
            for (var x = 0; x < newPoints.length; x++) {
                beijingPoints.push(newPoints[x]);
            }
            for (var i = 0; i < beijingPoints.length; i++) {
                var lng = beijingPoints[i][0];
                var lat = beijingPoints[i][1];
                var point = new BMap.Point(lng, lat);
                var options = {};
                var marker = new BMap.Marker(point, options);
                map.addOverlay(marker);
            }
            setMarkerAnimation(map);
        });
    }

    function tianjinmap(){
        $(function () {
            var cityName = '天津';
            map = initMap('map',cityName,{mapType: BMAP_HYBRID_MAP});
            drawBoundary(map,cityName);
            var newPoints = generatePoint(tianjinBoundaries,40.27, 38.54, 30, 118.09, 116.70, 40);
            for (var x = 0; x < newPoints.length; x++) {
                tianjinPoints.push(newPoints[x]);
            }
            for (var i = 0; i < tianjinPoints.length; i++) {
                var lng = tianjinPoints[i][0];
                var lat = tianjinPoints[i][1];
                var point = new BMap.Point(lng, lat);
                var options = {};
                var marker = new BMap.Marker(point, options);
                map.addOverlay(marker);
            }
            setMarkerAnimation(map);
            map.addEventListener("click",function(e){
                alert(e.point.lng.toString()+','+ e.point.lat.toString());
            });
        });
    }

    function hebeimap(){

        $(function () {
            var cityName = '河北';
            map = initMap('map',cityName,{mapType: BMAP_HYBRID_MAP});
            drawBoundary(map,cityName);
            var newPoints = generatePoint(hebeiBoundaries,42.60, 36.04, 25, 119.98, 113.45, 30);
            for (var x = 0; x < newPoints.length; x++) {
                hebeiPoints.push(newPoints[x]);
            }
            for (var i = 0; i < hebeiPoints.length; i++) {
                var lng = hebeiPoints[i][0];
                var lat = hebeiPoints[i][1];
                var point = new BMap.Point(lng, lat);
                var options = {};
                var marker = new BMap.Marker(point, options);
                map.addOverlay(marker);
            }
            setMarkerAnimation(map);
            map.addEventListener("click",function(e){
                alert(e.point.lng.toString()+','+ e.point.lat.toString());
            });
        });
    }
});