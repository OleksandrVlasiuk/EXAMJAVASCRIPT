var Users = [];
var COunt = 0;
var Action = 1;
var Name;
var Id;
var Count;
var Email;
$("#EnterButton").on("click", pressEnter);
$("#refresh").on("click", Refresh);

function pressEnter() {
    Name = $("#name").val();
    Count = parseInt($("#count").val());
    Email = $("#email").val();
    if (Action == 1) {
        if(Name!=null && Name!="" && Count!=null && Count!="" && Email!=null && Email!="" ){
        COunt++;
        $("#myTable").append("<tr id=" + COunt + ">" + "<td>" + COunt + "</td> <td> " + Name + " </td>  <td>" + Count + "</td><td> " + Email + "</td><td><button type='button' class='btn btn-primary' onclick='delUser(" + COunt + ")'>DELETE</button><button type='button' class='btn btn-dark editButton' onclick='editUser("+COunt+',"'+ Name +'",'+Count+',"'+Email+'")>EDIT</button></td></tr>');
        }
        else{
            alert("Bad data");
        }
    }
    else {
        if(Name!=null && Name!="" && Count!=null && Count!="" && Email!=null && Email!="" ){
        $("#" + Id).remove();
        $("#myTable").append("<tr id=" +Id + ">" + "<td>" + COunt + "</td> <td> " + Name + " </td> <td>" + Count + "</td><td> " + Email + "</td><td><button type='button' class='btn btn-primary' onclick='delUser(" + COunt + ")'>DELETE</button><button type='button' class='btn btn-dark editButton' onclick='editUser("+Id+',"'+ Name +'",'+Count+',"'+Email+")'>EDIT</button></td></tr>");
        $("h1").html("Add");
        }
        else{
            alert("Bad data");
        }
    }
    Action = 1;
    $("#name").val("");
    $("#count").val("");
    $("#email").val("");
}

function delUser(trId) {
    Count--;
    $("#" + trId).remove();
}

function Refresh(){
    $("#name").val("");
    $("#count").val("");
    $("#email").val("");
    for(var i=0;i<Count;i++){
    $("#"+i).remove();
    }
   // $("#myTable").append("<tr id=" +Id + ">" + "<td>" + COunt + "</td> <td> " + Name + " </td> <td>" + Count + "</td><td> " + Email + "</td><td><button type='button' class='btn btn-primary' onclick='delUser(" + COunt + ")'>DELETE</button><button type='button' class='btn btn-dark' onclick='editUser("+Id+","+ Name +","+Count+","+Email+")'>EDIT</button></td></tr>");
}

function editUser(trId,nameUser,AgeUser,emailUser) {
    Id = trId;
    $("h1").html("Edit");
    // Name = $("#" + nameUser).Name;
    // Count = $("#" + AgeUser).Count;
    // Email = $("#" + emailUser).Email;
    $("#name").val(nameUser);
    $("#count").val(AgeUser);
    $("#email").val(emailUser);
    Action = 2;
}