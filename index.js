


// var a=20;
// var b=30;
// 

// 
// var mn=2;
// switch(mn){
//     case 1:
//         document.getElementById('para1').innerHTML="January";
//         break;
// case 2:
// document.getElementById('para1').innerHTML="February";
// break;
//       case 3:
//         document.getElementById('para1').innerHTML="March";
//         break;
//     default:
//         document.getElementById('para1').innerHTML="Invalid Number";
//         break;
// }


// function add(a,b){
//     return a+b;
// }
// var a=10;
// var b=20;
// var c=add(a,b);
// document.getElementById('para1').innerHTML=c;
while(true){
var a=parseInt(prompt("Enter First Number"));
var b=parseInt(prompt("Enter Second Number"));
var op=prompt("Enter Operator");

if(op.toLowerCase()=='exit'){
    document.getElementById('output').innerHTML+='Calculator Closed'
    brerak;

}
var res;
if(op=="+"){
    res=a+b;
    document.getElementById('output').innerHTML+='output is '+res;
    break;

}
else if(op=="-"){
    res=a-b;
    document.getElementById('output').innerHTML+='output is'+res;
    break;

}
else if(op=="*"){
    res=a*b;
    document.getElementById('output').innerHTML+='output is'+res;
    break;

}
else if(op=="/"){
    res=a/b;
    document.getElementById('output').innerHTML+='output is'+res;
    break;

}
else{
    res="Invalid Operator";
}
}