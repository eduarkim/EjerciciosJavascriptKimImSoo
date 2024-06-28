/*
1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar 
(los primeros 10 multiplos)
*/
/*
let numero1 = parseInt(prompt("Ingrese el número al que desee conocer su múltiplo del 1 al 10"))
for(let i=1; i<=10; i++){
    console.log(i+" * "+numero1+" = "+numero1*i)
}
*/

/*
2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando.
El ingreso de datos terminara cuando el usuario ingrese un valor 0.
*/
//   MEDIANTE EL FOR
/*
let numero = parseInt(prompt("Ingrese el número: "))
let suma =0;
for(let i=0; numero!=0; i++){
    suma = suma+numero;
    numero = parseInt(prompt("Ingrese el número: "))

}
console.log(suma)
*/
//   MEDIANTE EL WHILE
/*
let n=1;
let suma=0;
let numero;
while(numero!=0){
    numero = parseInt(prompt("Ingrese un número: "));
        suma = suma + numero;
        n++;
}
console.log("La suma de los "+n+" números ingresados es: "+suma);
*/
/*
3. Realizar un juego de adivinar el número de los ejercicios del tema anterior, en una variable guardar 
un numero que este en el rango 1 al 100. La persona debera poder ingresar numeros hasta adivinar el valor que 
se encuentre en dicha variable. Si el valor es menor al numero secreto, avisarle al usuario lo sucedido
y pedirle nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de cuando es menor,
si es que el numero ingresado es mayor. Así sucesivamente hasta que el usuario ingrese el numero secreto.
Por último mostrar un mensaje de felicitaciones al usuario y decirle en cuantos intentos lo ha realizado.
*/
/*  USANDO EL FOR
let nroSecreto = Math.floor(Math.random()*100+1);
//console.log(nroSecreto)
let nroUsuario = parseInt(prompt("Ingrese el número: "))
let intentos =1;
for(let i=0; i<100; i++){

    if(nroUsuario<nroSecreto){
        alert("Su número es menor")
        intentos++;
    }else if(nroUsuario>nroSecreto){
        alert("Su número es mayor")
        intentos++;
    }else if(nroUsuario==nroSecreto){
        alert("Felicitaciones ha adivinado el número en "+intentos+" intentos")
        break;
    }
    nroUsuario = parseInt(prompt("Ingrese el número: "))
}
    */
//console.log("Felicitaciones ha adivinado el número en "+intentos+" intentos")

/*  MEDIANTE EL WHILE
let nroSecreto = 50;
let nroUsuario;
let intentos = 0;
while(nroUsuario!=nroSecreto){
    nroUsuario = parseInt(prompt("Ingrese un número del 1 al 100: "));
    intentos++;
    if(nroUsuario>nroSecreto){
        alert("El número ingresado es mayor al número secreto");
    }else if(nroUsuario<nroSecreto){
        alert("El número ingresado es menor al número secreto");
    }
}
alert("Felicidades, has adivinado el número secreto en "+intentos+" intentos");
*/

/*
4. Realizar un programa que permita decir si un numero es primo. Un numero es primo solo si es divisible por 1 
y por el mismo numero. Ayuda: Usar la operacion de modulo. Los numeros solo poseen divisores hasta la mitad del
valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10, 25. No es primo. Con tener mas de 2 divisores el numero 
ya no es primo, usando el for
*/
/*
let numero = parseInt(prompt("Ingrese un numero: "))
let divisor =0;
for(let i=1; i<=numero; i++){
   if(numero%i==0){
     divisor++;
   }
}

if(divisor==2){
alert(numero+" es numero primo")
}else{
alert(numero+ " No es numero primo")
}
*/
//  SIN EL FOR
/*
let numero = parseInt(prompt("Ingrese un número: "))

if(numero%numero==0 && numero%1==0 && numero%2!=0 && numero!=1 || numero==2 ){
        console.log(numero+" Es numero primo")
   
  }else{
      console.log(numero+" no es numero primo")
  }
*/


/*
5.Realizar un programa que permita dado un numero, mostrar todos sus divisores.
*/
/*
let numero = parseInt(prompt("Ingrese un número: "))
let divisores=[]
for(let i=1; i<=numero; i++){
   if(numero%i==0){
      divisores.push(i)
   }
}
alert("Los divisores de "+numero+" son: "+divisores)
*/

/*
6.Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje
por consola con cada uno de los elementos del array.
*/
/*
let arrayElementos= ['python','java','php','javascript','c++','html','css','swift','sql','go']
for(let i=0; i<arrayElementos.length; i++){
 console.log(arrayElementos[i])
}
*/
/*
7.Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos.
*/
/*
let arrayNros = [100,12,13,15,600,8,7,900,1000,2]
for(let i=0; i<arrayNros.length; i++){
 console.log(arrayNros[i]*2)
}
*/
/*
8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a una 
persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento
del array.
*/
/*
let familia =[
    {
        nombre:"Victoria",
        apellido:"Choi",
        edad:48,
        telefono:123456789
    },
    {
        nombre:"Eduardo",
        apellido:"Kim",
        edad:48,
        telefono:987654321
    },
    {
        nombre:"Priscila",
        apellido:"Kim",
        edad:17,
        telefono:321654987
    },
    {
        nombre:"Rufina",
        apellido:"Kim",
        edad:15,
        telefono:654987321
    },
    {
        nombre:"Jose",
        apellido:"Kim",
        edad:21,
        telefono:654987321
    }
]

for(let i=0; i<familia.length; i++){
    console.log("Hola mi nombre es "+familia[i].nombre+" "+familia[i].apellido+" y mi telefono es "+familia[i].telefono+ " tengo "+familia[i].edad+" años");
}
*/

/*
9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares.
*/
/*
let arrayNro = [10,12,13,51,20,30,40,63,55,80];
for(let i=0; i<arrayNro.length; i++){
    if(arrayNro[i]%2!=0){
        console.log(arrayNro[i])
    }
}
*/
/*
10.Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado
y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0
   */

/* CON WHILE
let numero = parseInt(prompt("Ingrese un número: "))
let sumaPares = 0;
let sumaImpares = 0;
while(numero!=0){
    if(numero%2==0){
        sumaPares+=numero;
    }else{
        sumaImpares+=numero;
    }
    numero = parseInt(prompt("Ingrese un número: "))
}
console.log("La suma de los numeros pares es: "+sumaPares+" y la suma de los numeros impares es: "+sumaImpares)
*/

/*
11.Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas grande.
*/
/*
let arraynumeros=[11,200,50,2,300,555,289,1,20,800];
let maximo=0;
for(let i=0; i<=arraynumeros.length; i++){
  if(arraynumeros[i]>maximo){
     maximo= arraynumeros[i]
  }
}
console.log("El número más grande es: "+maximo)
*/

/*
12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas chico.
*/
/*
let arraynumeros = [11,200,50,2,300,555,289,1,20,0.800];
let minimo=arraynumeros[0];
for(let i=0; i<arraynumeros.length; i++){
   if(arraynumeros[i]<minimo){
    minimo= arraynumeros[i];
   }
}
console.log("El número más pequeño es: "+minimo)
*/
/*
13.Realizar un programa que permita jugar a piedra paga o tijera, se debera poder ingresar
los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las manos de cada jugador,
y en cada turno se debera seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje
con el nombre de la persona ganadora.
*/
/*
let jugador1 = prompt("Ingrese su nombre: ");
let jugador2 = prompt("Ingrese su nombre: ");
let jugador1Mano = prompt(jugador1+" Ingrese su mano: ");
let jugador2Mano = prompt(jugador2+" Ingrese su mano: ");
let empate = jugador1Mano == jugador2Mano;
for(let i=0; i<100; i++){
if ((jugador1Mano == "piedra" && jugador2Mano == "tijera") || (jugador1Mano == "papel" && jugador2Mano == "piedra") || (jugador1Mano == "tijera" && jugador2Mano == "papel")) {
    alert("Ganó "+jugador1)
    break;
}else if((jugador2Mano == "piedra" && jugador1Mano == "tijera") || (jugador2Mano == "papel" && jugador1Mano == "piedra") || (jugador2Mano == "tijera" && jugador1Mano == "papel")){
    alert("Ganó "+jugador2)
    break;
}else if(jugador1Mano === jugador2Mano){
    alert("Empate")
    jugador1 = prompt("Ingrese su nombre: ");
    jugador2 = prompt("Ingrese su nombre: ");
    jugador1Mano = prompt(jugador1+" Ingrese su mano: ");
    jugador2Mano = prompt(jugador2+" Ingrese su mano: ");
}else{
    alert("Ingreso incorrecto, alguien hizo trampa")
    break;
}
}
*/
    
   /*
14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
   */
  /*
let asterisco = "* "
for(let i=1; i<=5; i++){
    console.log(asterisco);
    asterisco = asterisco + "* "
}
    */

  /*
for(let i=0; i<5; i++){
    let espacio='';
    for(let j=0; j<i+1; j++){
        espacio = espacio+'* ';
    }
    console.log(espacio)
}
*/
/*
15.Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado pero invertido.
*/
let asterisco2 = "* * * * *"
for(let i=5; i>=1; i--){
    console.log(asterisco2);
    asterisco2 = asterisco2.substring(0, asterisco2.length -2)
}

/*
// Espacios que se debe empujar el asterisco
let spaces = 5 - 1;
  
// Recorrer cada piso 
for (let i = 0; i < 5; i++) {
  let piso = '';
  
  // Agregar el número de espacios
  for (let j = 0; j < spaces; j++) {      
    piso += ' ';
  }
  
  // Agregar el número de asteriscos 
  for (let k = 0; k <= i; k++) {      
    piso += '*';
  }
  
  // Mostrar espacios y asteriscos por piso
  console.log(piso)
  
  // El siguiente piso tendrá un espacio menos 
  spaces--;
} 
*/
/*
for(let x = 1; x <= 5; x++){
    console.log(' '.repeat(6 - x) + '*'.repeat(x))
  }
*/
/*
16.Dado un array de 10 numeros desordenados, realizar un programa que imprima por pantalla el array
ordenado (No usar sort, solo ciclo for)
*/
/*
let numeros = [2,5,8,3,4,6,1,10,9,7]
for(let i=0; i<numeros.length; i++){
    for(let j=0; j<numeros.length; j++){
        if(numeros[i]<numeros[j]){
            let aux = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = aux;
        }
    }
}
console.log(numeros)
*/


