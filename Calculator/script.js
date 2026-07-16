let display= document.getElementById("display")

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1); 
}

function percentage(){
    display.value= eval(display.value)/100;
}

function binary() {
    num = Number(display.value);
    display.value= num.toString(2);
}


function calculate() {
  try {
    display.value = eval(
      display.value 
    );
  } catch (e) {
    alert("Invalid Expression");
  }
}
