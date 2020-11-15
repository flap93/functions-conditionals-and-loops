/*function strip(number) {
    return (parseFloat(number.toPrecision(12)));
}*/


//conditionals 


/*function test(fruit) {
  if (fruit == 'apple' || fruit == 'strawberry') {

    console.log('red');
  }
}

test('strawberry');*/


function greetings(helloOne) {

    if (helloOne == 'hi' || helloOne == 'bye') {
     console.log('Good morning');
  
    };
  }
  
  greetings('hi');
  
  
  function test(fruit) {
    // extract conditions to array
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
  
    if (redFruits.includes(fruit)) {
      console.log('red');
    }
  }
  
  test('apple');



  function brandsCars(cars) {
    // extract conditions to array
    const models = ['bmw', 'ferrari', 'audi', 'peugeot'];
  
    if (models.includes(cars)) {
      console.log('nice car');
    }
  }
  
  brandsCars('bmw');


  function test(fruit, quantity) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
  
    // condition 1: fruit must has value
    if (fruit) {
      // condition 2: must be red
      if (redFruits.includes(fruit)) {
        console.log('red');
  
        // condition 3: must be big quantity
        if (quantity > 10) {
          console.log('big quantity');
        }
      }
    } else {
      console.log('No fruit!');
    }
  }
  
  // test results
  test(null); // error: No fruits
  test('apple'); // print: red
  test('apple', 20); // print: red, big quantity





  function greeting(helloOne, helloTwo) {
    const typesGreetings = ['Good morning', 'Good afternon', 'Good night'];
  
      if (helloOne) {
        if (typesGreetings.includes(helloOne)) {
          console.log('Good morning, how can i help you');
          
          if(helloTwo == 'Good afternoon') {
            console.log('Good afternoon, how can i help you');
          }
  
        }
      } else {
        console.log('Sorry, its too late!');
      }
  }
  
  greeting('Good afternoon');

  

