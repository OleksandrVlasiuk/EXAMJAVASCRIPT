function getRegistr(){
    var _name = document.getElementById("txtName").value;
    var _login = document.getElementById("txtLogin").value;
    var _password = document.getElementById("txtLogin").value;
    if(_name == null || _name=="" || _login == null || _login=="" || _password == null || _password=="" ){
    alert("Bad data ! Try again .");
    }
    else {
        alert("Successfully registred.Welcome "+ _name);
    }

}

