//Test data
const value1 = 10;
 // Constant value
const value2 = Math.floor(Math.random() * 100);
 // Random integer from 0 to 99

 const result = value1 + value2 / 5 + 17;
 
console.log(`value1: ${value1}`);
console.log(`value2: ${value2}`);
console.log(`Total result: ${result}`);


//Опишите как работает этот приоритет 
//1.Сначала выполняется деление value2 на 5.
//2. Затем результат сложения value1 и результата деления.
//3. Наконец, к полученной сумме добавляется 17.