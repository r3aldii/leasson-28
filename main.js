var button1=document.getElementById('btn1');
var button1=document.getElementById('btn2');
var button1=document.getElementById('btn3');
var button1=document.getElementById('btn4');


button1.onclick=function()
{
    alert('hello');
}
button2.onmouseover=function()
{
    alert('hello');
}
button3.onmouseleave=function()
{
    alert('hello');
}
button4.onmousewheel=function()
{
    alert('hello');
}

var firstbutton=document.querySelector('button');

firstbutton.oneclick=function(){
    alert('hello world');
}

button3.addEventlistener('click',function(){
    alert('hello from digital school');
});