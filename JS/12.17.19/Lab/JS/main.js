if(document.getElementById("myBTN").value!=null || document.getElementById("myBTN").value!='')
var num = parseInt(document.getElementById("myBTN").value);
function pluseOneClick(){    
num=num+1;
document.getElementById("myBTN").innerHTML = num;
}
function minusOneClick(){
num--;
document.getElementById("myBTN").innerHTML = num;
}