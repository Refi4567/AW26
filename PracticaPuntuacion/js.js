function muertes(){
    muertosC = new Array(7);
    suma=0;
    for(let i=0; i< muertosC.length; i++){
        let valor = prompt("Captura numero de muertos");
        muertosC[i]=valor;
        suma+=parseFloat(valor);
    }
    let cadena=''
    for(let indice in muertosC){
        cadena+= '<div style="background-color: pink; width: 20%; color: black; text-align: center; border: gray 5px solid;">Numero de muertos: '+muertosC[indice]+'</div>';
    }
    document.getElementById("imprimir").innerHTML=cadena;
    let min=Math.min(...muertosC);
    let max=Math.max(...muertosC);
    let prom=suma/7;

    document.getElementById("stats").innerText="Minimo de muertes: "+min+" Maximo de muertes: "+max+" Promedio de muertes: "+prom;
}
function letra(){
    arregloB= new Array(5);
    for(let i=0; i<5; i++){
        arregloB[i]=new Array(4);
    }
    arregloB[0][0]='<div>X</div>';
    arregloB[0][1]='<div>X</div>';
    arregloB[0][2]='<div>X</div>';
    arregloB[0][3]='<div>X</div>';

    arregloB[1][0]='<div>X</div>';
    arregloB[1][1]='<div style="color: white">X</div>';
    arregloB[1][2]='<div style="color: white">X</div>';
    arregloB[1][3]='<div style="color: white">X</div>';

    arregloB[2][0]='<div>X</div>';
    arregloB[2][1]='<div>X</div>';
    arregloB[2][2]='<div>X</div>';
    arregloB[2][3]='<div>X</div>';

    arregloB[3][0]='<div>X</div>';
    arregloB[3][1]='<div style="color: white">X</div>';
    arregloB[3][2]='<div style="color: white">X</div>';
    arregloB[3][3]='<div style="color: white">X</div>';

    arregloB[4][0]='<div>X</div>';
    arregloB[4][1]='<div>X</div>';
    arregloB[4][2]='<div>X</div>';
    arregloB[4][3]='<div>X</div>';

    let cad='';

    for(let i=0; i<arregloB.length; i++){
        cad += '<div style="display: flex;">';
    for (let j = 0; j < arregloB[i].length; j++) {
        cad += arregloB[i][j];
    }
    cad += '</div>';
    }
    document.getElementById("imprimir3").innerHTML=cad;
}

function calcular() {
    let precios = new Array(3);

    for (let i = 0; i < 3; i++) {
    precios[i] = new Array(3);
    }

    precios[0][0] = 120;
    precios[0][1] = 180;
    precios[0][2] = 280;

    precios[1][0] = 120;
    precios[1][1] = 280;
    precios[1][2] = 340;

    precios[2][0] = 240;
    precios[2][1] = 520;
    precios[2][2] = 890;

    let total=0;
    let puesto = document.getElementById("puesto").value;
    let nivel = document.getElementById("nivel").value;
    let horas = document.getElementById("horas").value;
    total = precios[puesto][nivel] * horas;
    document.getElementById("total").value = "$" + total;
}


let agenda = new Array(7);

for (let i = 0; i < 7; i++) {
    agenda[i] = new Array(3);
}

function guardarAgenda() {
    let dia = document.getElementById("dia").value;
    let hora = document.getElementById("hora").value;
    let evento = document.getElementById("evento").value;
    let descripcion = document.getElementById("descripcion").value;

    if (hora == "" || evento == "" || descripcion == "") {
        alert("Completa todos los campos");
        return;
    }

    agenda[dia][0] = hora;
    agenda[dia][1] = evento;
    agenda[dia][2] = descripcion;

    document.getElementById("hora" + dia).innerHTML = agenda[dia][0];
    document.getElementById("evento" + dia).innerHTML = agenda[dia][1];
    document.getElementById("descripcion" + dia).innerHTML = agenda[dia][2];
}



