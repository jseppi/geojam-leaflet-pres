% Introduction to LeafletJS

# Introduction to LeafletJS

James Seppi, [TNRIS](http://www.tnris.org)

Open Austin Geo Jam - February 22, 2014

![](images/leaflet_logo.png)\

\

![](images/Open_Austin_Banner_400x80.png)\


# What is this Leaflet thing?

. . .

* Super popular *Open Source* web mapping library
* Very easy to use
* Relatively easy to understand and hack on
* Lightweight, mobile-friendly

[www.leafletjs.com](http://www.leafletjs.com)

# What is this Leaflet thing?

Created by [Vladimir Agafonkin](https://github.com/mourner), [\@mourner](http://twitter.com/mourner), now working at [MapBox](http://www.mapbox.com)

![](images/mourner.jpeg)\


# Let's Go!

First, include the Leaflet CSS and JavaScript in the `<head>` of your page:

. . .

```html
<link rel="stylesheet"
    href="//cdn.leafletjs.com/leaflet-0.7.2/leaflet.css" />

<script src="//cdn.leafletjs.com/leaflet-0.7.2/leaflet.js"></script>
```

# Then, Make a Map

. . .

```javascript
var map = L.map('map', {
    center: [30.25, -97.75], //Austin!
    zoom: 13
});
```

. . .

`L.map` takes an id of a `<div>`, so have that in your html:

. . .

```html
<div id="map" class="map"></div>
```

. . .

And this `<div>` must have a size, so specify it in your css:

. . .

```css
.map { width: 800px; height: 400px; }
```

# Tada!

<div id="map1" class="map"></div>

. . .

Wait, where is the map?

# Add a Base Tile Layer

```javascript
L.tileLayer(
    'http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg'
).addTo(map);
```
. . .

<div id="map2" class="map"></div>

. . .

Yay! We have a fully interactive map!

[MapQuest Open Street Map](http://developer.mapquest.com/web/products/open/map)

# Try Some Other Tile Layers

```javascript
L.tileLayer(
    'http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg'
).addTo(map);
```

<div id="map3" class="map"></div>

[MapQuest Open Aerial](http://developer.mapquest.com/web/products/open/map)

# Try Some Other Tile Layers

```javascript
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);
```

<div id="map4" class="map"></div>

[Open Street Map](http://www.openstreetmap.org/)

# Try Some Other Tile Layers

```javascript
L.tileLayer(
    'https://{s}.tiles.mapbox.com/v3/eleanor.mnyzxgvi/{z}/{x}/{y}.png'
).addTo(map);
```

<div id="map5" class="map"></div>

[Woodcut from MapBox](https://www.mapbox.com/blog/interactive-woodcut-map/)

# Add Markers

. . .

```javascript
L.marker([30.265108, -97.746683])
    .bindPopup("Austin City Hall")
    .addTo(map);

L.marker([30.309441, -97.666777])
    .bindPopup("University Hills Library")
    .addTo(map);
```

. . .

<div id="map6" class="map"></div>

# Bind Events

. . .

```javascript
L.marker([30.265108, -97.746683])
    .on('click', function() { alert("Austin City Hall"); })
    .addTo(map);

L.marker([30.309441, -97.666777])
    .on('click', function() { alert("University Hills Library"); })
    .addTo(map);
```

. . .

<div id="map7" class="map"></div>

# Add Vectors

. . .

```javascript
L.polygon([
    [30.19, -97.79], [30.38, -97.79],
    [30.38, -97.68], [30.19, -97.68]
]).bindPopup("I'm a Polygon!").addTo(map);
L.circle([30.26, -97.62], 4000, {color: "red", fillColor: "#f03"})
    .bindPopup("I'm a Circle!").addTo(map);
```
. . .

<div id="map8" class="map"></div>

. . .

See also `L.polyline()` and `L.rectangle()`

# Add WMS

```javascript
L.tileLayer.wms(
    "http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);
```

. . .

<div id="map9" class="map"></div>

# Add GeoJSON

TODO

<div id="map10" class="map"></div>

# Add Cooler GeoJSON

TODO

<div id="map11" class="map"></div>

Created using QGIS and [Ogre](http://ogre.adc4gis.com/)

# So Many Plugins!

TODO

<div id="map12" class="map"></div>

# Drawing Plugin

TODO

<div id="map13" class="map"></div>

# MakiMarkers Plugin

My personal favorite...

Uses MapBox Static Marker API

<div id="map14" class="map"></div>

TODO

# LeafletJS Resources

- [leafletjs.com](http://www.leafletjs.com) - Tutorials, API, Plugins
- [geojson.io](http://geojson.io) - View, edit, and export GeoJSON
- MapBox Documentation - More LeafletJS tutorials, Plugins CDN, etc.

# Thanks!

[TNRIS](http://www.tnris.org)

[james.seppi@gmail.com](mailto:james.seppi@gmail.com)

[\@hydrologee](http://twitter.com/hydrologee)

[github.com/jseppi](http://github.com/jseppi)

<hr/>

<small>
Presentation source available at [github.com/jseppi/geojam-leaflet-pres](https://github.com/jseppi/geojam-leaflet-pres)

Generated with [pandoc](http://johnmacfarlane.net/pandoc/)
</small>