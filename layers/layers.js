ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32751").setExtent([546258.738017, 9068810.002693, 547203.670897, 9069284.525122]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_PELANGGAN02_1 = new ol.format.GeoJSON();
var features_PELANGGAN02_1 = format_PELANGGAN02_1.readFeatures(json_PELANGGAN02_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_PELANGGAN02_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELANGGAN02_1.addFeatures(features_PELANGGAN02_1);
var lyr_PELANGGAN02_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PELANGGAN02_1, 
                style: style_PELANGGAN02_1,
                interactive: true,
                title: '<img src="styles/legend/PELANGGAN02_1.png" /> PELANGGAN 02'
            });
var format_JARINGANPIPAGIP_2 = new ol.format.GeoJSON();
var features_JARINGANPIPAGIP_2 = format_JARINGANPIPAGIP_2.readFeatures(json_JARINGANPIPAGIP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_JARINGANPIPAGIP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANPIPAGIP_2.addFeatures(features_JARINGANPIPAGIP_2);
var lyr_JARINGANPIPAGIP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JARINGANPIPAGIP_2, 
                style: style_JARINGANPIPAGIP_2,
                interactive: true,
                title: '<img src="styles/legend/JARINGANPIPAGIP_2.png" /> JARINGAN PIPA GIP'
            });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

lyr_GoogleRoad_0.setVisible(true);lyr_PELANGGAN02_1.setVisible(true);lyr_JARINGANPIPAGIP_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_PELANGGAN02_1,lyr_JARINGANPIPAGIP_2,lyr_GoogleSatellite_3];
lyr_PELANGGAN02_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Foto': 'Foto', });
lyr_JARINGANPIPAGIP_2.set('fieldAliases', {'id': 'id', 'Panjang': 'Panjang', 'Jenis Pipa': 'Jenis Pipa', });
lyr_PELANGGAN02_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_JARINGANPIPAGIP_2.set('fieldImages', {'id': 'TextEdit', 'Panjang': 'TextEdit', 'Jenis Pipa': 'TextEdit', });
lyr_PELANGGAN02_1.set('fieldLabels', {'id': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_JARINGANPIPAGIP_2.set('fieldLabels', {'id': 'inline label - always visible', 'Panjang': 'inline label - always visible', 'Jenis Pipa': 'inline label - always visible', });
lyr_JARINGANPIPAGIP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});