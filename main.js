var count = 18;
var score =0;
var n2=1,n3=1,n4=1,n6=1,n8=1,n9=1,n10=1,n11=1,n12=1,n13=1,n15=1,n16=1,n17=1,n19=1;
var n20=1,n22=1,n23=1,n24=1;
function hit2(){
    if(n2>0){
        document.getElementById("box2").style.background = "limegreen";
        document.getElementById("box3").style.background = "limegreen";
        document.getElementById("box4").style.background = "limegreen";
        
        if(n3 ===1 && n4==1){
            count -=3;
            score +=3;
        }else if((n3 ===1 && n4==0) ||(n3 ===0 && n4==1)){
            count -=2;
            score +=2;
        }else{
            count--;
            score++;
        }
        document.getElementById("score").innerHTML = score;
        if(count===0){
            document.getElementById("result").innerHTML = "WINNER";
            document.getElementById("result").style.border = "2px solid limegreen"; 
        }
    }
    n2=0;
    n3=0;
    n4=0;
}
function hit3(){
    if(n3>0){
    document.getElementById("box3").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
    }
    n3=0;
}
function hit4(){
    if(n4>0){
    document.getElementById("box4").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n4=0;
}
function hit6(){
    if(n6>0){
    document.getElementById("box6").style.background = "limegreen";
    document.getElementById("box11").style.background = "limegreen";
    document.getElementById("box16").style.background = "limegreen";
    if(n11 ===1 && n16==1){
        count -=3;
        score +=3;
    }else if((n11 ===1 && n16==0) ||(n11 ===0 && n16==1)){
        count -=2;
        score +=2;
    }else{
        count--;
        score++;
    }
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n6=0;
n11=0;
n16=0;
}
function hit8(){
    if(n8>0){
    document.getElementById("box8").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n8=0;
}
function hit9(){
    if(n9>0){
    document.getElementById("box9").style.background = "limegreen";
    document.getElementById("box10").style.background = "limegreen";
    if(n10===1){
        count -=2;
        score +=2;
    }else{
        count--;
        score++;
    }
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid green"; 
    }
}
n9=0;
n10=0;
}
function hit10(){
    if(n10>0){
    document.getElementById("box10").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n10=0;
}
function hit11(){
    if(n11>0){
    document.getElementById("box11").style.background = "limegreen";
    document.getElementById("box12").style.background = "limegreen";
    if(n12===1){
        count -=2;
        score +=2;
    }else{
        count--;
        score++;
    }
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n11=0;
n12=0;
}
function hit12(){
    if(n12>0){
    document.getElementById("box12").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n12=0;
}
function hit13(){
    if(n13>0){
    document.getElementById("box3").style.background = "limegreen";
    document.getElementById("box8").style.background = "limegreen";
    document.getElementById("box13").style.background = "limegreen";
    if(n3 ===1 && n8==1){
        count -=3;
        score +=3;
    }else if((n3 ===1 && n8==0) ||(n3 ===0 && n8==1)){
        count -=2;
        score +=2;
    }else{
        count--;
        score++;
    }
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid green"; 
    }
}
n3=0;
n8=0;
n13=0;
}
function hit15(){
    if(n15>0){
    document.getElementById("box15").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n15=0;
}
function hit16(){
    if(n16>0){
    document.getElementById("box16").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n16=0;
}
function hit17(){
    if(n17>0){
    document.getElementById("box17").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid green"; 
    }
}
n17=0;
}
function hit19(){

    if(n19>0){
    document.getElementById("box19").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n19=0;
}
function hit20(){
    
    if(n20>0){
    document.getElementById("box20").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n20=0;
}
function hit22(){
    
    if(n22>0){
    document.getElementById("box22").style.background = "limegreen";
    count--;
    score++;
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid green"; 
    }
}
n22=0;
}
function hit23(){
    
    if(n23>0){
    document.getElementById("box23").style.background = "limegreen";
    document.getElementById("box24").style.background = "limegreen";
    if(n24===1){
        count -=2;
        score +=2;
    }else{
        count--;
        score++;
    }
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid green"; 
    }
}
n23=0;
n24=0;
}
function hit24(){
    if(n24>0){
    document.getElementById("box22").style.background = "limegreen";
    document.getElementById("box23").style.background = "limegreen";
    document.getElementById("box24").style.background = "limegreen";
    if(n22 ===1 && n23==1){
        count -=3;
        score +=3;
    }else if((n22 ===1 && n23==0) ||(n22 ===0 && n23==1)){
        count -=2;
        score +=2;
    }else{
        count--;
        score++;
    }
    document.getElementById("score").innerHTML = score;
    if(count===0){
        document.getElementById("result").innerHTML = "WINNER";
        document.getElementById("result").style.border = "2px solid limegreen"; 
    }
}
n22=0;
n23=0;
n24=0;
}

function miss(){
    document.getElementById("box1").style.background = "red";
    document.getElementById("box2").style.background = "limegreen";
    document.getElementById("box3").style.background = "limegreen";
    document.getElementById("box4").style.background = "limegreen";
    document.getElementById("box5").style.background = "red";
    document.getElementById("box6").style.background = "limegreen";
    document.getElementById("box7").style.background = "red";
    document.getElementById("box8").style.background = "limegreen";
    document.getElementById("box9").style.background = "limegreen";
    document.getElementById("box10").style.background = "limegreen";
    document.getElementById("box11").style.background = "limegreen";
    document.getElementById("box12").style.background = "limegreen";
    document.getElementById("box13").style.background = "limegreen";
    document.getElementById("box14").style.background = "red";
    document.getElementById("box15").style.background = "limegreen";
    document.getElementById("box16").style.background = "limegreen";
    document.getElementById("box17").style.background = "limegreen";
    document.getElementById("box18").style.background = "red";
    document.getElementById("box19").style.background = "limegreen";
    document.getElementById("box20").style.background = "limegreen";
    document.getElementById("box21").style.background = "red";
    document.getElementById("box22").style.background = "limegreen";
    document.getElementById("box23").style.background = "limegreen";
    document.getElementById("box24").style.background = "limegreen";
    document.getElementById("box25").style.background = "red";
    document.getElementById("result").innerHTML = "TRY AGAIN";
    document.getElementById("result").style.border = "2px solid red";
    
}

function reset(){
    count =18;
    score=0;
    n2=1;n3=1;n4=1;n6=1;n8=1;n9=1;n10=1;n11=1;n12=1;n13=1;n15=1;n16=1;n17=1;n19=1;
    n20=1;n22=1;n23=1;n24=1;
    document.getElementById("box1").style.background = "gray";
    document.getElementById("box2").style.background = "gray";
    document.getElementById("box3").style.background = "gray";
    document.getElementById("box4").style.background = "gray";
    document.getElementById("box5").style.background = "gray";
    document.getElementById("box6").style.background = "gray";
    document.getElementById("box7").style.background = "gray";
    document.getElementById("box8").style.background = "gray";
    document.getElementById("box9").style.background = "gray";
    document.getElementById("box10").style.background = "gray";
    document.getElementById("box11").style.background = "gray";
    document.getElementById("box12").style.background = "gray";
    document.getElementById("box13").style.background = "gray";
    document.getElementById("box14").style.background = "gray";
    document.getElementById("box15").style.background =  "gray";
    document.getElementById("box16").style.background =  "gray";
    document.getElementById("box17").style.background =  "gray";
    document.getElementById("box18").style.background =  "gray";
    document.getElementById("box19").style.background =  "gray";
    document.getElementById("box20").style.background =  "gray";
    document.getElementById("box21").style.background =  "gray";
    document.getElementById("box22").style.background = "gray";
    document.getElementById("box23").style.background =  "gray";
    document.getElementById("box24").style.background =  "gray";
    document.getElementById("box25").style.background =  "gray";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.border = "0px";
    document.getElementById("score").innerHTML = score;
}