/* jshint unused: false */
/* global L */
/* global w3c_slidy */
/* global alert */

(function(){
    "use strict";

    // Disable mouse-click slide advancement so it doesn"t
    // advance when we are playing with the interactive maps
    w3c_slidy.mouse_click_enabled = false;
    w3c_slidy.sizes =  new Array("16pt", "18pt", "20pt", "22pt", "24pt", "26pt",
                    "28pt", "30pt", "32pt", "34pt", "36pt", "38pt");


    var makeSimpleMap = function(divId) {
        var newMap = L.map(divId, {
            center: [30.25, -97.75],
            zoom: 10
        });
        L.tileLayer("http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg")
            .addTo(newMap);
        return newMap;
    };

    var map1 = L.map("map1", {
        center: [30.25, -97.75],
        zoom: 13
    });

    //---------------------------------------

    var map2 = L.map("map2", {
        center: [30.25, -97.75],
        zoom: 10
    });

    L.tileLayer("http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg")
        .addTo(map2);

    //---------------------------------------

    var map3 = L.map("map3", {
        center: [30.25, -97.75],
        zoom: 10
    });

    L.tileLayer("http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg")
        .addTo(map3);

    //---------------------------------------

    var map4 = L.map("map4", {
        center: [30.25, -97.75],
        zoom: 10
    });

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
        .addTo(map4);

    //---------------------------------------

    var map5 = L.map("map5", {
        center: [30.25, -97.75],
        zoom: 10
    });

    L.tileLayer("https://{s}.tiles.mapbox.com/v3/eleanor.mnyzxgvi/{z}/{x}/{y}.png")
        .addTo(map5);

    //---------------------------------------

    var map6 = makeSimpleMap("map6");
    L.marker([30.265108, -97.746683])
        .bindPopup("Austin City Hall")
        .addTo(map6);
    L.marker([30.309441, -97.666777])
        .bindPopup("University Hills Library")
        .addTo(map6);

    //---------------------------------------

    var map7 = makeSimpleMap("map7");
    L.marker([30.265108, -97.746683])
        .on("click", function() { alert("Austin City Hall"); })
        .addTo(map7);
    L.marker([30.309441, -97.666777])
        .on("click", function() { alert("University Hills Library"); })
        .addTo(map7);

    //---------------------------------------

    var map8 = makeSimpleMap("map8");
    L.polygon([
        [30.19, -97.79],
        [30.38, -97.79],
        [30.38, -97.68],
        [30.19, -97.68]
    ]).bindPopup("I'm a Polygon!").addTo(map8);
    L.circle([30.26, -97.62], 2000)
        .bindPopup("I'm a Circle!").addTo(map8);

})();