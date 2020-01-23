function delUser(trId) {
  $(".Load").show;
    res.splice(trId,1);

    $(".myList").html(" ");
for (var i=0;i<res.length;i++){
      $(".myList").append(`
      <tr id=${res[i].id}>
      <td>${res[i].name}</td>
      <td>${res[i].humanType}</td>
      <td>${res[i].currencyType}</td>
      <td>${res[i].txFee}</td>
      <td>${res[i].minConf}</td>
      <td>
      <button type='button' class='btn btn-primary' onclick='delUser(${i})'>DELETE</button>
      </td>
      </tr>
      `);
    }
    $(".Load").hide;
}

 
 var res;
 const URL = "https://poloniex.com/public?command=returnCurrencies";
fetch(URL,{method:"GET"})
.then(response =>{
  return response.json();
})
.then(
  data =>{
      res = Object.keys(data).map(function(key){return data[key];});
      for(var i=0;i<res.length;i++){  
        $(".myList").append(
              `
              <tr id=${res[i].id}>
              <td>${res[i].name}</td>
              <td>${res[i].humanType}</td>
              <td>${res[i].currencyType}</td>
              <td>${res[i].txFee}</td>
              <td>${res[i].minConf}</td>
              <td>
              <button type='button' class='btn btn-primary' onclick='delUser(${i})'>DELETE</button>
              </td>
              </tr>
              `
      );}
  console.log(data);
  $(".Load").hide;
})
.catch(err=>console.log("Catch => ",err));








function sClick(){
    sText = document.getElementById('sInp').value;
    $(".myList").html(" ");
    for (var i=1;i<res.length;i++){
      var state;
    if(res[i].name == sText){
      state = true;
      $(".myList").append(
        `
        <tr id=${res[i].id}>
        <td>${res[i].name}</td>
        <td>${res[i].humanType}</td>
        <td>${res[i].currencyType}</td>
        <td>${res[i].txFee}</td>
        <td>${res[i].minConf}</td>
        <td>
        <button type='button' class='btn btn-primary' onclick='delUser(${i})'>DELETE</button>
        </td>
        </tr>
        `
);
    }
    }
    if(state!=true){
      $(".myList").append(
        `
        <tr>
        <td>Nothing</td>
        </tr>
        `
); 
    }
    return false;
  }
