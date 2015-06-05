$(document).ready(function() {
    /**
     * Created by lantian on 2015/6/1.
     */
    $(".navbar li").click(function () {
        $(this).siblings().removeClass("active-nav-item").addClass("nav-item");
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
        map.centerAndZoom(new BMap.Point(105.694761, 35.907521), 6);
        //map.centerAndZoom("����",10);
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// ���Ͻǣ���ӱ�����
        var top_left_navigation = new BMap.NavigationControl();  //���Ͻǣ����Ĭ������ƽ�ƿؼ�

        realPoints = [];
        realPoints.push(
            {name:'����', geoCoord:[121.15, 31.89]},
            {name:'������˹', geoCoord:[109.781327, 39.608266]},
            {name:'��Զ', geoCoord:[120.38, 37.35]},
            {name:'��ɽ', geoCoord:[122.207216, 29.985295]},
            {name:'�������', geoCoord:[123.97, 47.33]},
            {name:'�γ�', geoCoord:[120.13, 33.38]},
            {name:'���', geoCoord:[118.87, 42.28]},
            {name:'�ൺ', geoCoord:[120.33, 36.07]},
            {name:'��ɽ', geoCoord:[121.52, 36.89]},
            {name:'���', geoCoord:[102.188043, 38.520089]},
            {name:'Ȫ��', geoCoord:[118.58, 24.93]},
            {name:'����', geoCoord:[120.53, 36.86]},
            {name:'����', geoCoord:[119.46, 35.42]},
            {name:'����', geoCoord:[119.97, 35.88]},
            {name:'��ͨ', geoCoord:[121.05, 32.08]},
            {name:'����', geoCoord:[91.11, 29.97]},
            {name:'�Ƹ�', geoCoord:[112.02, 22.93]},
            {name:'÷��', geoCoord:[116.1, 24.55]},
            {name:'�ĵ�', geoCoord:[122.05, 37.2]},
            {name:'�Ϻ�', geoCoord:[121.48, 31.22]},
            {name:'��֦��', geoCoord:[101.718637, 26.582347]},
            {name:'����', geoCoord:[122.1, 37.5]},
            {name:'�е�', geoCoord:[117.93, 40.97]},
            {name:'����', geoCoord:[118.1, 24.46]},
            {name:'��β', geoCoord:[115.375279, 22.786211]},
            {name:'����', geoCoord:[116.63, 23.68]},
            {name:'����', geoCoord:[124.37, 40.13]},
            {name:'̫��', geoCoord:[121.1, 31.45]},
            {name:'����', geoCoord:[103.79, 25.51]},
            {name:'��̨', geoCoord:[121.39, 37.52]},
            {name:'����', geoCoord:[119.3, 26.08]},
            {name:'�߷���', geoCoord:[121.979603, 39.627114]},
            {name:'��ī', geoCoord:[120.45, 36.38]},
            {name:'��˳', geoCoord:[123.97, 41.97]},
            {name:'��Ϫ', geoCoord:[102.52, 24.35]},
            {name:'�żҿ�', geoCoord:[114.87, 40.82]},
            {name:'��Ȫ', geoCoord:[113.57, 37.85]},
            {name:'����', geoCoord:[119.942327, 37.177017]},
            {name:'����', geoCoord:[120.1, 30.86]},
            {name:'��ͷ', geoCoord:[116.69, 23.39]},
            {name:'��ɽ', geoCoord:[120.95, 31.39]},
            {name:'����', geoCoord:[121.56, 29.86]},
            {name:'տ��', geoCoord:[110.359377, 21.270708]},
            {name:'����', geoCoord:[116.35, 23.55]},
            {name:'�ٳ�', geoCoord:[122.41, 37.16]},
            {name:'���Ƹ�', geoCoord:[119.16, 34.59]},
            {name:'��«��', geoCoord:[120.836932, 40.711052]},
            {name:'����', geoCoord:[120.74, 31.64]},
            {name:'��ݸ', geoCoord:[113.75, 23.04]},
            {name:'��Դ', geoCoord:[114.68, 23.73]},
            {name:'����', geoCoord:[119.15, 33.5]},
            {name:'̩��', geoCoord:[119.9, 32.49]},
            {name:'����', geoCoord:[108.33, 22.84]},
            {name:'Ӫ��', geoCoord:[122.18, 40.65]},
            {name:'����', geoCoord:[114.4, 23.09]},
            {name:'����', geoCoord:[120.26, 31.91]},
            {name:'����', geoCoord:[120.75, 37.8]},
            {name:'�ع�', geoCoord:[113.62, 24.84]},
            {name:'������', geoCoord:[98.289152, 39.77313]},
            {name:'����', geoCoord:[113.23, 23.16]},
            {name:'�Ӱ�', geoCoord:[109.47, 36.6]},
            {name:'̫ԭ', geoCoord:[112.53, 37.87]},
            {name:'��Զ', geoCoord:[113.01, 23.7]},
            {name:'��ɽ', geoCoord:[113.38, 22.52]},
            {name:'����', geoCoord:[102.73, 25.04]},
            {name:'�ٹ�', geoCoord:[118.73, 36.86]},
            {name:'�̽�', geoCoord:[122.070714, 41.119997]},
            {name:'����', geoCoord:[113.08, 36.18]},
            {name:'����', geoCoord:[114.07, 22.62]},
            {name:'�麣', geoCoord:[113.52, 22.3]},
            {name:'��Ǩ', geoCoord:[118.3, 33.96]},
            {name:'����', geoCoord:[108.72, 34.36]},
            {name:'ͭ��', geoCoord:[109.11, 35.09]},
            {name:'ƽ��', geoCoord:[119.97, 36.77]},
            {name:'��ɽ', geoCoord:[113.11, 23.05]},
            {name:'����', geoCoord:[110.35, 20.02]},
            {name:'����', geoCoord:[113.06, 22.61]},
            {name:'����', geoCoord:[117.53, 36.72]},
            {name:'����', geoCoord:[112.44, 23.05]},
            {name:'����', geoCoord:[121.62, 38.92]},
            {name:'�ٷ�', geoCoord:[111.5, 36.08]},
            {name:'�⽭', geoCoord:[120.63, 31.16]},
            {name:'ʯ��ɽ', geoCoord:[106.39, 39.04]},
            {name:'����', geoCoord:[123.38, 41.8]},
            {name:'����', geoCoord:[120.62, 31.32]},
            {name:'ï��', geoCoord:[110.88, 21.68]},
            {name:'����', geoCoord:[120.76, 30.77]},
            {name:'����', geoCoord:[125.35, 43.88]},
            {name:'����', geoCoord:[120.03336, 36.264622]},
            {name:'����', geoCoord:[106.27, 38.47]},
            {name:'�żҸ�', geoCoord:[120.555821, 31.875428]},
            {name:'����Ͽ', geoCoord:[111.19, 34.76]},
            {name:'����', geoCoord:[121.15, 41.13]},
            {name:'�ϲ�', geoCoord:[115.89, 28.68]},
            {name:'����', geoCoord:[109.4, 24.33]},
            {name:'����', geoCoord:[109.511909, 18.252847]},
            {name:'�Թ�', geoCoord:[104.778442, 29.33903]},
            {name:'����', geoCoord:[126.57, 43.87]},
            {name:'����', geoCoord:[111.95, 21.85]},
            {name:'����', geoCoord:[105.39, 28.91]},
            {name:'����', geoCoord:[101.74, 36.56]},
            {name:'�˱�', geoCoord:[104.56, 29.77]},
            {name:'���ͺ���', geoCoord:[111.65, 40.82]},
            {name:'�ɶ�', geoCoord:[104.06, 30.67]},
            {name:'��ͬ', geoCoord:[113.3, 40.12]},
            {name:'��', geoCoord:[119.44, 32.2]},
            {name:'����', geoCoord:[110.28, 25.29]},
            {name:'�żҽ�', geoCoord:[110.479191, 29.117096]},
            {name:'����', geoCoord:[119.82, 31.36]},
            {name:'����', geoCoord:[109.12, 21.49]},
            {name:'����', geoCoord:[108.95, 34.27]},
            {name:'��̳', geoCoord:[119.56, 31.74]},
            {name:'��Ӫ', geoCoord:[118.49, 37.46]},
            {name:'ĵ����', geoCoord:[129.58, 44.6]},
            {name:'����', geoCoord:[106.9, 27.7]},
            {name:'����', geoCoord:[120.58, 30.01]},
            {name:'����', geoCoord:[119.42, 32.39]},
            {name:'����', geoCoord:[119.95, 31.79]},
            {name:'Ϋ��', geoCoord:[119.1, 36.62]},
            {name:'����', geoCoord:[106.54, 29.59]},
            {name:'̨��', geoCoord:[121.420757, 28.656386]},
            {name:'�Ͼ�', geoCoord:[118.78, 32.04]},
            {name:'����', geoCoord:[118.03, 37.36]},
            {name:'����', geoCoord:[106.71, 26.57]},
            {name:'����', geoCoord:[120.29, 31.59]},
            {name:'��Ϫ', geoCoord:[123.73, 41.3]},
            {name:'��������', geoCoord:[84.77, 45.59]},
            {name:'μ��', geoCoord:[109.5, 34.52]},
            {name:'��ɽ', geoCoord:[118.48, 31.56]},
            {name:'����', geoCoord:[107.15, 34.38]},
            {name:'����', geoCoord:[113.21, 35.24]},
            {name:'����', geoCoord:[119.16, 31.95]},
            {name:'����', geoCoord:[116.46, 39.92]},
            {name:'����', geoCoord:[117.2, 34.26]},
            {name:'��ˮ', geoCoord:[115.72, 37.72]},
            {name:'��ͷ', geoCoord:[110, 40.58]},
            {name:'����', geoCoord:[104.73, 31.48]},
            {name:'��³ľ��', geoCoord:[87.68, 43.77]},
            {name:'��ׯ', geoCoord:[117.57, 34.86]},
            {name:'����', geoCoord:[120.19, 30.26]},
            {name:'�Ͳ�', geoCoord:[118.05, 36.78]},
            {name:'��ɽ', geoCoord:[122.85, 41.12]},
            {name:'����', geoCoord:[119.48, 31.43]},
            {name:'�����', geoCoord:[86.06, 41.68]},
            {name:'����', geoCoord:[114.35, 36.1]},
            {name:'����', geoCoord:[114.35, 34.79]},
            {name:'����', geoCoord:[117, 36.65]},
            {name:'����', geoCoord:[104.37, 31.13]},
            {name:'����', geoCoord:[120.65, 28.01]},
            {name:'�Ž�', geoCoord:[115.97, 29.71]},
            {name:'����', geoCoord:[114.47, 36.6]},
            {name:'�ٰ�', geoCoord:[119.72, 30.23]},
            {name:'����', geoCoord:[103.73, 36.03]},
            {name:'����', geoCoord:[116.83, 38.33]},
            {name:'����', geoCoord:[118.35, 35.05]},
            {name:'�ϳ�', geoCoord:[106.110698, 30.837793]},
            {name:'���', geoCoord:[117.2, 39.13]},
            {name:'����', geoCoord:[119.95, 30.07]},
            {name:'̩��', geoCoord:[117.13, 36.18]},
            {name:'����', geoCoord:[120.23, 29.71]},
            {name:'֣��', geoCoord:[113.65, 34.76]},
            {name:'������', geoCoord:[126.63, 45.75]},
            {name:'�ĳ�', geoCoord:[115.97, 36.45]},
            {name:'�ߺ�', geoCoord:[118.38, 31.33]},
            {name:'��ɽ', geoCoord:[118.02, 39.63]},
            {name:'ƽ��ɽ', geoCoord:[113.29, 33.75]},
            {name:'��̨', geoCoord:[114.48, 37.05]},
            {name:'����', geoCoord:[116.29, 37.45]},
            {name:'����', geoCoord:[116.59, 35.38]},
            {name:'����', geoCoord:[112.239741, 30.335165]},
            {name:'�˲�', geoCoord:[111.3, 30.7]},
            {name:'����', geoCoord:[120.06, 29.32]},
            {name:'��ˮ', geoCoord:[119.92, 28.45]},
            {name:'����', geoCoord:[112.44, 34.7]},
            {name:'�ػʵ�', geoCoord:[119.57, 39.95]},
            {name:'����', geoCoord:[113.16, 27.83]},
            {name:'ʯ��ׯ', geoCoord:[114.48, 38.03]},
            {name:'����', geoCoord:[117.67, 36.19]},
            {name:'����', geoCoord:[111.69, 29.05]},
            {name:'����', geoCoord:[115.48, 38.85]},
            {name:'��̶', geoCoord:[112.91, 27.87]},
            {name:'��', geoCoord:[119.64, 29.12]},
            {name:'����', geoCoord:[113.09, 29.37]},
            {name:'��ɳ', geoCoord:[113, 28.21]},
            {name:'����', geoCoord:[118.88, 28.97]},
            {name:'�ȷ�', geoCoord:[116.7, 39.53]},
            {name:'����', geoCoord:[115.480656, 35.23375]},
            {name:'�Ϸ�', geoCoord:[117.27, 31.86]},
            {name:'�人', geoCoord:[114.31, 30.52]},
            {name:'����', geoCoord:[125.03, 46.58]}
        );
        map.addEventListener("click",function(e){
            alert(e.point.lng.toString() + ','+ e.point.lat.toString());
        });
        for (var i = 0; i < realPoints.length; i++) {
            var lng = realPoints[i].geoCoord[0]+ Math.random() * 5 * -1;
            var lat = realPoints[i].geoCoord[1]+ Math.random() * 3 * -1;
            var point = new BMap.Point(lng, lat);
            var options = {};
            var marker = new BMap.Marker(point, options);
            //marker.addEventListener("mousedown", showArea);
            //marker.addEventListener("mouseup", deleteLastOverlay);
            //marker.addEventListener("mouseover", showLatLng);
            //marker.addEventListener("mouseout", deleteLastOverlay);
            map.addOverlay(marker);
        }
        setMarkerAnimation();

        function setMarkerAnimation(){
            var overlays = map.getOverlays();
            setInterval(function(){
                for (var j = 0; j< overlays.length; j++){
                    var marker = overlays[j];
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                    marker.setAnimation(null);
                }
            },1000*60*3);

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