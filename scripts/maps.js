/* jshint unused: false */
/* global L */

(function(){
    'use strict';

    var map1 = L.map('map1', {
        center: [30.25, -97.75], //Austin!
        zoom: 13
    });

    //---------------------------------------

    var map2 = L.map('map2', {
        center: [30.25, -97.75], //Austin!
        zoom: 10
    });

    L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg')
        .addTo(map2);

    //---------------------------------------
})();