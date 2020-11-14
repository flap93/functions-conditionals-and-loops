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

  testing