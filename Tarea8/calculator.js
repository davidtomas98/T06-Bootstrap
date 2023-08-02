$(document).ready(function () {
    // Variable para almacenar la expresión y resultado
    let result = "";
    // Referencia al campo de entrada (display) de la calculadora usando su ID
    const display = $("#display");
  
    // Cuando se hace clic en un botón de número, se agrega el número al campo de entrada
    $(".number").on("click", function () {
      appendToDisplay($(this).text());
    });
  
    // Cuando se hace clic en un botón de operador, se agrega el operador al campo de entrada
    $(".operator").on("click", function () {
      appendToDisplay($(this).text());
    });
  
    // Cuando se hace clic en el botón de igual, se calcula y muestra el resultado
    $(".equal").on("click", function () {
      calculateResult();
    });
  
    // Cuando se hace clic en el botón de borrar, se limpia el campo de entrada
    $(".delete").on("click", function () {
      clearDisplay();
    });
  
    // Función para agregar caracteres al campo de entrada (display)
    function appendToDisplay(value) {
      result += value;
      display.val(result);
    }
  
    // Función para calcular el resultado de la expresión matemática
    function calculateResult() {
      try {
        // Corregir divisiones y multiplicaciones reemplazando los símbolos
        result = result.replace(/x/g, "*").replace(/÷/g, "/");
        // Calcular el resultado de la expresión usando eval()
        result = eval(result);
        // Mostrar el resultado en el campo de entrada
        display.val(result);
      } catch (error) {
        // Si ocurre un error durante el cálculo, mostrar "Error" en el campo de entrada
        display.val("Error");
      }
    }
  
    // Función para limpiar el campo de entrada y restablecer la variable result
    function clearDisplay() {
      result = "";
      display.val("");
    }
  });
  