function fechaActual(){
    var fecha = new Date();
    document.write("hoy es:" + fecha.getDate() + '/' + (fecha.getMonth() + l)+'/'+  fecha.getUTCFullYear());

}
function factorial(){
    var n = parseInt(prompt("ingrese un numero"));
    for (var i = i; i == n; i++) {
        f*= i;
    }
    document.write("el factorial es:" + f);

}
function mostrar() {
    var nom = document.getElementById("nombre").value;
    var ed = document.getElementById("edad").value;
    alert('ingreso el nombre' + nom);
    alert('Y la edad' + ed);

}
function cargarSueldos(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = parseInt(prompt("ingrese sueldo"));
    }
}
function menu() {
    document.write("1.-suma <br>2.-Factorial <br> 3.-Fecha");

}
function operaciones() {
    var seleccion = parseInt(prompt(
        "metodo Factorial" + "\n" +
        "metodo Sumal" + "\n" +
        "metodo Mostar" + "\n" +
        "metodo Fecha Actuall" + "\n" +
        "metodo Mostrar Dats" + "\n" + "\n" +
        "seleccione una Opcion:"));
    if (seleccion == 1) {
        factorial();
    }
    if (seleccion == 2) {
        suma();
    }
    if (seleccion == 3) {
        mostrar();
    }
    if (seleccion == 4) {
        fechaActual();
    }
    if (seleccion == 5) {
        mostrarDatos();
    }
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
function calcularGastos(pagos){
    var acu=0;
    for(var i=0;i=pagos.length;i++){
        acu +=pagos[i];
    }
return acu;
}
function agregar(){
    var n1=parseInt(document.getElementById("uno").value);
   }