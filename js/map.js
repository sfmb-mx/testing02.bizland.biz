function initialize() {

    //Map parametrs
    var mapOptions = {
        zoom: 6,
        center: new google.maps.LatLng(-23.442404, -56.280028),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    }

    //map
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    //category
    var cook = 'img/icon/01.png';

    //positions
    var point1 = new google.maps.LatLng(-20.14653, -51.26318);
    var point2 = new google.maps.LatLng(-20.547, -41.16025);
    var point3 = new google.maps.LatLng(-21.14556, -47.99636);
    var point4 = new google.maps.LatLng(-22.2375, -48.69906);
    var point5 = new google.maps.LatLng(-23.36671, -54.12838);
    var point6 = new google.maps.LatLng(-23.50614, -52.83126);
    var point7 = new google.maps.LatLng(-23.4535, -52.01105);
    var point8 = new google.maps.LatLng(-24.04872, -52.4076);
    var point9 = new google.maps.LatLng(-27.00421, -52.04272);
    var point10 = new google.maps.LatLng(-28.06892, -52.00035);

    //markers
    var marker1 = new google.maps.Marker({
        position: point1,
        map: map,
        category: cook,
        icon: cook,
        title: "SIF 3772"
    });

    var marker2 = new google.maps.Marker({
        position: point2,
        map: map,
        category: cook,
        icon: cook,
        title: "SIF 957"
    });

    var marker3 = new google.maps.Marker({
        position: point3,
        map: map,
        category: cook,
        icon: cook,
        title: "SIF 1301"
    });

    var marker4 = new google.maps.Marker({
        position: point4,
        map: map,
        category: cook,
        icon: cook,
        title: "SIF 3201"
    });

    var marker5 = new google.maps.Marker({
        position: point5,
        map: map,
        category: cook,
        icon: cook,
        title: "SIF 3409"
    });

    var marker6 = new google.maps.Marker({
        position: point6,
        map: map,
        category: cook,
        icon: cook,
        title: "SIF 3925"
    });

    var marker7 = new google.maps.Marker({
        position: point7,
        map: map,
        category: cook,
        icon: cook,
        title: "SIF 2010"
    });

    var marker8 = new google.maps.Marker({
        position: point8,
        map: map,
        category: cook,
        icon: cook,
        title: "SIF 2212"
    });

    var marker9 = new google.maps.Marker({
        position: point9,
        map: map,
        category: cook,
        icon: cook,
        title: "SIF 3849"
    });

    var marker10 = new google.maps.Marker({
        position: point10,
        map: map,
        category: cook,
        icon: cook,
        title: "SIF 1850"
    });

    //information for
    function goToLink() {
        document.location.href = '3.html';
    }
    google.maps.event.addListener(marker1, 'click', goToLink);


    //Map parametrs
    var mapOptions2 = {
        zoom: 14,
        center: new google.maps.LatLng(41.154, -73.328),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    }

    //map
    var map2 = new google.maps.Map(document.getElementById("map2"), mapOptions2);

    //category
    var cook2 = 'img/icon/01.png';
    var sport2 = 'img/icon/02.png';
    var game2 = 'img/icon/03.png';
    var eco2 = 'img/icon/04.png';
    var shop2 = 'img/icon/05.png';
    var study2 = 'img/icon/06.png';
    var drink2 = 'img/icon/07.png';
    var money2 = 'img/icon/08.png';
    var bus2 = 'img/icon/09.png';

    //positions
    var point122 = new google.maps.LatLng(41.154, -73.328);


    //markers

    var marker122 = new google.maps.Marker({
        position: point122,
        map: map2,
        category: cook2,
        icon: cook2,
        title: "point122"
    });



    //information for
    function goToLink() {
        document.location.href = '3.html';
    }
    google.maps.event.addListener(marker122, 'click', goToLink);




    //Map parametrs
    var mapOptions3 = {
        zoom: 14,
        center: new google.maps.LatLng(41.163, -73.337),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    }

    //map
    var map3 = new google.maps.Map(document.getElementById("map3"), mapOptions3);

    //category
    var cook3 = 'img/icon/01.png';
    var sport3 = 'img/icon/02.png';
    var game3 = 'img/icon/03.png';
    var eco3 = 'img/icon/04.png';
    var shop3 = 'img/icon/05.png';
    var study3 = 'img/icon/06.png';
    var drink3 = 'img/icon/07.png';
    var money3 = 'img/icon/08.png';
    var bus3 = 'img/icon/09.png';

    //positions
    var point123 = new google.maps.LatLng(41.163, -73.337);


    //markers

    var marker122 = new google.maps.Marker({
        position: point123,
        map: map3,
        category: shop3,
        icon: shop3,
        title: "point123"
    });



    //information for
    function goToLink() {
        document.location.href = '3.html';
    }
    google.maps.event.addListener(marker123, 'click', goToLink);

}
