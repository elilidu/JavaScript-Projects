function zsum()
{
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var sum=x+y;
    document.getElementById("ans").value=sum;
}
function subtraction_function() {
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
        var diff=x-y;
        document.getElementById("ans").value=diff;
    
}
function multiplication_function() {
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
        var mul=x*y;
        document.getElementById("ans").value=mul;
}

function division_function(){
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var divs=x/y;
    document.getElementById("ans").value=divs;
}
function module_function(){
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var modu=x%y;
    document.getElementById("ans").value=modu;
}
function negitiv_function(){
    var x=parseInt(document.getElementById("num1").value);
    document.getElementById("ans").value=-x;
}
function increment_function(){
    var x=parseInt(document.getElementById("num1").value);
    x++;
    document.getElementById("ans").value=x;
}

function decrement_function(){
    var x=parseInt(document.getElementById("num1").value);
    x--;
    document.getElementById("ans").value=x;
}
function random_function(){
    window.alert(Math.random()*100);
}