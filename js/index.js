/**
 *  EXERCICI 1
 */
console.log('Hola mundo');


/**
 *  EXERCICI 2
 */
alert('Em dic Sarah');


/**
 *  EXERCICI 3
 */
const name = 'Sarah';
const surname = 'Schmidt';

console.log(`Em dic ${name} ${surname}.`);


/**
 *  EXERCICI 4
 */
const number1 = 84;
const number2 = 12;
const suma = number1 + number2;

console.log(`La suma entre ${number1} i ${number2} és ${suma}.`);


/**
 *  EXERCICI 5
 */
const nota_examen = 4.6;

alert(nota_examen > 5.0 ? `Felicitats, has aprovat l\'examen amb un ${nota_examen}` : `Vaja, només un ${nota_examen}. Potser hauries d\'estudiar una miqueta més`);


/**
 *  EXERCICI 6
 */
function changeColour(color) {
  console.log(`Tinc un cotxe de color ${color}`);
}

changeColour('verd');
changeColour('blau');

function changeColourAndVowel(color) {
  let str = `Tinc un cotxe de color ${color}`;
  let newStr;

  [...str].map(car => {
    if (car === 'o' ) newStr = str.replaceAll(car, 'u');
  })
  console.log(newStr);
}

changeColourAndVowel('verd');
changeColourAndVowel('blau');


/**
 *  EXERCICI 7
 */
const llista = ['taula', 'cadira', 'ordinador', 'libreta'];

for (let i = 0; i < llista.length; i++) console.log(`L'objecte ${llista[i]} està a la posició ${i}.`);


/**
 *  EXERCICI 8
 */
function calculadora(operador, valor1, valor2) {
  let calc = 0;
  switch (operador) {
    case 'suma':
      calc = valor1 + valor2;
      console.log(`${valor1} + ${valor2} = ${calc}`);
      break;
    case 'resta':
      calc = valor1 - valor2;
      console.log(`${valor1} - ${valor2} = ${calc}`);
      break;
    case ('multiplicació'):
      calc = valor1 * valor2;
      console.log(`${valor1} * ${valor2} = ${calc}`);
      break;
    default:
      console.log('No has introduït un operador vàlid per a aquesta calculadora');
  }
}

const resultat = calculadora('resta', 40, 20);
const resultat2 = calculadora('suma', 4240, 9420);
const resultat3 = calculadora('multiplicació', 4, 2);
const resultat4 = calculadora('divisió', 10, 2);




/************* NIVELL 2 *************/
function calculadoraCompleta(operador, valor1, valor2) {
  let calc = 0;
  switch (operador) {
    case 'suma':
      calc = valor1 + valor2;
      console.log(`${valor1} + ${valor2} = ${calc}`);
      break;
    case 'resta':
      calc = valor1 - valor2;
      console.log(`${valor1} - ${valor2} = ${calc}`);
      break;
    case ('multiplicació'):
      calc = valor1 * valor2;
      console.log(`${valor1} * ${valor2} = ${calc}`);
      break;
    case ('divisió'):
      if (valor2 === 0) {
        alert('Error: no es pot dividir entre 0');
        return;
      }
      calc = valor1 / valor2;
      console.log(`${valor1} / ${valor2} = ${calc}`);
      break;
    default:
      console.log('No has introduït un operador vàlid per a aquesta calculadora');
  }
}

const calc = calculadoraCompleta('resta', 40, 20);
const calc2 = calculadoraCompleta('suma', 4240, 9420);
const calc3 = calculadoraCompleta('multiplicació', 4, 2);
const calc4 = calculadoraCompleta('divisió', 10, 2);
const calc5 = calculadoraCompleta('divisió', 2, 0);
const calc6 = calculadoraCompleta('divisió', 2, 1);
