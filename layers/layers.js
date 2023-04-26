var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kommuner_1 = new ol.format.GeoJSON();
var features_kommuner_1 = format_kommuner_1.readFeatures(json_kommuner_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuner_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuner_1.addFeatures(features_kommuner_1);
var lyr_kommuner_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kommuner_1, 
                style: style_kommuner_1,
                interactive: true,
                title: '<img src="styles/legend/kommuner_1.png" /> kommuner'
            });
var format_speshelsetj_2 = new ol.format.GeoJSON();
var features_speshelsetj_2 = format_speshelsetj_2.readFeatures(json_speshelsetj_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_speshelsetj_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_speshelsetj_2.addFeatures(features_speshelsetj_2);
var lyr_speshelsetj_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_speshelsetj_2, 
                style: style_speshelsetj_2,
                interactive: true,
                title: '<img src="styles/legend/speshelsetj_2.png" /> spes.helsetj.'
            });
var format_fylker_3 = new ol.format.GeoJSON();
var features_fylker_3 = format_fylker_3.readFeatures(json_fylker_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fylker_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fylker_3.addFeatures(features_fylker_3);
var lyr_fylker_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fylker_3, 
                style: style_fylker_3,
                interactive: true,
                title: '<img src="styles/legend/fylker_3.png" /> fylker'
            });
var format_stat_4 = new ol.format.GeoJSON();
var features_stat_4 = format_stat_4.readFeatures(json_stat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stat_4.addFeatures(features_stat_4);
var lyr_stat_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stat_4, 
                style: style_stat_4,
                interactive: true,
                title: '<img src="styles/legend/stat_4.png" /> stat'
            });

lyr_OSMStandard_0.setVisible(true);lyr_kommuner_1.setVisible(true);lyr_speshelsetj_2.setVisible(true);lyr_fylker_3.setVisible(true);lyr_stat_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kommuner_1,lyr_speshelsetj_2,lyr_fylker_3,lyr_stat_4];
lyr_kommuner_1.set('fieldAliases', {'navn': 'Navn', 'pywb-results': 'Åpne i Nettarkivet', 'geoLat-y': 'geoLat-y', 'geoLong-x': 'geoLong-x', });
lyr_speshelsetj_2.set('fieldAliases', {'navn': 'navn', 'pywb-results': 'pywb-results', 'geoLat-y': 'geoLat-y', 'geoLong-x': 'geoLong-x', });
lyr_fylker_3.set('fieldAliases', {'navn': 'Navn', 'pywb-results': 'Åpne i Nettarkivet', 'geoLat-y': 'geoLat-y', 'geoLong-x': 'geoLong-x', });
lyr_stat_4.set('fieldAliases', {'navn': 'Navn', 'pywb-results': 'Åpne i Nettarkivet', 'geoLat-y': 'geoLat-y', 'geoLong-x': 'geoLong-x', });
lyr_kommuner_1.set('fieldImages', {'navn': 'TextEdit', 'pywb-results': 'TextEdit', 'geoLat-y': 'Hidden', 'geoLong-x': 'Hidden', });
lyr_speshelsetj_2.set('fieldImages', {'navn': 'TextEdit', 'pywb-results': 'TextEdit', 'geoLat-y': 'Hidden', 'geoLong-x': 'Hidden', });
lyr_fylker_3.set('fieldImages', {'navn': 'TextEdit', 'pywb-results': 'TextEdit', 'geoLat-y': 'Hidden', 'geoLong-x': 'Hidden', });
lyr_stat_4.set('fieldImages', {'navn': 'TextEdit', 'pywb-results': 'TextEdit', 'geoLat-y': 'Hidden', 'geoLong-x': 'Hidden', });
lyr_kommuner_1.set('fieldLabels', {'navn': 'no label', 'pywb-results': 'no label', });
lyr_speshelsetj_2.set('fieldLabels', {'navn': 'no label', 'pywb-results': 'no label', });
lyr_fylker_3.set('fieldLabels', {'navn': 'no label', 'pywb-results': 'no label', });
lyr_stat_4.set('fieldLabels', {'navn': 'no label', 'pywb-results': 'no label', });
lyr_stat_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});