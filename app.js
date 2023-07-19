/*
let meses = 12;
let cantidadDeAlumnos = 30;
let edad = 18;
let peso = 78;

console.log(edad);

let numeroA = 20;
let numeroB = 30;

let resultadoSuma = numeroA + numeroB
console.log(resultadoSuma)

let resultadoResta = numeroA - numeroB
console.log(resultadoResta)

let resultadoMultiplicacion = numeroA * numeroB
console.log(resultadoMultiplicacion)

let resultadoDivision = numeroA / numeroB
console.log(resultadoDivision)

let Saludo = "Hola Mundo"
console.log(Saludo);

let nombre = "Facundo";
let apellido = "Costamagna"

let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

let MeGustaElHelado = true;
console.log(MeGustaElHelado);

let unNumeroChico = 5;
let unNumeroGrande = 2000;

let esMenor = unNumeroChico < unNumeroGrande
let esMayor = unNumeroGrande > unNumeroChico */


/*
let diaDeSemana = "Domingo"
if (diaDeSemana == "Domingo"){
    console.log("¡Hoy es dia de Descanso!");
}

let rodadoMountainBike = 26;
let rodadoAurora = 29

let marcaRodadoMasGrande = rodadoMountainBike > rodadoAurora ? "Mountain Bike" : "Aurora";
console.log("La bici de rodado mas grande es de la marca " + marcaRodadoMasGrande)


switch (diaDeSemana){
    case "Lunes": 
        console.log("que dia aburrido");
        break;
    case "Martes":
        console.log("hay que hacer los deberes");
        break;
    case "Miercoles":
        console.log("necesito cortar la semana");
        break;
    case "Jueves":
        console.log("que cansancio, necesito que sea el finde");
        break;
    case "Viernes":
        console.log("Por finnn");
        break;
    case "Sabado":
        console.log("se sale");
        break;
    case "Domingo":
        console.log("Se descansa");
        break;
}
*/

/*





//FUNCIONES
let numeroC = 7;
 
//FUNCION "Triple"
function Triple(numeroC){
    return numeroC * 3;
}

console.log(Triple(numeroC));

//FUNCION "Cuadruple"
function Cuadruple (numeroD){
    return numeroD * 4;
}

numeroD = 45;
console.log(Cuadruple(numeroD));

//FUNCION "Multiplicar"
function Multiplicar (numE, numF){
    return numE * numF;
}

numE = 15;
numF = 8;
console.log(Multiplicar(numE, numF));

//FUNCION "Triple de la Suma"
function tripleDeSuma (numE, numF){
    return Triple(numE + numF);
}

console.log(tripleDeSuma(numE, numF));

//FUNCION "Area"
function Area (radio){
    return (2*3.14*radio*radio)   
}
radio=3;
console.log(Area(radio));

//FUNCION "Perimetro"
function perimetro (radio){
      return Area(radio)/2;
}
console.log(perimetro(radio));

//FUNCION "Longitud del Texto"
function LongitudDeTexto (texto1){
    return texto1.length;
}
let texto1 = "Facundo Costamagna"
console.log(LongitudDeTexto(texto1));

//FUNCION "Cartelito"
function Cartelito (titulo, nombre, apellido){
    return (titulo + " " + nombre + " " + apellido);
}
let titulo = "Licenciado";
let nombre = "Facundo"
let apellido = "Costamagna"
console.log(Cartelito(titulo, nombre, apellido));

//FUNCION "Se Pone la Olla" segun dia de semana
function SePoneLaOlla (diaDeSemana){
    if (diaDeSemana == "domingo"){    
        return "pongan las ollas, que se comen pastas";
    }else {
        return "mejor nos esperamos al domingo"
    }}
diaDeSemana = "Martes";
console.log(SePoneLaOlla(diaDeSemana));

//FUNCION "Hay Clases" usando switch
let dia = "Viernes"
function Clases (dia){
    switch (dia){
        case "Viernes": 
            console.log("hay clases"); 
            break;
    default:
        console.log("no hay clases");
        break;
    }}

resultado = Clases(dia)

//ARROW FUNCTIONS con 1 parametro
let Saludar = nombre => "Hola " + nombre + ", Como estas ? "
nombre = "Facundo"
console.log(Saludar(nombre));

//ARROW FUNCTIONS con 2 parametros
let SaludoCompleto = (nombre, apellido) => {
    return "Hola " + nombre + " " + apellido + "!!"
}
apellido = "Costamagna"
console.log(SaludoCompleto(nombre, apellido));

//CALLBACK
let doble = numero1 => numero1 * 2;
let triple = numero1 => numero1 *3;

let aplicarCallBack = (numero1, operacion) => operacion(numero1);
console.log(aplicarCallBack(18, triple));


let suma = (numeroA, numeroB) => numeroA + numeroB;
let resta = (numeroA, numeroB) => numeroA - numeroB;
let Multicacion = (numeroA, numeroB) => numeroA * numeroB;
let Division = (numeroA, numeroB) => numeroA / numeroB;

let calculadora = (numeroA, numeroB, operacion) => operacion(numeroA, numeroB);
console.log(calculadora(18, 5, Division));

let seriesFavoritasDeAna = ["Game of Thornes", "Nreaking Bad", "House of Cards"];
let seriesFavoritasDeHector = ["En Terapia", "Recordando el show de Alejandro Molina"];

console.log(seriesFavoritasDeAna);
console.log(seriesFavoritasDeHector);
console.log(["hola","mun, "do!"]);
console.log(["hola", "hola!"]);

let arrayFrase = ["Yo", "soy", "Facundo"];
let FraseNueva = arrayFrase.join(" ");
console.log(FraseNueva);

*/
/*

let Estu1 = ["Facundo", 9.5, "6c" ]
let Estu2 = ["Lucas", 8.9, "6b"]
let Estu3 = ["Alexis", 9.7, "6a"]
let Estudiantes = [Estu1, Estu2, Estu3];
let alumnoEgresado = Estudiantes.pop();
console.log(alumnoEgresado[0]);

let Estu4 = ["Juan", 5, "iOS"]
let Estu5 = ["Miguel", 2, "Android"]
Estudiantes.push(Estu4);
Estudiantes.push(Estu5);
console.log(Estudiantes);

Estudiantes.shift();
console.log(Estudiantes);

let Estu6 = ["Mariana", 9, "Full Stack"];
let Estu7 = ["Francisco", 2, "Android"];
Estudiantes.unshift(Estu6);
Estudiantes.unshift(Estu7);
console.log(Estudiantes);

let baseDominio = "http://www.";
let string = "digitalhouse.com.ar"
function dominio (string) {
    return (baseDominio + string);
}
console.log(dominio(string));

let texto2 = "Me encantan las empanadas arabes y los ñoquis";
console.log("la cantidad de caracteres total que contiene la frase son: " + texto2.length);


let palABuscar = "empanadas arabes"
let palAReem = "pizzalomos"

function reemplazoFastFast (texto2, palABuscar, palAReem) {
    return texto2.replace(palABuscar, palAReem);
}
console.log(reemplazoFastFast(texto2, palABuscar, palAReem));


let palabra = "chisitos";
function Menciona (texto2, palabra) {
    let encontrado = texto2.indexOf(palabra);
    if (encontrado === -1) {
        return false;
    } else {
        return true;
    }
}
console.log(Menciona(texto2, palabra));

let texto3 = "¡Hola!, soy Carli";
let licenciada = texto3.slice(12,17);
console.log(licenciada); */

/*
function imprimirAzul4 () {
    for (let i = 0; i < 4; i++) {
        console.log("Azul");
    }
}

function pasandoPorI () {
    for (let i = 0; i <= 4; i++) {
        console.log("Aca el valor de i es " + i);
    }
}

let num = 9;
let cantImpares = 0;
function noParesDeContarImparesHasta (num) {
    for (let i = 0; i <= num; i++){
        if (i % 2 !== 0){
            ++cantImpares;
        }
    }
    return cantImpares;
}
console.log(noParesDeContarImparesHasta(num));

function tablaDeMultiplicar(num){
    for(let i = 1;i <= 10; i++){
        console.log(num * i);
    }
    let f = 1;
    while(f <= 10) {
        console.log(num * f);
        f++;
    }
}
*/

var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];
function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] + unSemestre[2] +unSemestre[3] + unSemestre[4] + unSemestre[5];
}
var gananciasPrimerTrimestre = [80, 453, 1000];

function gananciaTotal (ganancias){
    let sumaMeses = 0;
    let i = 0;
    while (i < ganancias.length) {
        sumaMeses = sumaMeses + ganancias[i];
        i++
    }
    return sumaMeses;
}

//PRUEBAS DE CODIGO

/*console.log(gananciaTotal(gananciasPrimerTrimestre));
console.log(gananciaTotal( [2, 3] ));
console.log(gananciaTotal( [2, 3, 1, 8, 8, -1] ));
console.log(gananciaTotal( [] ));*/

/*console.log(gananciaTotal([]));
console.log(gananciaTotal([100]));
console.log(gananciaTotal([100, 2]));
console.log(gananciaTotal([2, 10, -20]));
console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]));*/

//Que meses la ganancia fue mayor a 0
function mesesGanancia (ganancias){
    let contador = 0;
    for(let i = 0; i <= ganancias.length; i++)
        if (ganancias[i] > 0) {
            ++contador;
    }
    return contador;
}

//PRUEBAS DE CODIGO
/*console.log(mesesGanancia([]));
console.log(mesesGanancia([100]));
console.log(mesesGanancia([100, 2]));
console.log(mesesGanancia([2, 10, -20]));
console.log(mesesGanancia([2, 10, -20, 0, 0, 10, 10]));*/

function saldosMesesConGanancia (ganancias) {
    let mesesConGanancia = [];
    for (let i = 0; i <= ganancias.length; i++){
        if (ganancias[i] > 0){
            mesesConGanancia.push(ganancias[i]);
        }
    }
    return mesesConGanancia;
}
console.log(saldosMesesConGanancia([100, 20, 0, -10, 10]));

function saldosMesesConPerdida (ganancias) {
    let mesesConPerdida = [];
    for (let i = 0; i <= ganancias.length; i++) {
        if(ganancias[i] < 0) {
            mesesConPerdida.push(ganancias[i]);
        }
    }
    return mesesConPerdida;
}

console.log(saldosMesesConPerdida([100, 20, 0, -10, 10]));

function sumatoriaBajoImporte (importes) {
    let sumatoria = 0;
    for (let i = 0; i < importes.length;i++) {
        if (importes[i] > 0 & importes[i] <= 1000) {
            sumatoria = sumatoria + importes[i];
        }
    }
    return sumatoria;
}

console.log(sumatoriaBajoImporte([50, -12, 1000, 300, 200, 0, 2500, 3000, 999, 1000, -180]));


function asientosDisponibles (disponibles, aOcupar) {
    for(let i = 0; i < disponibles.length; i++) {
        if (disponibles[i] === aOcupar) {
            return "Bien!! Ese asiento se encuentra disponibles"
        }else {
            return "ese asiento se encuentra ocupado"
        }
    }
}
console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));

function reportePasajeros (numEstaciones) {
    let pasajeros = 200;
    for (let i = 1; i <= numEstaciones; i++) {
        if (i !== 5) {
            pasajeros = pasajeros + 50 - 30;
        } else {
            pasajeros = pasajeros +120 - 80;
        }
    }
    return pasajeros;
}
console.log(reportePasajeros(0));

function laClaveSecreta(caracteres) {
    let fraseDesifrada = [];
    let letra = [];
    for (let i = 20; i >= 0; i--) {
        if(caracteres[i] === "*") {
            caracteres[i].pop;
        }else {
        letra[0] = caracteres[i];
        fraseDesifrada.push(letra[0]);
    }
}
    return fraseDesifrada.join("");
}
console.log(laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]));
console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]));

let perro = {
    nombre: "Bella",
    edad: 2,
    vacunado: true
}

let deportista = {
    noombre: "Facundo",
    energia: 100,
    experiencia: 10,
    entrenarHoras: function(cantHoras){
        this.energia = this.energia - (cantHoras*5);
        this.experiencia = this.experiencia + (cantHoras*2);
        return this.enrgia, this.experiencia;
    }
}

//deportista.entrenarHoras(10);
//console.log(deportista);

console.log(laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]));
console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]));










//<>