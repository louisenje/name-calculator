var daysOfWeek=[
    "sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];
var maleNames=[
     "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
];
var femaleNames=[
     "Akosua", "Adwoa", "Abenaa", "Akua","Yaa","Afua","Ama"
];
//calling functions
function getName(){
    var year= parseInt(document.getElementById("year").value)
    var month= parseInt(document.getElementById("month").value)
    var day= parseInt(document.getElementById("day").value)
    var male=document.getElementById("male")
    var female=document.getElementById("male")
//validation
if (day<=0||day>31)
alert("pleas enter the correct day");
else if(month<0||month>12||month==2 && day>29)
alert ("[Please enter the correct month");
var day= new Date(year + "/" + month+ "/" + day);
var birthDay=day.getDay();
if (male.checked==true){
    alert( "You were born on" + daysOfWeek[birthDay] + "and your akan name is"+ maleNames[birthDay])
}
else if(female.checked==true)
    alert( "You " + daysOfWeek[birthDay] + "and your akan name is + femaleNames[birthDay])
}
}