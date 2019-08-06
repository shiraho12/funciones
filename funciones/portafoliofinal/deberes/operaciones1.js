
function mostrar() {
    var nom = document.getElementById("nombre").value;
    var ed = document.getElementById("edad").value;
    alert('ingreso el nombre' + nom);
    alert('Y la edad' + ed);

}
function menu() {
    document.write("1.-suma <br>2.-Factorial <br> 3.-Fecha");

}
function casos() {
    var op = parseInt(document.getElementById("txtOp").value);
    alert("seleccione la opcion:" + op);
    switch (op) {
        case 1:
            factorial();
            break;
        case 2:
            fechaActual();
            break;
        case 3:
            mostrar();
            break;

    }
}
function cargarSueldos(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = parseInt(prompt("ingrese sueldo"));
    }
}
function calcularGastos(pagos) {
    var acu = 0;
    for (var i = 0; i < pagos.length; i++) {
        acu += pagos[i];
    }
    return acu;
}
 function generarNumero(){
     var dim=parseInt(prompt("ingresa la dimencion"));
     var listaNum= new Array(dim);
     for(var i=0;i<listaNum.length;i++){
         listaNum[i]= Math.random();
     }
     document.write(listaNum.toString());
 }