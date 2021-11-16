var row;
function order(){
    var quantity1=document.getElementById("quantity1").value;
    var quantity2=document.getElementById("quantity2").value
    var quantity3=document.getElementById("quantity3").value
    var quantity4=document.getElementById("quantity4").value
    var quantity5=document.getElementById("quantity5").value
    var quantity6=document.getElementById("quantity6").value

    if((quantity1=="") && (quantity2=="") && (quantity3=="") &&(quantity4=="") && (quantity5=="") && (quantity6=="" ) ){
        window.location.href = 'noitem.html';     
   }
    var display=document.getElementById("display");
    if(quantity1 != ""){
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    cell1.innerHTML="World Tomorrow";
    cell2.innerHTML="Science-Fiction";
    cell3.innerHTML=quantity1;
    cell4.innerHTML=350 * quantity1;
}
if(quantity2 != ""){
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    cell1.innerHTML="GooseBumps";
    cell2.innerHTML="Horror";
    cell3.innerHTML=quantity2;
    cell4.innerHTML=550 * quantity2;
}
 if(quantity3 != ""){
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    cell1.innerHTML="Famous Five";
    cell2.innerHTML="Adventure";
    cell3.innerHTML=quantity3;
    cell4.innerHTML=350 * quantity3;
}
if(quantity4 != ""){
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    cell1.innerHTML="Percy Jackson";
    cell2.innerHTML="Fantasy";
    cell3.innerHTML=quantity4;
    cell4.innerHTML=700 * quantity4;
}
 if(quantity5 != ""){
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    cell1.innerHTML="Secret Seven";
    cell2.innerHTML="Adventure";
    cell3.innerHTML=quantity5;
    cell4.innerHTML=200 * quantity5;
}
if(quantity6 != ""){
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    cell1.innerHTML="Harry Potter Novel";
    cell2.innerHTML="Fantasy";
    cell3.innerHTML=quantity6;
    cell4.innerHTML=850 * quantity6;
}
   
}