window.onload = function () {
    let llamada = document.getElementById("llamada");
    llamada.addEventListener("click", llamadaJSON);

    let boton = document.getElementById("boton");
    boton.addEventListener("click", ocultarBoton);
}

function llamadaJSON() {
    // LLAMADA FUNCIÓN getJSON 
    $.getJSON({
        // LLAMAMOS URL DEL JSON
        url: "https://analisi.transparenciacatalunya.cat/resource/yqes-rqmp.json",
        type: "GET",
        data: {
            // PONEMOS EN EL LIMITE 1000 ENTRADAS
            "$limit": 1000,
            "$$app_token": "EIsAhk53hwzCPMmgS0dA44ulq",
            // APLICAMOS UN FILTRO DE LA CLAVE DEL JSON
            //"sector": "Industrial"
        }
    }).done(function (data) {
        alert("Se han recogido " + data.length + " datos de la base de datos!");
        console.log(data);
        // LLAMAMOS A LA FUNCIÓN PASANDOLE EL DATA (EL JSON)
        imprimirTabla(data);
    });
}

function imprimirTabla(data) {
    // CREAMOS EL FORMULARIO DINAMICAMENTE
    let tabla = document.createElement("table");
    tabla.setAttribute("class", "tabla");
    tabla.setAttribute("id", "imprimir_tabla");

    // RECORREMOS EL FOR POR CADA VALOR DEL JSON
    for (let i = 0; i < data.length; i++) {
        let col = document.createElement("tr");
        col.setAttribute("class", "columna");
        col.setAttribute("id", i);

        // LE PASAMOS POR EL FOREACH, UNA CLAVE, DEL OBJECT.KEY (DEL ARRAY DEL JSON)
        Object.keys(data[i]).forEach(function (clave) {
            let td = document.createElement("td");
            td.setAttribute("class", "td_class");

            // CON EL innerText, AÑADIMOS EN EL td CADA VALOR Y LAS CLAVES DEL JSON
            td.innerText = data[i][clave];

            // IMPRIMIMOS EL TD CON EL APPENDCHILD
            col.appendChild(td);
        });

        // IMPRIMIMOS LA COLUMNA CON EL APPENDCHILD
        tabla.appendChild(col);
    }
    // HACEMOS UN APPENDCHILD DE LA TABLA DINAMICAMENTE UTILIZANDO EL DIV CON EL ID 
    document.getElementById("imprimir_tabla").appendChild(tabla);
}

function ocultarBoton() {
    document.getElementById("boton").innerHTML = "";
}