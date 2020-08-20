function celsiusToFahrenheit(){
    var x = document.getElementById('num').value;
    var wordDisplay;
    if(x == ""){
       wordDisplay = "Please enter a number";
    }else{
        wordDisplay = "Fahrenheit = " + x*(9/5)+32;
    }
    document.getElementById('answer').innerHTML = wordDisplay;
}