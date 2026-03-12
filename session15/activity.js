//Mini-activity1
// Using promt convert Celcius to Kelvin
// Present the output using alert
let celcius = parseFloat(prompt("Enter the temperature you want to convert to Kelvin: "));
let kelvin = celcius + 273.15;
alert("Temperature in Kelvin: " + kelvin);





// mini-activity2
// Using prompt to get cicle area
// Present the output using alert

let radius = parseFloat(prompt("Enter the radius you want to use for the circle: "));
let area =  3.14159 * Math.pow(radius, 2);
alert("Area of the circle: " + area.toFixed(2));
