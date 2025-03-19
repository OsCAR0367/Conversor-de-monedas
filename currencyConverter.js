const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const EXCHANGE_RATE = 0.85;

function convertCurrency() {
  console.log('===== CONVERTIDOR DE DÓLARES A EUROS =====');
  console.log('Bienvenido al convertidor de moneda básico.');
  console.log(`Tasa de cambio actual: 1 USD = ${EXCHANGE_RATE} EUR`);
  console.log('----------------------------------------');

  rl.question('Por favor, ingrese la cantidad en dólares a convertir: ', (dollarAmount) => {
    const dollars = parseFloat(dollarAmount);
    
    if (isNaN(dollars)) {
      console.log('Error: Por favor ingrese un valor numérico válido.');
      askToContinue();
    } else {
      const euros = dollars * EXCHANGE_RATE;
      
      console.log(`\nResultado de la conversión:`);
      console.log(`${dollars.toFixed(2)} USD = ${euros.toFixed(2)} EUR`);
      askToContinue();
    }
  });
}

function askToContinue() {
  rl.question('\n¿Desea realizar otra conversión? (s/n): ', (answer) => {
    if (answer.toLowerCase() === 's') {
      console.log('\n');
      convertCurrency();
    } else {
      rl.close();
    }
  });
}

// Iniciamos la primera conversión
convertCurrency();

rl.on('close', () => {
  console.log('\n¡Gracias por usar el convertidor de moneda!');
  console.log('===== FIN DEL PROGRAMA =====');
});