  
  
  function SayMyName(mysecretcode) {
    let myname = document.getElementById("myName").value;
    console.log(myname);
    alert(`Hi ${myname} - ${mysecretcode}`);
  }
  // Example usage:
  
  // Define calculation functions
  function add(number1, number2) {
    return number1 + number2;
  }
  
  function subtract(number1, number2) {
    return number1 - number2;
  }
  
  function multiply(number1, number2) {
    return number1 * number2;
  }
  
  function divide(number1, number2) {
    if (number2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return number1 / number2;
  }
  
  // Calculate result
  function calculate(operation) {
    // Get input values
    let number1 = Number(document.getElementById('numberOne').value);
    let number2 = Number(document.getElementById('numberTwo').value);
    
    // Validate input
    if (isNaN(number1) || isNaN(number2)) {
      alert("Please enter valid numbers");
      return;
    }
    
    let result;
    try {
      // Perform calculation based on selected operation
      switch (operation) {
        case 'add':
          result = add(number1, number2);
          break;
        case 'subtract':
          result = subtract(number1, number2);
          break;
        case 'multiply':
          result = multiply(number1, number2);
          break;
        case 'divide':
          result = divide(number1, number2);
          break;
        default:
          throw new Error("Invalid operation");
      }
      
      // Display result
      document.getElementById('result').innerHTML = result;
    } catch (error) {
      alert(error.message);
    }
  }
  // function add(number1, number2) {
  //   return number1 + number2;
  // }

  // function subtract(number1, number2) {
  //   return number1 - number2;
  // }

  // function multiply(number1, number2) {
  //   return number1 * number2;
  // }

  // function divide(number1, number2) {
  //   return number1 / number2;
  // }
  // function calculate() {
  //   let number1 = Number(document.getElementById('numberOne').value);
  //   let number2 = Number(document.getElementById('numberTwo').value);

  //   document.getElementById('result').innerHTML = subtract(number1,number2);
  // }

  function calculate(operation) {
    // Get input values
    let number1 = Number(document.getElementById('numberOne').value);
    let number2 = Number(document.getElementById('numberTwo').value);
    
    // Validate input
    if (isNaN(number1) || isNaN(number2)) {
      alert("Please enter valid numbers");
      return;
    }
    
    let result;
    try {
      // Perform calculation based on selected operation
      switch (operation) {
        case 'add':
          result = add(number1, number2);
          break;
        case 'subtract':
          result = subtract(number1, number2);
          break;
        case 'multiply':
          result = multiply(number1, number2);
          break;
        case 'divide':
          result = divide(number1, number2);
          break;
        default:
          throw new Error("Invalid operation");
      }
      
      // Display result
      document.getElementById('result').innerHTML = result;
    } catch (error) {
      alert(error.message);
    }
  }