function Ride_function(){
   var Height,Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52) ? "You are too short ":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride + "to rid";
}
function Vehicle(Mark,Model,Year,Color){
    this.Vehicle_Mark=Mark;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;

}
var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford","pinto",1971,"Mustard");
function myfunction(){
    document.getElementById("keyword_and_Constructors").innerHTML="Erik drives a" +Erik.Vehicle_Color +"-colored" + Erik.Vehicle_Model+"Manufactured in" + Erik.Vehicle_Year;

}
function count_Function(){
    document.getElementById("Nested_function").innerHTML=count();
    function count(){
        var Starting_point=9;
        function Plus_one() {
         Starting_point+=1; 
        }
        Plus_one();
        return Starting_point;
    }
}