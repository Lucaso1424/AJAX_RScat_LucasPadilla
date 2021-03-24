// CARGAMOS EL data DEL JSON DEL opendata
function cargarMapaLeaflet(data) {
    const tilesProvider = "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png";

    // CREAMOS UN ARRAY PARA GUARDAR LAS COORDENADAS Y NOMBRES DE LOS SITIOS
    let datos = [];

    // RECORREMOS EL SITIO, Y HACEMOS UN PUSH PARA GUARDARLOS EN EL ARRAY
    for (let i = 0; i < data.length; i++) {
        datos.push([data[i].latitud, data[i].longitud, data[i].nom]);
    }

    // DECLARAMOS UNA VARIABLE DONDE DEFINIMOS EL ID DEL DIV PARA IMPRIMIT EL MAPA, Y 
    // AÑADIMOS LAS COORDENADAS CON EL setView (PRIMER PARAMETRO, LATITUD Y LONGITUD, SEGUNDO PARAMETRO EL SUM)
    const myMap = L.map('myMap').setView([41.392109, 2.170840], 13);

    L.tileLayer(tilesProvider, {
        // ZOOM DEL MAPA DEL LEAFLET
        maxZoom: 18
        // LO AÑADIMOS A LA VARIABLE DE myMaps
    }).addTo(myMap);

    console.log(datos);

    // RECORREMOS CON UN forEach CADA ARRAY DEL DATOS Y SE MARCA CON EL L.marker()
    datos.forEach((element) => {
        const marker = L.marker([element[0], element[1]], {
            // AÑADIMOS EL TITULO CON EL data[i].nom, UTILIZANDO EL datos
            title: element[2],
            // FINALMENTE, LO AÑADIMOS AL myMap CON addTo
        }).addTo(myMap);
    });
}