//// Dhruv Barot
//// 101415874
//// COMP3123

///Answer 01:
const greeter = (myArray, counter) => {
  const greetText = 'Hello';

  for (const name of myArray) {
    console.log(`${greetText} ${name}`);
  }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


/////Answer 02:
const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('');
  };
  
  console.log(capitalize('fooBar')); // Output: Foobar
  console.log(capitalize('nodeJs')); // Output: Nodejs

  ////Answer 03:
const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => 
    color.charAt(0).toUpperCase() + color.slice(1)
);

console.log(capitalizedColors);

///Answer 04:
var values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);

///Answer 05:
var array = [1, 2, 3, 4];

// Calculate the sum
const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the product
const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(calculateSum);    // Output: 10
console.log(calculateProduct); // Output: 24

///Answer 06:
// Base Car class
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `Model: ${this.model} Engine ${this.year}`;
    }
  }
  
  // Sedan subclass extending Car
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year);  // Call parent class constructor
      this.balance = balance;
    }
  
    info() {
      return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
  }
  
  // Test the classes
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details());  // Output: Model: Pontiac Firebird Engine 1976
  
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());    // Output: Volvo SD has a balance of $30000.00
  
