$("button").on("click",getElements);

//var Users = [{id:1,name:"Andrii",age:20,email:"cuanid34663@gmail.com"},{id:2,name:"Bogdan",age:20,email:"lol122@gmail.com"},{id:3,name:"Viktor",age:20,email:"viktor5464@gmail.com"}];
var Users = [];
var count = 0;

function init(){
for(var i=0;i<50;i++)
{
    count++;
    Users.push({id:count,name:"Oksana",age:16,email:"za100@gmail.com"});
}
for(var i=0;i<30;i++){
    Users.pop();
    }
}
init();


function getElements(){
for(var i=0;i<Users.length;i++){
$("#myList").append("<li id="+Users[i].id+"> Name : "+Users[i].name+" Age : "+Users[i].age+" Email : "+Users[i].email+"<button onclick='delUser("+Users[i].id+")'>DELETE</button></li>");
}
}

function delUser(userId){
$("#"+userId).remove();
}

