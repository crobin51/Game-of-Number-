var ids= [];
var boardS = 0;
var drawS = 0;


    
function StartGame(){
   
  
getNewBoard();
getDraw();
    var scoreID = document.getElementById("scoreval");
    var score = scoreID.innerHTML;
    var newScore = 0;
    scoreID.innerHTML = newScore;
    boardS = 0;
    drawS = 0;
    
}

function ImageOnHover(current){
 var div = document.getElementById(current);
    
    div.style.borderColor = ("darkorange");
 
          
}

function ImageOnOut(current){
    
     var div = document.getElementById(current);
    
    div.style.borderColor = ("darkblue");
    
}

function SetNumbers(current, div){
   // console.log(current);
    //console.log(div);
    
   
    
    if (current == 1){
        //console.log("yes 1");
       div.style.backgroundImage = "url('images/1.png')";
        div.style.zIndex = "1";
    }
    else if (current == 2){
         //console.log("yes 2");
         div.style.backgroundImage = "url('images/2.png')";
    }
    else if (current == 3){
         //console.log("yes 3");
         div.style.backgroundImage = "url('images/3.png')";
    }
    else if (current == 4){
         //console.log("yes 4");
         div.style.backgroundImage = "url('images/4.png')";
    }
    else if (current == 5){
         //console.log("yes 5");
     div.style.backgroundImage = "url('images/5.png')";
    }
    else if (current == 6){
         //console.log("yes 6");
       div.style.backgroundImage = "url('images/6.png')";
    }
    else if (current == 7){
         //console.log("yes 7");
          div.style.backgroundImage = "url('images/7.png')";
    }
    else if (current == 8){
         //console.log("yes 8");
          div.style.backgroundImage = "url('images/8.png')";
    }
    
    else{
        // console.log("yes 9");
        div.style.backgroundImage = "url('images/9.png')";
    }
   
}

function getDraw(){
   var num1 = document.getElementById("num1");
        var num2 = document.getElementById("num2");
        var num3 = document.getElementById("num3");
        var draw = [];
        var drawID = [];
        drawID.push(num1);
        drawID.push(num2);
        drawID.push(num3);
         var check = 1;
         for(var i = 0; i < 3; i++){
             check = Math.floor((Math.random()*9)+1);
             
             draw.push(check);
             //console.log(drawID);
             drawID[i].innerHTML = draw[i];
             SetNumbers( drawID[i].innerHTML,drawID[i] );
         }
    if (boardS > 0){
        
     var scoreID = document.getElementById("scoreval");
    var score = scoreID.innerHTML;
    var newScore = parseInt(score) - 15;
    scoreID.innerHTML = newScore;
    }
        else{
            boardS++;
        }
        
    
        
          
    
    
   
    
}

function getNewBoard(){
      var numbers = [];
    var obj = document.getElementsByClassName("row1");
    var obj2 = document.getElementsByClassName("row2");
    var obj3 = document.getElementsByClassName("row3");
    var obj4 = document.getElementsByClassName("row4");
    var obj5 = document.getElementsByClassName("row5");
    
    
        
    for(var i = 0; i < 5; i++){
        ids.push(obj[i]);
         ids.push(obj2[i]);
        ids.push(obj3[i]);
        ids.push(obj4[i]);
        ids.push(obj5[i]);
           
       
    }
    //console.log(ids);
 
   var check = 0;
    
    for(var i = 0; i < 9; i++){
           
           check = Math.floor((Math.random()*9)+1);
             //console.log(check.Roll[i]);
             //console.log(check.Roll[i].value);
             numbers.push(check);
            //console.log(numbers[i]);
             
        
             
        }
        
             
            
             //console.log(numbers);
       
    
        
        

    
     for(var i = 0; i < 25; i++){
           //var id = ids[i].id;
            check = Math.floor((Math.random()*9)+1);   
            //console.log(id);
            place = numbers[i];
            //console.log(place);
            ids[i].innerHTML = check;
            //ids[i].style.color = "red";
            //console.log(ids[i].innerHTML);  
        SetNumbers(ids[i].innerHTML, ids[i]);
        ids[i].style.display = "inline";
           
       
    }
    if (drawS > 0){
        
     var scoreID = document.getElementById("scoreval");
    var score = scoreID.innerHTML;
    var newScore = parseInt(score) - 30;
    scoreID.innerHTML = newScore;
    }
    else{
        drawS++;
    }

     
    
}

function ImageOnClick(current){
    var scoreID = document.getElementById("scoreval");
    var score = scoreID.innerHTML;
    //console.log(score);
    
    var div = document.getElementById(current);
    var divNum = div.innerHTML;
    //console.log(divNum);
    
   var check1ID = document.getElementById("num1");
    var check1 = check1ID.innerHTML;
    //console.log(check1);
    
    var check2ID = document.getElementById("num2");
    var check2 = check2ID.innerHTML;
    
    var check3ID = document.getElementById("num3");
    var check3 = check3ID.innerHTML;
    
    if (divNum == check1||divNum == check2||divNum == check3){
        //console.log("ok");
        var addIt = parseInt(divNum);
        var newScore = (parseInt(score) + 5 + addIt);
        //console.log(newScore);
        scoreID.innerHTML = newScore;
        
        div.style.display = "none";
        //console.log(div.id);
    }
    else {
        var loseIt = parseInt(divNum);
        var newScore = (parseInt(score) - loseIt);
        //console.log("no");
        scoreID.innerHTML = newScore;
    }
}


