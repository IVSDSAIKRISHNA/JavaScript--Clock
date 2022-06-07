function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var d = document.getElementById("am");


    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    if (a > 12) {
        
       hours.innerHTML = a-12 ;
    }
    else{
        hours.innerHTML=a;
    }

    minutes.innerHTML = b;
    seconds.innerHTML = c;

    if (a > 0 && a < 12) {
        d.innerHTML = "AM";
    }
    else {
        d.innerHTML = "PM"
    }
}
function Makediv(){
    
    // document.getElementById('edo').innerHTML="edo okati";
    var container = document.createElement("div");
    
    
    
    container.id="dymanicshit";
    
    
    document.getElementById("left-second-container").appendChild(container);
    
    
    var invalue=document.getElementById("wakeupTimeselector");
    
    var value=invalue.options[invalue.selectedIndex].text;
    
    
    document.getElementById("dynamicshit").innerHTML="wake up time " + value;
    
}



setInterval(clock, 1000);
function settime() {

    var i = document.getElementById("wakeupTimeselector").value;
    //document.getElementById('msg1').style.display = "none";
    document.getElementById('msg1').style.inner="wow";
    



    var hourr = new Date().getHours();

    if (i == 24) {
        i = 0;

    }

    if (i == hourr) {

        document.getElementById("photo1").style.backgroundImage = "url('GoodMorning.png')";
        
        document.getElementsByClassName("msg").innerHTML = "Wake up Dumbass";
        alert("a")




    }


    var j = document.getElementById("wakeupTimeselector2").value;



    var hourr = new Date().getHours();

    if (j == 24) {
        j = 0;

    }

    if (j == hourr) {
        alert("b");

        document.getElementById("photo1").style.backgroundImage = "url('goodafternoon.png')";

        document.getElementsByClassName("msg").innerHTML = "asdfghjkl";




    }

    var k = document.getElementById("wakeupTimeselector3").value;



    var hourr = new Date().getHours();
    
    if (k == 24) {
        k = 0;

    }

    if (k == hourr) {
        alert("c");

        document.getElementById("photo1").style.backgroundImage = "url('goodevening.png')";

        document.getElementsByClassName("msg").innerHTML = "asdfghjkl";




    }

    var l = document.getElementById("wakeupTimeselector4").value;



    var hourr = new Date().getHours();

    if (l == 24) {
        l = 0;

    }

    if (l == hourr) {
       alert("d");
        document.getElementById("photo1").style.backgroundImage = "url('goodnight.png')";
        

        document.getElementsByClassName("msg").innerHTML = "asdfghjkl";




    }

 Makediv();
}

