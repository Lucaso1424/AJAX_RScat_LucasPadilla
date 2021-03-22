var contador;

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
            "sector": "Industrial"
        }
    }).done(function (data) {
        alert("Se han recogido " + data.length + " datos del JSON!");
        console.log(data);
        // LLAMAMOS A LA FUNCIÓN PASANDOLE EL DATA (EL JSON)
        imprimirTabla(data);

        // CARGAMOS LAS APIS DE GOOGLE DEL PACKAGE CORECHART
        google.charts.load('current', {'packages': ['corechart'] });
        // CARGAMOS UN CALLBACK PARA CUANDO LAS APIS DE GOOGLE ESTÉN CARGADAS
        google.charts.setOnLoadCallback(drawChart(data));
    });
}

function imprimirTabla(data) {
    // CREAMOS EL FORMULARIO DINAMICAMENTE
    let tabla = document.createElement("table");
    tabla.setAttribute("class", "tabla");
    tabla.setAttribute("id", "imprimir_tabla");

    // RECORREMOS EL FOR POR CADA VALOR DEL JSON
    for (let i = 0; i < data.length; i++) {
        contador++;
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
    console.log(contador);
}

function ocultarBoton() {
    document.getElementById("boton").innerHTML = "";
}

function drawChart(data) {
    // DECLARAMOS LOS LET DE LOS VALORES DE LOS GRÁFICOS
    let dimensi_gran;
    let dimensi_petita;
    let sector;

    // RECORREMOS EL FOR POR CADA VALOR DEL JSON
    for (let i = 0; i < data.length; i++) {
        if (data[i][2].sector == "Industrial") {
            sector++;
        }
        if (data[i][1].dimensi_petita == "Petita (entre 10 i 49 treballadors/es)") {
            dimensi_petita++;
        }
        if (data[i][1].dimensi_gran == "Gran (250 treballadors/es o més)") {
            dimensi_gran++;
        }
    }

    // CREAMOS LA VARIABLE DATA PARA UTILIZAR EL DATA_TABLE
    var data_table = google.visualization.arrayToDataTable([
        ['Chart', 'Chart de sectors industrial'],
        ['Sector industrial', sector],
        ['Dimensió gran', dimensi_gran],
        ['Dimensió petita', dimensi_petita]
    ]);

    // DEFINIMOS LOS ATRIBUTOS DE LA GRÁFICA
    var options = {
        'title': 'Las masas con sus pipsas',
        'width': 400,
        'height': 300,
        is3D: true
    };

    // DIBUJA LAS GRÁFICAS CON EL PieChart, PASANDOLE UN document-getElementById DEL DIV PARA IMPRIMIR
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data_table, options);
}