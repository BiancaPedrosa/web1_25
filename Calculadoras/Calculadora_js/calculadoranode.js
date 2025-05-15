const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout,
 });
 
 let display = '';
 
 function insert(num) {
   display += num;
   console.log('Display:', display);
 }
 
 function clean() {
   display = '';
   console.log('Display:', display);
 }
 
 function back() {
   display = display.substring(0, display.length - 1);
   console.log('Display:', display);
 }
 
 function calcular() {
   if (display) {
     try {
       // Substitui a vírgula por ponto para o eval funcionar corretamente
       const validExpression = display.replace(',', '.');
       display = eval(validExpression).toString();
       console.log('Display:', display);
     } catch (error) {
       console.log('Erro na expressão:', error.message);
       clean();
     }
   } else {
     clean();
   }
 }
 
 function getInput() {
   readline.question('Digite uma operação (número, operador, CE, C, <<, =, +-): ', (input) => {
     if (input.toUpperCase() === 'CE' || input.toUpperCase() === 'C') {
       clean();
     } else if (input === '<<') {
       back();
     } else if (input === '=') {
       calcular();
     } else if (['+', '-', '*', '/', ',', '+-'].includes(input) || !isNaN(parseFloat(input))) {
       insert(input);
     } else {
       console.log('Entrada inválida.');
     }
     getInput();
   });
 }
 
 console.log('Calculadora Node.js');
 getInput();