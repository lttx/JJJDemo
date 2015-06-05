$(document).ready(function() {
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
    $(function () {
        var map = new BMap.Map('map', {mapType: BMAP_HYBRID_MAP});
        map.centerAndZoom(new BMap.Point(117.196234, 39.134324), 11);
        //map.centerAndZoom("�����",11);
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// ���Ͻǣ���ӱ�����
        var top_left_navigation = new BMap.NavigationControl();  //���Ͻǣ����Ĭ������ƽ�ƿؼ�

        var countyNameArray = [];
        countyNameArray.push("�����");
        for (var i = 0; i < countyNameArray.length; i++) {
            getBoundary(countyNameArray[i]);
        }
        realPoints = [];
        realPoints.push(

        );

        for (var i = 0; i < realPoints.length; i++) {
            var lng = realPoints[i][0];
            var lat = realPoints[i][1];
            var point = new BMap.Point(lng, lat);
            var options = {};
            var marker = new BMap.Marker(point, options);
            marker.addEventListener("mousedown", showArea);
            marker.addEventListener("mouseup", deleteLastOverlay);
            marker.addEventListener("mouseover", showLatLng);
            marker.addEventListener("mouseout", deleteLastOverlay);
            map.addOverlay(marker);
        }

        function addMarker(e) {
            var lng = e.point.lng;
            var lat = e.point.lat;
            var point = new BMap.Point(lng, lat);
            var marker = new BMap.Marker(point);
            marker.enableDragging();
            map.addOverlay(marker);
        }

        function deleteLastMarker() {
            var allOverlay = map.getOverlays();
            var length = allOverlay.length - 1;
            map.removeOverlay(allOverlay[length]);
        }

        function showLatLng(e) {
            var lat = e.point.lat;
            var lng = e.point.lng;
            var point = new BMap.Point(lng, lat);
            var opts = {
                position: point,    // ָ���ı���ע���ڵĵ���λ��
                offset: new BMap.Size(30, -30)    //�����ı�ƫ����
            };
            var label = new BMap.Label("lng: " + lng.toString() + ", lat: " + lat.toString(), opts);  // �����ı���ע����
            label.setStyle({
                color: "white",
                fontSize: "12px",
                height: "20px",
                lineHeight: "20px",
                fontFamily: "΢���ź�"
            });
            map.addOverlay(label);
        }

        function showArea(e) {
            var lat = e.point.lat;
            var lng = e.point.lng;
            var point = new BMap.Point(lng, lat);
            var radius = 1000; //��λm
            var circle = new BMap.Circle(point, radius, {
                strokeColor: "",
                strokeWeight: 1,
                strokeStyle: "dashed",
                fillColor: "#66cc00",
                fillOpacity: 0.2
            });
            map.addOverlay(circle);
        }

        function deleteLastOverlay(e) {
            var allOverlay = map.getOverlays();
            var length = allOverlay.length - 1;
            map.removeOverlay(allOverlay[length]);
        }

        function getBoundary(countyName) {
            var bdary = new BMap.Boundary();
            bdary.get(countyName, function (rs) {       //��ȡ��������
                //map.clearOverlays();        //�����ͼ������
                var count = rs.boundaries.length; //��������ĵ��ж��ٸ�
                for (var i = 0; i < count; i++) {
                    var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 1, strokeColor: "#ff0000"}); //��������θ�����
                    map.addOverlay(ply);  //��Ӹ�����
                    map.setViewport(ply.getPath());    //������Ұ
                }
            });
        }

        map.enableScrollWheelZoom(true);
        map.addOverlay(top_left_control);
        map.addOverlay(top_left_navigation);
    });
});