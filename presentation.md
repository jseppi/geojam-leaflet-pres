% Introduction to LeafletJS
% James Seppi, [TNRIS](http://www.tnris.org)
% Open Austin Geo Jam - February 22, 2014

# What is Leaflet?

Motivation for use, features, etc


# Let's Go!

First, include the Leaflet CSS and JavaScript in the `<head>` of your page:

. . .

```html
<link rel="stylesheet" href="//cdn.leafletjs.com/leaflet-0.7.2/leaflet.css" />

<script src="//cdn.leafletjs.com/leaflet-0.7.2/leaflet.js"></script>
```

# Make a Map

. . .

```javascript
var mymap = L.map('mymap', {
    center: [30.25, -97.75], //Austin!
    zoom: 13
});
```

. . .

`L.map` takes an id of a `<div>`, so have that in your html:

. . .

```html
<div id="mymap" class="map"></div>
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

# Add a Tile Layer

```javascript
L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg')
    .addTo(mymap);
```
. . .

<div id="map2" class="map"></div>

. . .

Yay!

# Resources

LeafletJS Tutorials and API

geojson.io - View and edit GeoJSON

LeafletJS Plugins

MapBox LeafletJS tutorials, Plugins CDN, etc