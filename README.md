# Map with Norwegian Government websites (2019-)
This repo contains the necessary resources to present Norwegian Government authorities geographically in an interactive, web-based map.

## Data and map projection
All data about entities and addresses have been extracted from the [Norwegian Entity Register](https://data.brreg.no/enhetsregisteret/api/docs/index.html).

The entities' street addresses have been parsed into geo coordinates, using [Google's Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview).

The map is produced with [QGIS 3.24](https://qgis.org/en/site/), using the [qgis2web](https://github.com/tomchadwin/qgis2web) plugin with [OpenLayers](https://openlayers.org/) and map tiles from [OpenStreetMap](https://www.openstreetmap.org) to produce web resources, with some post-editing of html, css and js.

## How can I use the map?
You can use the map through our [online service](https://nettarkivet.beta.nb.no/map/) or run it locally on your computer. To run the map on your own computer, download the files in the repository, and open 'index.html' in your browser.
