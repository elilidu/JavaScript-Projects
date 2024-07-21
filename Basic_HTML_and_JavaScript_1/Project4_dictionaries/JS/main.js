function dictionery_function(){
    var myinfo={Fname:"elias",
        Lname:"Getachew",
        Address:"Medoland",
        city:"Ottawa",
    }
    delete myinfo.Lname;
    document.getElementById('Dictionary').innerHTML=myinfo.Lname;
}