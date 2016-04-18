// Avoid `console` errors in browsers that lack a console.
"use strict";

$(document).ready(function () {


    //dragable mobile
    var drag;
    if ($(window).width() < 796) { drag = true; } else { drag = true; }

    /* Color Picker */

    //demo
    jQuery('.picker-btn').on("click", function () {
        if (jQuery('.color-picker').css('right') == '0px') {
            jQuery('.color-picker').animate({ "right": "-223px" }, "slow");
        } else {
            jQuery('.color-picker').animate({ "right": "0px" }, "slow");
        }
    });
    setTimeout(function () {
        jQuery('.color-picker').animate({ "right": "-223px" }, "slow");
    }, 4000);

    var currentColor = 'black';
    $('body').addClass(currentColor);

    $('.picker-blue').on("click", function () {
        $('body').removeClass(currentColor);
        $('body').addClass('blue');
        currentColor = 'blue';
        wpgmappity_maps_loaded();
    });
    $('.picker-black').on("click", function () {
        $('body').removeClass(currentColor);
        $('body').addClass('black');
        currentColor = 'black';
        wpgmappity_maps_loaded();
    });
    $('.picker-green').on("click", function () {
        $('body').removeClass(currentColor);
        $('body').addClass('green');
        currentColor = 'green';
        wpgmappity_maps_loaded();
    });
    $('.picker-yellow').on("click", function () {
        $('body').removeClass(currentColor);
        $('body').addClass('yellow');
        currentColor = 'yellow';
        wpgmappity_maps_loaded();
    });
    $('.picker-red').on("click", function () {
        $('body').removeClass(currentColor);
        $('body').addClass('red');
        currentColor = 'red';
        wpgmappity_maps_loaded();
    });
    $('.picker-violet').on("click", function () {
        $('body').removeClass(currentColor);
        $('body').addClass('violet');
        currentColor = 'violet';
        wpgmappity_maps_loaded();
    });
    $('.picker-ocre').on("click", function () {
        $('body').removeClass(currentColor);
        $('body').addClass('ocre');
        currentColor = 'ocre';
        wpgmappity_maps_loaded();
    });
    $('.picker-orange').on("click", function () {
        $('body').removeClass(currentColor);
        $('body').addClass('orange');
        currentColor = 'orange';
        wpgmappity_maps_loaded();
    });
    $('.dark-version').on("click", function () {
        $('body').addClass('darker');
    });
    $('.light-version').on("click", function () {
        $('body').removeClass('darker');
    });

    /* googleMaps Footer Map */
    var blue = "#768FAC"
    var violet = "#B95D82"
    var black = "#030303"
    var green = "#77be32"
    var yellow = "#CBB774"
    var ocre = "#B5AD6C"
    var orange = "#fda527"
    var red = "#CA0021"

    var color = red // set your map color here! (blue, black, green, yellow, purple, orange...)
    var saturation = 100
    function wpgmappity_maps_loaded() {
        var pointerUrl = 'images/map/pointer-' + currentColor + '.png' // set your color pointer here! (pointer-blue/green/yellow/fucsia/purple/turquoise/red/orange.png)
        switch (currentColor) {
            case ('blue'):
                var color = blue;
                var saturation = 100;
                break;
            case ('black'):
                var color = black;
                var saturation = -100;
                break;
            case ('green'):
                var color = green;
                var saturation = 100;
                break;
            case ('yellow'):
                var color = yellow;
                var saturation = 100;
                break;
            case ('ocre'):
                var color = ocre;
                var saturation = 100;
                break;
            case ('red'):
                var color = red;
                var saturation = 100;
                break;
            case ('orange'):
                var color = orange;
                var saturation = 100;
                break;
            case ('violet'):
                var color = violet;
                var saturation = 100;
                break;
        }
        // -37.82656	144.96294
        var latlng = new google.maps.LatLng(-37.82656, 144.96294); //<!-- (Fist Value Longitude, Second Value Latitude), can obtain YOUR coordenates here!: http://universimmedia.pagesperso-orange.fr/geo/loc.htm -->
        var styles = [
			{
			    "featureType": "landscape",
			    "stylers": [
					{ "hue": "#000" },
					{ "saturation": -100 },
					{ "lightness": 40 },
					{ "gamma": 1 }
			    ]
			},
			{
			    "featureType": "road.highway",
			    "stylers": [
					{ "hue": color },
					{ "saturation": saturation },
					{ "lightness": 20 },
					{ "gamma": 1 }
			    ]
			},
			{
			    "featureType": "road.arterial",
			    "stylers": [
					{ "hue": color },
					{ "saturation": saturation },
					{ "lightness": 20 },
					{ "gamma": 1 }
			    ]
			},
			{
			    "featureType": "road.local",
			    "stylers": [
					{ "hue": color },
					{ "saturation": saturation },
					{ "lightness": 50 },
					{ "gamma": 1 }
			    ]
			},
			{
			    "featureType": "water",
			    "stylers": [
					{ "hue": "#000" },
					{ "saturation": -100 },
					{ "lightness": 15 },
					{ "gamma": 1 }
			    ]
			},
			{
			    "featureType": "poi",
			    "stylers": [
					{ "hue": "#000" },
					{ "saturation": -100 },
					{ "lightness": 25 },
					{ "gamma": 1 }
			    ]
			}
        ];
        var options = {
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            draggable: drag,
            scrollwheel: false,
            panControl: false, zoom: 15,
            styles: styles
        };
        var wpgmappitymap = new google.maps.Map(document.getElementById('wpgmappitymap'), options);
        var point0 = new google.maps.LatLng(-37.82656, 144.96294); // <!-- (Fist Value Longitude, Second Value Latitude), can obtain YOUR coordenates here!: http://universimmedia.pagesperso-orange.fr/geo/loc.htm -->
        var marker0 = new google.maps.Marker({
            position: point0,
            map: wpgmappitymap,
            icon: pointerUrl //Custom Pointer URL
        });

        //var point1 = new google.maps.LatLng(-37.82656, 144.96294);

        google.maps.event.addListener(marker0, 'click',
		 function () {
		     if (infowindow != undefined) {
		         if (infoWindow != null) {
		             infoWindow.close();
		         }
		     }

		     var infowindow = new google.maps.InfoWindow(
             { content: 'Macro Melbourne<br/>42-48 Balston Street Southbank Melbourne, Victoria Australia' });

		     infowindow.open(wpgmappitymap, marker0);
		 });
    }
    window.onload = function () {
        wpgmappity_maps_loaded();
    };





    /* End */
});