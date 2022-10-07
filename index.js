let countHome=document.getElementById("counthome")
let countGust=document.getElementById("countgust")
let counthome=0;
let countgust=0;

function home1(){
    counthome+=1
    countHome.textContent=counthome
    

}
function home2(){
    counthome+=2
    countHome.textContent=counthome

}
function home3(){
    counthome+=3
    countHome.textContent=counthome

}
function gust1(){
    countgust+=1
    countGust.textContent=countgust
    

}
function gust2(){
    countgust+=2
    countGust.textContent=countgust

}
function gust3(){
    countgust+=3
    countGust.textContent=countgust

}
function Rest(){
    countHome.textContent=0
    countGust.textContent=0
    counthome=0
    countgust=0
}

function save(){
    alert("The HOME team's point="+counthome +"  || The GUEST team's point="+countgust)
}
