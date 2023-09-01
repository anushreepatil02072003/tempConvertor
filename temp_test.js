let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin")

function celToFar(){
    let fah = ( parseFloat(celsius.value) * 9/5 ) + 32;
    let kel = ( parseFloat(celsius.value) + 273.15);
    fahrenheit.value = parseFloat(fah.toFixed(3));
    kelvin.value = parseFloat(kel.toFixed(3));
    console.log(fah);
    console.log(kel);

}

function farToCel(){
    let cel = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    let kel = (parseFloat(fahrenheit.value) - 32 /(9/5)) + 273.15;
    celsius.value = parseFloat( cel.toFixed(3));
    kelvin.value = parseFloat(kel.toFixed(3));
    console.log(cel);
    console.log(kel);
}

function keltocal(){
    let cel = ( parseFloat(kelvin.value - 273.15));
    let fah = (parseFloat(kelvin.value) * 9/5) + 32;
    celsius.value = parseFloat(cel.toFixed(3));
    fahrenheit.value = parseFloat(fah.toFixed(3));
    console.log(cel);
    console.log(fah);
    
}