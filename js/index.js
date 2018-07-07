function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        text.style.display = "block";
        document.getElementsByClassName('form-groupM1')[0].style.display = "block";
        document.getElementsByClassName('form-groupM2')[0].style.display = "block";

    } else {
       text.style.display = "none";
       document.getElementsByClassName('form-groupM1')[0].style.display = 'none';
       document.getElementsByClassName('form-groupM2')[0].style.display = 'none';


    }
}
function showAdditionalBookingM(){
    document.getElementsByClassName('form-groupM3')[0].style.display = "block";
    document.getElementsByClassName('form-groupM4')[0].style.display = "block";
}

function showAdditionalBookingW(){
    document.getElementsByClassName('form-groupW3')[0].style.display = "block";
    document.getElementsByClassName('form-groupW4')[0].style.display = "block";
}
function showAdditionalBookingTh(){
    document.getElementsByClassName('form-groupTh3')[0].style.display = "block";
    document.getElementsByClassName('form-groupTh4')[0].style.display = "block";
}
function showAdditionalBookingF(){
    document.getElementsByClassName('form-groupF3')[0].style.display = "block";
    document.getElementsByClassName('form-groupF4')[0].style.display = "block";
}
function showAdditionalBookingS(){
    document.getElementsByClassName('form-groupS3')[0].style.display = "block";
    document.getElementsByClassName('form-groupS4')[0].style.display = "block";
}
function showAdditionalBookingSt(){
    document.getElementsByClassName('form-groupSt3')[0].style.display = "block";
    document.getElementsByClassName('form-groupSt4')[0].style.display = "block";
}


function myFunction1() {
    var checkBox = document.getElementById("myCheck1");
    var text1 = document.getElementById("text1");
    if (checkBox.checked == true){
        text.style.display = "block";
        document.getElementsByClassName('form-groupT1')[0].style.display = "block";
        document.getElementsByClassName('form-groupT2')[0].style.display = "block";

    } else {
       text.style.display = "none";
       document.getElementsByClassName('form-groupT1')[0].style.display = 'none';
       document.getElementsByClassName('form-groupT2')[0].style.display = 'none';


    }
}
function showAdditionalBookingT(){
    document.getElementsByClassName('form-groupT3')[0].style.display = "block";
    document.getElementsByClassName('form-groupT4')[0].style.display = "block";
}
function myFunction2() {
    var checkBox = document.getElementById("myCheck2");
    var text2= document.getElementById("text2");
    if (checkBox.checked == true){
        text.style.display = "block";
        document.getElementsByClassName('form-groupW1')[0].style.display = "block";
        document.getElementsByClassName('form-groupW2')[0].style.display = "block";

    } else {
       text.style.display = "none";
       document.getElementsByClassName('form-groupW1')[0].style.display = 'none';
       document.getElementsByClassName('form-groupW2')[0].style.display = 'none';


    }
}
function myFunction3() {
    var checkBox = document.getElementById("myCheck3");
    var text3 = document.getElementById("text3");
    if (checkBox.checked == true){
        text.style.display = "block";
        document.getElementsByClassName('form-groupTh1')[0].style.display = "block";
        document.getElementsByClassName('form-groupTh2')[0].style.display = "block";

    } else {
       text.style.display = "none";
       document.getElementsByClassName('form-groupTh1')[0].style.display = 'none';
       document.getElementsByClassName('form-groupTh2')[0].style.display = 'none';


    }
}
function myFunction4() {
    var checkBox = document.getElementById("myCheck4");
    var text4 = document.getElementById("text4");
    if (checkBox.checked == true){
        text.style.display = "block";
        document.getElementsByClassName('form-groupF1')[0].style.display = "block";
        document.getElementsByClassName('form-groupF2')[0].style.display = "block";

    } else {
       text.style.display = "none";
       document.getElementsByClassName('form-groupF1')[0].style.display = 'none';
       document.getElementsByClassName('form-groupF2')[0].style.display = 'none';


    }
}
function myFunction5() {
    var checkBox = document.getElementById("myCheck5");
    var text5 = document.getElementById("text5");
    if (checkBox.checked == true){
        text.style.display = "block";
        document.getElementsByClassName('form-groupS1')[0].style.display = "block";
        document.getElementsByClassName('form-groupS2')[0].style.display = "block";

    } else {
       text.style.display = "none";
       document.getElementsByClassName('form-groupS1')[0].style.display = 'none';
       document.getElementsByClassName('form-groupS2')[0].style.display = 'none';


    }
}
    function myFunction6() {
        var checkBox = document.getElementById("myCheck6");
        var text = document.getElementById("text6");
        if (checkBox.checked == true){
            text.style.display = "block";
            document.getElementsByClassName('form-groupSt1')[0].style.display = "block";
            document.getElementsByClassName('form-groupSt2')[0].style.display = "block";
    
        } else {
           text.style.display = "none";
           document.getElementsByClassName('form-groupSt1')[0].style.display = 'none';
           document.getElementsByClassName('form-groupSt2')[0].style.display = 'none';
    
    
        }
    
    }
    

    var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}