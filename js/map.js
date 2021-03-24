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

    myMap.doubleClickZoom.disable();
    myMap.on('dbclick', e => {
        let latLng = myMap.mouseEventToLatLng(e.originalEvent);
        L.marker([latLng.lat, latLng.lng]).addTo(myMap);
    });
}