 let random;

 document.getElementById("gokbutton").onclick = function(){
     //Number between 1 and 100
    random = Math.floor(Math.random() * 100) + 1;

    console.log(random);
    document.getElementById("getal").innerHTML = random;
 }