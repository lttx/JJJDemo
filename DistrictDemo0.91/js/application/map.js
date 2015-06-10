/**
 * Created by jixian on 2015/6/9.
 */

function initMap(container,cityName,options){
    var map = new BMap.Map(container,options);
    map.centerAndZoom(cityName, 11);
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
    var top_left_navigation = new BMap.NavigationControl();
    //drawBoundary(map,cityName);
    map.enableScrollWheelZoom(true);
    map.addOverlay(top_left_control);
    map.addOverlay(top_left_navigation);
    return map;
}

function generatePoint(areaBoundaries,latMax, latMin, latCount, lngMax, lngMin, lngCount) {
    var Nvert = areaBoundaries.length;
    var vertX = [];
    var vertY = [];
    for (var i = 0; i < Nvert; i++) {
        vertX.push(areaBoundaries[i][1]);
        vertY.push(areaBoundaries[i][0]);
    }
    var value = [];
    var latInterval = (latMax - latMin) / latCount;
    var lngInterval = (lngMax - lngMin) / lngCount;
    for (var lat = latMin; lat < latMax; lat += latInterval) {
        for (var lng = lngMin; lng < lngMax; lng += lngInterval) {
            var temp = [];
            var tempLat =lat+Math.random()*3-1;
            var tempLng = lng+Math.random()*5-1;
            if (pnpoly(Nvert, vertX, vertY, tempLat, tempLng)) {
                temp.push(tempLng);
                temp.push(tempLat);
                value.push(temp);
            }
        }
    }
    return value;
}

function pnpoly(Nvert,vertX,vertY,testX,testY){
    var i=0;
    var j=Nvert-1;
    var c= false;
    for(i=0; i<Nvert;i++){
        if( (vertY[i] < testY && vertY[j] >= testY || vertY[j]<testY && vertY[i] >=testY)
            && (vertX[i]<=testX || vertX[j]<=testX)){
            c ^= (vertX[i] +(testY-vertY[i])/(vertY[j]-vertY[i])*(vertX[j]-vertX[i])<testX);
        }
        j=i;
    }
    return c;
}

function setMarkerAnimation(map){
    var overlays = map.getOverlays();
    setInterval(function(){
        for (var j = 0; j< overlays.length; j++){
            var marker = overlays[j];
            marker.setAnimation(BMAP_ANIMATION_BOUNCE);
            marker.setAnimation(null);
        }
    },1000*60*3);
}

function addMarker(map,e) {
    var lng = e.point.lng;
    var lat = e.point.lat;
    var point = new BMap.Point(lng, lat);
    var marker = new BMap.Marker(point);
    marker.enableDragging();
    map.addOverlay(marker);
}

function deleteLastMarker(map) {
    var allOverlay = map.getOverlays();
    var length = allOverlay.length - 1;
    map.removeOverlay(allOverlay[length]);
}

function showLatLng(map,e) {
    var lat = e.point.lat;
    var lng = e.point.lng;
    var point = new BMap.Point(lng, lat);
    var opts = {
        position: point,
        offset: new BMap.Size(30, -30)
    };
    var label = new BMap.Label("lng: " + lng.toString() + ", lat: " + lat.toString(), opts);
    label.setStyle({
        color: "white",
        fontSize: "12px",
        height: "20px",
        lineHeight: "20px"
        //fontFamily: "΢���ź�"
    });
    map.addOverlay(label);
}

function deleteLastOverlay(map) {
    var allOverlay = map.getOverlays();
    var length = allOverlay.length - 1;
    map.removeOverlay(allOverlay[length]);
}

function drawBoundary(map,countryName){
    var countyNameArray = [];
    countyNameArray.push(countryName);
    for (var i = 0; i < countyNameArray.length; i++) {
        getBoundary(map,countyNameArray[i]);
    }
}

function getBoundary(map,countyName) {
    var bdary = new BMap.Boundary();
    var ply;
    bdary.get(countyName, function (rs) {
        //map.clearOverlays();
        var count = rs.boundaries.length;
        for (var i = 0; i < count; i++) {
            ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1, strokeColor: "#ff0000"});
            ply.enableMassClear();
            map.addOverlay(ply);
            map.setViewport(ply.getPath());
        }
    });
    //return ply;
}