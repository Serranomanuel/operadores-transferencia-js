const transporte = 120000;
const alojamiento = 200000;
const alimentacion = 150000;

// Datos del grupo
const cantidadPersonas = 4; // número de personas que comparten el costo
const aporteIndividual = 130000; // monto que entrega cada persona

// Cálculos
let total = transporte + alojamiento + alimentacion; // suma de todos los costos
let sobrante = (aporteIndividual * cantidadPersonas) - total; // dinero que sobra después de cubrir el total

// Salida por consola
console.log(`El total del viaje es: $ ${total}`);
console.log(`El aporte individual calculado (total / personas) es: $ ${total / cantidadPersonas}`);
console.log(`Cada persona entregó: $ ${aporteIndividual}, Sobrante total: $ ${sobrante}`);
