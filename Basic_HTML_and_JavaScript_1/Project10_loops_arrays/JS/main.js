function MyLoop(){
    var num="";
    var x=1;
    while(x<11){
        num +="<br>" + x;
        x++;
        document.getElementById("Loop").innerHTML=num;  
    }

}
    
    
    function for_loop(){
         var Instrument=["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
        var x="";
        var Y;
        for(Y=0; Y < 5;Y++){
            x += Instrument[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML=x;
    }
function array_Function(){
    var pic=[];
    pic[0]="sleeping";
    pic[1]="playing";
    pic[2]="eating";
    pic[3]="purring";
document.getElementById("Array").innerHTML="In this picture, the cat is "+ pic[2]+".";
}
function constant_function(){
    const x=20;
    x=30;
    document.write(x);
}

function local_only_accessed(){
var x=100;
document.write(x);
    {
    let x=150;
    document.write("<br>"+x);
    }
    document.write("<br>"+x);
}

function global_accessed(){
    var x=200;
    document.write("<br>"+x);
    {
        var x=250;
        document.write("<br>"+x);
    }
    document.write("<br>"+x);
}
 function show_object(){
    let car={
        mark:" Dodge ",
        model:" Viper ",
        year:" 2021 ",
        color:" red ",
        description: function(){
            return "the car is a " + this.year + this.color + this.mark + this.model;

        }

    };
    document.getElementById("Car_object").innerHTML=car.description();
 }

