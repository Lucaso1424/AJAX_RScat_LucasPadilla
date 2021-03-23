function cargarMapaLeaflet() {
    $.getJSON({
        // LLAMAMOS URL DEL JSON
        url: "https://analisi.transparenciacatalunya.cat/resource/yqes-rqmp.json",
        type: "GET",
        data: {
            // PONEMOS EN EL LIMITE 1000 ENTRADAS
            "$limit": 1000,
            "$$app_token": "EIsAhk53hwzCPMmgS0dA44ulq",
        }
    });

    let latitud_mapa;
    let longitud_mapa;

    // for (let i = 0; i < data.length; i++) {
    //     data[i].latitud = latitud_mapa;
    //     data[i].longitud = longitud_mapa;
    // }
    // let coordenadas = [{
        
    // }]

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
}