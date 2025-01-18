var today=new Date();// create a new date
var curr_hr=today.getHours(); // finding current hour
var greet;

//display appropiriate greeting based on hour
if(curr_hr>18)
{
    greet='Good Evening';
}
else if(curr_hr>12&&curr_hr<18)
{
    greet='Good Evening';
}
else if(curr_hr>0)
{
    greet='Good Morning';
}
else
{
    greet='Welcome';
}
document.write('<h3>+greet+</h3>');