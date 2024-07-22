//This variables keeps track of whose turn it is.
let activePlayer='X';
//This array store array of moves. we use this to determine win conditions.
let selectedSquares= [];

//This function is for  placing an x or o in a square.
function placeXOrO(squareNumber){
    //This condition ensures a square hasn't been selected already.
    //the .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        //This variable retrieves the HTML element id that was clicked.
        let select=document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if(activePlayer==='X'){
            //If activePlayer is equal to 'X' , the x.png is placed in HTML
            select.style.backgroundImage ='url("images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else{
            //If activePlayer is equal to 'O' , the o.png is placed in HTML
            select.style.backgroundImage ='url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if(activePlayer === 'X'){
            //if active player is 'X' change to 'O'.
            activePlayer = 'O';
            //if active player is 'X' change to 'X'.
        } else{
            //change the activePlayer to 'X';
            activePlayer = 'X';
        }
        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it is the computers turn.
        if(activePlayer === 'O'){
            //This function disables clicking for computer turn.
            disableClick();
            //This function wait 1 second before the computer place an image and enables click.
            setTimeout(function() {computersTurn(); },1000);
        } 
        //Returning true is needed for our computerTurn() function to work.
        return true;
    }
    //This function results in a random square being selected by the computer.
    function computersTurn(){
        //This boolean is needed for our while loop.
        let success=false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while(!success){
            //A random number between 0 to 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasn't been selected yet.
            if(placeXOrO(pickASquare)) {
                //This line call the function.
                placeXOrO(pickASquare);
                //This change our boolean and end the loop.
                success=true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw aline on the screen if the condition is met.
function checkWinConditions(){
    //x 0,1,2 condition.
    if(arrayIncludes('0X','1X','2X')){drawWinLine(50,100,558,100)}
    //x 3,4,5 condition.
    else if(arrayIncludes('3X','4X','5X')){drawWinLine(50,304,558,304)}
    //x 6,7,8 condition.
    else if(arrayIncludes('6X','7X','8X')){drawWinLine(50,508,558,508)}
    //x 0,3,6 condition.
    else if(arrayIncludes('0X','3X','6X')){drawWinLine(100,50,100,558)}
    //x 1,4,7 condition.
    else if(arrayIncludes('1X','4X','7X')){drawWinLine(304,50,304,558)}
    //x 2,5,8 condition.
    else if(arrayIncludes('2X','5X','8X')){drawWinLine(508,50,508,558)}
    //x 6,4,2 condition.
    else if(arrayIncludes('6X','4X','2X')){drawWinLine(100,508,510,90)}
    //x 0,4,8 condition.
    else if(arrayIncludes('0X','4X','8X')){drawWinLine(100,100,520,520)}
    //O 0,1,2 condition.
    else if(arrayIncludes('0O','1O','2O')){drawWinLine(50,100,558,100)}
    //O 3,4,5 condition.
    else if(arrayIncludes('3O','4O','5O')){drawWinLine(50,304,558,304)}
    //O 6,7,8 condition.
    else if(arrayIncludes('06','7O','8O')){drawWinLine(50,508,558,508)}
    //O 0,3,6 condition.
    else if(arrayIncludes('0O','3O','6O')){drawWinLine(100,50,100,558)}
    //O 1,4,7 condition.
    else if(arrayIncludes('01','4O','7O')){drawWinLine(304,50,304,558)}
    //O 2,5,8 condition.
    else if(arrayIncludes('02','5O','8O')){drawWinLine(508,50,508,558)}
    //O 6,4,2 condition.
    else if(arrayIncludes('06','4O','2O')){drawWinLine(100,508,510,90)}
    //O 0,4,8 condition.
    else if(arrayIncludes('0O','4O','8O')){drawWinLine(100,100,520,520)}
    //This condition checks for a tie. If none of the above condition are met and
    //9 squares are selected the code executes.
    else if(selectedSquares.length >= 9){
        //This function plays the tie game sound.
        audio('./media/tie.mp3');
        //This function sets a.3 second timer before the resetGame is called.
        setTimeout(function(){resetGame(); },500);
    }
    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA,squareB,squareC){
        // This 3 variables will be usd to check 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // If the 3 variable we pass are sll included in our array then 
        //true is returned and our else if condition executes the drawLine() function.
        if(a === true && b === true && c === true){return true;}
    }
}

//Cleats the border and the array to restart the game
function resetGame(){
    for(let i=0; i< 9; i++){
        let square=document.getElementById(String(i));
        square.style.backgroundImage='';
    }
    selectedSquares=[];
}
//This function makes our body element temporarily un clickable.
//This function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL){
    //we create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //play method plays our audio sound.
    audio.play();
}

//Function to draw the line across winning coordinates
function drawWinLine(cooedX1,coordY1,coordX2,coordY2){
    const canvas=document.getElementById('win-lines');
    const c=canvas.getContext('2d');
    let x1=coordX1,
        y1=coordY1,
        x2=coordX2,
        y2=coordY2,
        x=x1,
        y=y1;
        function animateLineDrawing(){
            const animationLoop=requestAnimationFrame(animateLineDrawing);
            c.clearRect(0,0,608,608);
            c.beginPath();
            c.MoveTo(x1,y1);
            c.lineTo(x,y);
            c.lineWidth=10;
            c.strokeStyle='rgba(70,255,33,.8)';
            c.stroke();
            if(x1<=x2 && y1<=y2){
                if(x<x2){x+=10;}
                if(y<y2){y+=10;}
                if(x>=x2 && y>=y2){cancelAnimationFrame(animationLoop);}
            }
            if(x1<=x2 && y1>=y2){
                if(x<x2){x+=10;}
                if(y>y2){y-=10;}
                if(x>=x2 && y<=y2){cancelAnimationFrame(animationLoop);}
            }
        }
        //Clears the board after the animation 
        function clear(){
            const animationLoop=requestAnimationFrame(clear);
            c.clearRect(0,0,608,608);
            cancelAnimationFrame(animationLoop);
        }
        disableClick();
        audio('./media/winGame.mp3');
        animateLineDrawing();
        setTimeout(function (){clear(); resetGame(); }, 1000);
}
//Disables click during the computer's turn
function disableClick(){
    body.style.pointerEvents='none';
    setTimeout(function () { body.style.pointerEvents='auto'; },1000);
}
