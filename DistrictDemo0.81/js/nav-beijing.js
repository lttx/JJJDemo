

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
        //map.centerAndZoom(new BMap.Point(116.415499, 39.908652),11);
        //var map = new BMap.Map('map');
        map.centerAndZoom("北京",11);
        var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// ���Ͻǣ���ӱ�����
        var top_left_navigation = new BMap.NavigationControl();  //���Ͻǣ����Ĭ������ƽ�ƿؼ�

        var countyNameArray = [];
        countyNameArray.push("北京");
        for(var i = 0;i < countyNameArray.length; i++){
            getBoundary(countyNameArray[i]);
        }
        var realPoints= [];
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



        var boundaries = [];
        boundaries.push(
            [115.572558,39.81745],
            [115.547262,39.826316],
            [115.521966,39.851137],
            [115.528865,39.881264],
            [115.515067,39.88835],
            [115.526565,39.907835],
            [115.452976,39.948558],
            [115.434578,39.955638],
            [115.436878,39.991026],
            [115.455275,40.003407],
            [115.459875,40.031699],
            [115.577157,40.105908],
            [115.609353,40.105908],
            [115.616252,40.120034],
            [115.69674,40.146512],
            [115.749632,40.139452],
            [115.791026,40.1818],
            [115.855417,40.164158],
            [115.958901,40.262892],
            [115.922107,40.366758],
            [115.779528,40.484512],
            [115.837019,40.591541],
            [116.002595,40.582774],
            [116.115278,40.62309],
            [116.145174,40.666883],
            [116.255558,40.789351],
            [116.464827,40.777114],
            [116.342945,40.93078],
            [116.388938,40.942988],
            [116.476325,40.902867],
            [116.462527,40.986569],
            [116.563713,40.993539],
            [116.614305,40.983083],
            [116.632702,41.061461],
            [116.706292,41.040569],
            [116.692494,40.967397],
            [117.025945,40.700147],
            [117.506574,40.675638],
            [117.499675,40.637107],
            [117.442183,40.630099],
            [117.426086,40.581021],
            [117.370894,40.570499],
            [117.269709,40.544189],
            [117.226015,40.503825],
            [117.26051,40.442355],
            [117.242113,40.373794],
            [117.338699,40.282269],
            [117.39619,40.192383],
            [117.249012,40.10944],
            [117.037443,40.029931],
            [116.899463,40.047608],
            [116.78678,40.028163],
            [116.770682,39.968026],
            [116.802877,39.895437],
            [116.92016,39.845819],
            [116.927059,39.773099],
            [116.901763,39.694972],
            [116.85117,39.622092],
            [116.708591,39.593629],
            [116.554514,39.598967],
            [116.448729,39.525985],
            [116.44183,39.45649],
            [116.354443,39.454708],
            [116.230262,39.575835],
            [115.981898,39.600746],
            [115.917507,39.597188],
            [115.825521,39.525985],
            [115.710538,39.565155],
            [115.602454,39.595409],
            [115.498969,39.732271],
            [115.450676,39.789069],
            [115.570258,39.812129]
        );
        var Nvert = boundaries.length;
        var vertX = [];
        var vertY = [];
        for(var i =0;i<Nvert;i++){
            vertX.push(boundaries[i][1]);
            vertY.push(boundaries[i][0]);
        }
        var newPoints = generatePoint(40.54,39.52,20,117.12,115.972,25);
        for(var x = 0; x < newPoints.length; x++){
            realPoints.push(newPoints[x]);
        }
        for(var i=0;i<realPoints.length;i++){
            var lng = realPoints[i][0];
            var lat = realPoints[i][1];
            var point = new BMap.Point(lng,lat);
            var options = {};
            var marker = new BMap.Marker(point,options);
            map.addOverlay(marker);
        }

        setMarkerAnimation();


        map.addEventListener("click",function(e){
           alert(e.point.lng.toString()+','+ e.point.lat.toString());
        });

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

        function generatePoint(latMax,latMin,latCount,lngMax,lngMin,lngCount){
            var value=[];
            var latInterval = (latMax-latMin)/latCount;
            var lngInterval = (lngMax-lngMin)/lngCount;
            for(var lat = latMin; lat < latMax; lat += latInterval){
                for(var lng = lngMin; lng < lngMax;lng += lngInterval){
                    var temp = [];
                    var tempLat =lat;
                    var tempLng = lng;
                    if(pnpoly(Nvert,vertX,vertY,tempLat,tempLng)){
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
            var j=0;
            var c=0;
            for(i=0,j = Nvert-1; i<Nvert; j=i++){
                if(((vertX[i]>testY)!=(vertY[j]>testY)) &&
                    (testX < (vertX[j]-vertX[i]) * (testY-vertY[i]) / ((vertY[j]-vertY[i]) + vertX[i]))){
                    c = !c;
                }
            }
            return c;
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
                position : point,    // ָ���ı���ע���ڵĵ���λ��
                offset   : new BMap.Size(30, -30)    //�����ı�ƫ����
            };
            var label = new BMap.Label("lng: "+lng.toString()+", lat: "+lat.toString(), opts);  // �����ı���ע����
            label.setStyle({
                color : "white",
                fontSize : "12px",
                height : "20px",
                lineHeight : "20px",
                fontFamily:"΢���ź�"
            });
            map.addOverlay(label);
        }
        function showArea(e){
            var lat = e.point.lat;
            var lng = e.point.lng;
            var point = new BMap.Point(lng,lat);
            var radius = 1000; //��λm
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
            bdary.get(countyName, function(rs){       //��ȡ��������
                //map.clearOverlays();        //�����ͼ������
                var count = rs.boundaries.length; //��������ĵ��ж��ٸ�
                for(var i = 0; i < count; i++){
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


