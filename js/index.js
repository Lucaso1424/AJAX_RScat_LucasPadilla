window.onload = function () {
    let llamada = document.getElementById("llamada");
    llamada.addEventListener("click", llamadaJSON);
}

function llamadaJSON() {
    $.getJSON({
        url: "https://analisi.transparenciacatalunya.cat/resource/yqes-rqmp.json",
        type: "GET",
        data: {
            "$limit": 150,
            "$$app_token": "EIsAhk53hwzCPMmgS0dA44ulq"
        }
    }).done(function (data) {
        alert("Se han recogido " + data.length + " datos de la base de datos!");
        console.log(data);
    });
}

