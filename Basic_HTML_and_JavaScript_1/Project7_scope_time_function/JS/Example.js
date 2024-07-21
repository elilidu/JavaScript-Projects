// A function  that include an if statement
function get_Date(){
    if(new Date().getHours()>18){
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}
//A Function with if else statements
function Age_function(){
    Age=document.getElementById("Age").value;
    if(Age>=18){
        Vote="You are enough to Vote!";
    }
    else{
        Vote="You are not enough to Vote";
    }
    document.getElementById("Hoe_oldare_you?").innerHTML=Vote;
}