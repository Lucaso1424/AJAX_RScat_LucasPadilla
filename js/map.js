function cargarMapaLeaflet() {
    const tilesProvider = "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png";

    // DECLARAMOS UNA VARIABLE DONDE DEFINIMOS EL ID DEL DIV PARA IMPRIMIT EL MAPA, Y 
    // AÑADIMOS LAS COORDENADAS CON EL setView (PRIMER PARAMETRO, LATITUD Y LONGITUD, SEGUNDO PARAMETRO EL SUM)
    let myMap = L.map('myMap').setView([41.39210, 2.170840], 13);

    L.tileLayer(tilesProvider, {
        // ZOOM DEL MAPA DEL LEAFLET
        maxZoom: 18
        //tileSize: 512
        // LO AÑADIMOS A LA VARIABLE DE myMap
    }).addTo(myMap);

    let marker = L.marker([41.39210, 2.170840]).addTo(myMap);

    // DESHABILITAMOS EL ZOOM CON DBLCLICK
    myMap.doubleClickZoom.disable();
    myMap.on('dblclick', function (e) {
        // SELECCIONAMOS UN NUEVO MARCADOR CON EL marker, AÑADIMOS LA LATITUD Y LONGITUD 
        // EN LA VARIABLE DE myMap (nuestro mapa creado anteriormente)
        let new_marker = L.marker(e.latlng).addTo(myMap);
        let markerpopup = L.popup({
        });
       // AÑADIMOS EL POPUP Y SETTEAMOS LA LATITUD Y LONGITUD CON LA FUNCIÓN setLatLng
        markerpopup.setLatLng(e.latlng);
        // AÑADIMOS EL CONTENIDO DEL POPUP CON LA FUNCIÓN DE setContent
        markerpopup.setContent("Popup");     
        // MARCAMOS EL ENLACE DEL POPUP
        marker.bindPopup(markerpopup);
    });
}