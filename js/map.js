function cargarMapaLeaflet(data) {
    const tilesProvider = "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png";

    // CREAMOS LA LATITUD Y LONGITUD PARA GUARDAR LA INFO DEL JSON
    let latitud_mapa;
    let longitud_mapa;

    // DEFINIMOS EN LAS VARIABLES LA LATITUD DE LA POSICION DEL ARRAY 0 DEL JSON
    latitud_mapa = data[0].latitud;
    longitud_mapa = data[0].longitud;

    // DECLARAMOS UNA VARIABLE DONDE DEFINIMOS EL ID DEL DIV PARA IMPRIMIT EL MAPA, Y 
    // AÑADIMOS LAS COORDENADAS CON EL setView (PRIMER PARAMETRO, LATITUD Y LONGITUD, SEGUNDO PARAMETRO EL SUM)
    let myMap = L.map('myMap').setView([latitud_mapa, longitud_mapa], 13);

    L.tileLayer(tilesProvider, {
        // ZOOM DEL MAPA DEL LEAFLET
        maxZoom: 18
        //tileSize: 512
        // LO AÑADIMOS A LA VARIABLE DE myMaps
    }).addTo(myMap);

    let marker = L.marker([latitud_mapa, longitud_mapa]).addTo(myMap);

    // DESHABILITAMOS EL ZOOM CON DBLCLICK
    myMap.doubleClickZoom.disable();
    myMap.on('dblclick', function (e) {
        // SELECCIONAMOS UN NUEVO MARCADOR CON EL marker, AÑADIMOS LA LATITUD Y LONGITUD 
        // EN LA VARIABLE DE myMap (nuestro mapa creado anteriormente)
        let new_marker = L.marker(e.latlng).addTo(myMap);
        let markerpopup = L.popup({});
        // AÑADIMOS EL POPUP Y SETTEAMOS LA LATITUD Y LONGITUD CON LA FUNCIÓN setLatLng
        markerpopup.setLatLng(e.latlng);
        // AÑADIMOS EL CONTENIDO DEL POPUP CON LA FUNCIÓN DE setContent
        markerpopup.setContent("Popup");
        // MARCAMOS EL ENLACE DEL POPUP
        marker.bindPopup(markerpopup);
    });
}