// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting(){
    console.log("Hello friend!"); 
}
  printGreeting();
  printGreeting();
  printGreeting();
// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function greetMe(first, last) {
    console.log(`Good Morning ${first}`);
  }
  greetMe("Cade", "Chaney");

// I believe I did this question correctly

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

var job = "UPS"
function add(num1, num2) {
  var sum = num1 - num2;
  return sum;
}

console.log(`The max pay for ${job} is $120,000 and minis  $40,000. The range is ${add(120000, 40000)}.`);

// 4: Write a function that satifies the following interaction pattern:

function checkStock(itemQuantity, item){
    if (itemQuantity === 0) {
    console.log(`${item} -OUT of stock`);
  } else if (itemQuantity < 4) {
    console.log (`${item} - is running LOW`);
  } else {
      console.log(`${item} is stocked`);
  }}
  
  checkStock(4, "Coffee");
  checkStock(3, "Tortillas");
  checkStock(0, "Cheese");
  checkStock(1, "Salsa");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"