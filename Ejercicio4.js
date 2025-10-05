const nota1 = 4.5;
const nota2 = 3.8;
const nota3 = 2.9;
const nota4 = 4.0;

// Cálculos
let suma = Math.floor(nota1 + nota2 + nota3 + nota4); // suma total de las cuatro notas
let promedio = Math.floor(suma / 4); // promedio aritmético
let resultado = Math.floor((nota1 + nota2) * (nota3 + nota4) / 2); // expresión solicitada

// Mostrar resultados por consola
console.log(`Suma de las notas: ${suma}`);
console.log(`Promedio: ${promedio}`);
console.log(`Resultado de la expresión ( (n1+n2)*(n3+n4)/2 ): ${resultado}`);


