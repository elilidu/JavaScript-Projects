// Assigning local and global variables
var x=10;
function Add_numbers_1(){
    document.write(20+x+"<br>");
    console.log(20+x);

}
function Add_number_2(){
    document.write(x+100);
    console.log(x+100);
}
Add_numbers_1();
Add_number_2();
function get_Date(){
    if(new Date().getHours()<18){
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}