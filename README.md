# Map with Norwegian Government websites (2019-)
This map presents Norwegian Government authorities geographically, based on their main location.

## Data and map projection
All data about entities and addresses have been extracted from the [Norwegian Entity Register](https://data.brreg.no/enhetsregisteret/api/docs/index.html).

Addresses have been parsed into geo coordinates, using the [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview).

The map is produced with [QGIS 3.24](https://qgis.org/en/site/), using the [qgis2web](https://github.com/tomchadwin/qgis2web) plugin with [OpenLayers](https://openlayers.org/) and map tiles from [OpenStreetMap](https://www.openstreetmap.org), with some post-editing of the html-, css- and js-files.

## How can I use the map?
You can use this map through our [online service](https://nettarkivet.beta.nb.no/map/) or run it locally on your computer.

### Online service
Navigate to https://nettarkivet.beta.nb.no/map/

### Run locally
To run the map locally on your computer, download the files in the repository.
Then open 'index.html' in your browser.

All news sites are represented with a red dot. Clicking on it will display a pop-up window with the name of the publication and a link to Norwegian Web Archive, displaying indexed versions of the sites front page.
