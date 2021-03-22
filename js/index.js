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
            // APLICAMOS UN FILTRO DE LA CLAVE DEL JSON (LO DEJAMOS COMENTADO PARA LAS GRÁFICAS DEL GOOGLE CHART)
            // "sector": "Industrial"
        }
    }).done(function (data) {
        alert("S'han recollit " + data.length + " dades/entrades del JSON!");
        console.log(data);
        // LLAMAMOS A LA FUNCIÓN PASANDOLE EL DATA (EL JSON)
        imprimirTabla(data);

        // CARGAMOS LAS APIS DE GOOGLE DEL PACKAGE CORECHART
        google.charts.load('current', {
            'packages': ['corechart']
        });
        // CARGAMOS UN CALLBACK PARA CUANDO LAS APIS DE GOOGLE ESTÉN CARGADAS, LO LANZAMOS EN UNA FUNCIÓN ANÓNIMA
        // PARA PASAR COMO PARÁMETRO EL data (DATOS DEL JSON)
        google.charts.setOnLoadCallback(function () {
            drawChart(data)
        });
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
    // DECLARAMOS LOS LET DE LOS PROPIOS SECTORES Y LOS INICIALIZAMOS EN NULL
    let sector1 = null;
    let sector2 = null;
    let sector3 = null;
    let sector4 = null;
    let sector5 = null;

    // RECORREMOS EL FOR POR CADA VALOR DEL JSON, CON EL ATRIBUTO DE sector DEL PROPIO JSON, Y LO SUMAMOS AL CONTADOR
    for (let i = 0; i < data.length; i++) {
        if (data[i].sector == "Industrial") {
            sector1++;
        }
        if (data[i].sector == "Alimentació") {
            sector2++;
        }
        if (data[i].sector == "Financer") {
            sector3++;
        }
        if (data[i].sector == "Farmacèutic") {
            sector4++;
        }
        if (data[i].sector == "Farmacèutic") {
            sector5++;
        }
    }

    // CREAMOS LA VARIABLE DATA PARA UTILIZAR EL DATA_TABLE
    var data_table = google.visualization.arrayToDataTable([
        ['Chart', 'Chart de sectors industrial'], 
        ['Sector Industrial', sector1], 
        ['Sector Alimentació', sector2], 
        ['Sector Financer', sector3],
        ['Sector Farmacèutic', sector4],
        ['Sector Educació', sector5],
    ]);

    // DEFINIMOS LOS ATRIBUTOS DE LA GRÁFICA
    var options = {
        'title': 'Gràfic dels Sectors',
        'width': 400,
        'height': 300,
        is3D: true
    };

    // DIBUJA LAS GRÁFICAS CON EL PieChart, PASANDOLE UN document-getElementById DEL DIV PARA IMPRIMIR
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data_table, options);
}