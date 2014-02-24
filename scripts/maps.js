/* jshint unused: false */
/* global L */
/* global w3c_slidy */
/* global alert */
/* global xhr */

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
            zoom: 10,
            zoomControl: false
        });
        L.tileLayer("http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg")
            .addTo(newMap);
        return newMap;
    };

    var map1 = L.map("map1", {
        center: [30.25, -97.75],
        zoom: 13,
        zoomControl: false
    });

    //---------------------------------------

    var map2 = L.map("map2", {
        center: [30.25, -97.75],
        zoom: 10,
        zoomControl: false
    });

    L.tileLayer("http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg")
        .addTo(map2);

    //---------------------------------------

    var map3 = L.map("map3", {
        center: [30.25, -97.75],
        zoom: 10,
        zoomControl: false
    });

    L.tileLayer("http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg")
        .addTo(map3);

    //---------------------------------------

    var map4 = L.map("map4", {
        center: [30.25, -97.75],
        zoom: 10,
        zoomControl: false
    });

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
        .addTo(map4);

    //---------------------------------------

    var map5 = L.map("map5", {
        center: [30.25, -97.75],
        zoom: 10,
        zoomControl: false
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
    L.circle([30.26, -97.62], 4000, {color: "red", fillColor: "#f03"})
        .bindPopup("I'm a Circle!").addTo(map8);

    //---------------------------------------

    var map9 = makeSimpleMap("map9");
    L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
        layers: "nexrad-n0r-900913",
        format: "image/png",
        transparent: true,
        attribution: "Weather data © 2012 IEM Nexrad"
    }).addTo(map9);

    //---------------------------------------

    var map10 = makeSimpleMap("map10");
    xhr("data/moontowers.geojson", function(err, resp) {
        var data = JSON.parse(resp.response);

        L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.ADDRESS);
            }
        }).addTo(map10);
    });

    //---------------------------------------

    var map11 = makeSimpleMap("map11");
    map11.setView([31.782007282245047, -99.41841466119513], 6,
        {animate: false});
    xhr("data/tnris.geojson", function(err, resp) {
        var data = JSON.parse(resp.response);

        L.geoJson(data).addTo(map11);
    });

    //---------------------------------------

    var map12 = makeSimpleMap("map12");
    var drawControl = new L.Control.Draw();
    map12.addControl(drawControl);

    map12.on("draw:created", function (e) {
        var type = e.layerType,
            layer = e.layer;

        map12.addLayer(layer);
    });

    //---------------------------------------

    var map13 = makeSimpleMap("map13");
    var beerIcon = L.MakiMarkers.icon({
        icon: "beer",
        color: "#12a",
        size: "l"
    });

    L.marker([30.31096, -97.74277], {
        icon: beerIcon
    }).addTo(map13);

    //---------------------------------------

    var map14 = makeSimpleMap("map14");
    L.marker([30.31096, -97.74277], {
        icon: beerIcon
    }).addTo(map14)
    .bindPopup("<b>Large Beer!</b>");

    var rocketIcon = L.MakiMarkers.icon({
        icon: "rocket",
        color: "#b0b",
        size: "m"
    });

    L.marker([30.287, -97.72], {
        icon: rocketIcon
    }).addTo(map14)
    .bindPopup("<b>Medium Rocket!</b>");


    var warehouseIcon = L.MakiMarkers.icon({
        icon: "warehouse",
        color: "#0a0",
        size: "s",
        iconSize: [20, 50]
    });

    L.marker([30.26672, -97.74541], {
        icon: warehouseIcon
    }).addTo(map14).bindPopup("<b>Small Warehouse!</b>");
})();