/*

    Thermometer

    Write a function "randomTemperatur" that return a temperature in Celsius or in Farenheight

    This function take one parameter that can be:
    
    "c" if we want to have a celsius value
    "f" if we want to have a farenheight value

    The number to calcul is a generated random number.
    You must create this random number.
    
    You must convert this generated number to the requested unit.
    So if I ask you to convert to Celsius, consider that the generated number is in Fahrenheit.

    Write your own tests !
    
*/

// write your code below this comment



var temp = window.prompt('type c for celsius or f for farenheight')

function getRandomIntInclusive(min, max) {
    if (temp.toLowerCase() == "c") {
        min = Math.ceil(0);
        max = Math.floor(1000);
        var number = (Math.floor(Math.random() * (max - min + 1)) + min)
        alert(number + ' farenheight = ' + ((number -32) / (1.8)) + " celcius");

    } else if (temp.toLowerCase() == "f") {
        min = Math.ceil(0);
        max = Math.floor(1000);
        var number = (Math.floor(Math.random() * (max - min + 1)) + min)
        alert(number + ' celsius = ' + ((number *1.8) + (32)) + " farenheight");

    }

} console.log(getRandomIntInclusive())


