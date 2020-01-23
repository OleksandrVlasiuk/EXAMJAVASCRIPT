// var name = "Alex";
// var resault;
// confirm("Do you acceptet cookies of this site?");
// do{
// resault = prompt("Enter login: ");
// if(resault!=null && resault!=""){
// alert("Your login : "+resault);
// }
// }while(resault==null || resault=="");
///////////////
// var a = 0;
// var b = 0;
// while(a!=0 && b!=0){
// a = parseInt(prompt("Enter first number : "));
// b = parseInt(prompt("Enter second number : "));

// console.log(a+b);
// if(a!=0&&b!=0)
// alert("Додавання "+ (a+b) , "Віднімання "+(a-b) , "Ділення"+(a/b) ,"Множення"+(a*b));
// }
//////////////
//1
// var a = parseInt(prompt("Input number : "));
// alert("number*number = "+(a*a);
//2
// var a = parseInt(prompt("Input first number : "));
// var b = parseInt(prompt("Input second number : "));
// var c = (a+b)/2;
// alert("number*number = "+(a*a));
//3
// var a = parseInt(prompt("Input edge of square : "));
// alert("S = "+(a*a));
//4
// var km = parseInt(prompt("Input km : "));
// alert("milles = "+(km*0,621371));
//5
// var a = 0;
// var b = 0;
// do{
// a = parseInt(prompt("Enter first number : "));
// b = parseInt(prompt("Enter second number : "));

// console.log(a+b);
// if(a!=0&&b!=0)
// alert("Додавання "+ (a+b) , "Віднімання "+(a-b) );
// }while(a!=0 && b!=0);
//6
// var a = 0;
// var b = 0;
// var x = 0;
// a = parseInt(prompt("Enter first number : "));
// b = parseInt(prompt("Enter second number : "));
// x = -(b/a);
// alert("x = "+x);
//7
// var h = 0;
// var m = 0;
// h = parseInt(prompt("Enter hovers : "));
// m = parseInt(prompt("Enter minutes : "));
// if((h<0)||(h>=24)){
//     while((h<0)||(h>=24)){
//     h = parseInt(prompt("Enter hovers : "));
//     }
// }
// if((m<0)||(m>=64)){
//     while((m<=0)||(m>=64)){
//     h = parseInt(prompt("Enter minutes : "));
//     }
// }
// if(m==0){
// var res1 = 24-h;
// alert("hours :"+res1+"minutes : 0");
// }
// else{
// var res1 = 23-h;
// var res2 = 60-m;
// alert("hours :"+res1+"minutes : "+res2);
// }
//8
// var num = parseInt(prompt("Enter num(100 - 999) : "));
// if(num<100 || num>999){
//      while((num<=100)||(num>999)){
//      num = parseInt(prompt("Enter num(100 - 999) : "));
//      }
// }
// var digit2and3 = num%100;
// var digit2 = digit2and3/10;
// alert("Second digit : "+digit2);
//9
//  var num = parseInt(prompt("Enter num(10000 - 99999) : "));
//  if(num<10000 || num>99999){
//       while((num<=10000)||(num>99999)){
//       num = parseInt(prompt("Enter num(10000 - 99999) : "));
//       }
//  }
// var lastDigit = num%10000;
// var numik = num/10;
// var res = lastDigit*10000+numik;
// alert("New num : "+res);
//10
// var money = parseInt(prompt("Enter your sum : "));
// var k = money/250;
// var n = money-250*k;
// var pr = 25;
// var res = k*250+n+pr*k;
// alert("Res : "+res);
