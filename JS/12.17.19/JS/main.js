var test;
function programClick(){
//document.getElementById("myBTN").style.background = "red";

// test = document.getElementById("test").value;
// document.getElementById("text").innerHTML = "<u>HELLO</u>";

test = $("#test").val();
$("#text").append("<u>"+test+"</u>");
$("#myBTN").css("background-color","red");

}









