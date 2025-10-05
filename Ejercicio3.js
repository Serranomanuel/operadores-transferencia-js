
const produccionPorHora = 250; // piezas producidas en una hora
const horasTrabajadas = 8; // horas de trabajo en el turno
const capacidadCaja = 12; // número de piezas que caben en una caja

// Cálculos
let totalPiezas = produccionPorHora * horasTrabajadas; // piezas totales fabricadas
let cajasLlenas = Math.floor(totalPiezas / capacidadCaja); // cajas completas
let piezasSobrantes = totalPiezas % capacidadCaja; // piezas que no llenan una caja completa

// Mostrar resultados por consola
console.log(`Total de piezas fabricadas: ${totalPiezas}`);
console.log(`Cajas llenas: ${cajasLlenas}`);
console.log(`Piezas sobrantes: ${piezasSobrantes}`);