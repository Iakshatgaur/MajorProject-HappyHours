
function handlebuttonclick2(event)
{
    var buttonId = event.target.id;
    var butnum  = parseInt(buttonId.slice(1));
    var cartvalue = parseInt(document.getElementById(`foodcart${butnum}`).innerText);
    if(cartvalue != 0)
    {
        cartvalue = cartvalue - 1;
        document.getElementById(`foodcart${butnum}`).innerHTML = cartvalue;
    }   
}

document.getElementById("m1").addEventListener('click',handlebuttonclick2);
document.getElementById("m2").addEventListener('click',handlebuttonclick2);
document.getElementById("m3").addEventListener('click',handlebuttonclick2);
document.getElementById("m4").addEventListener('click',handlebuttonclick2);
document.getElementById("m5").addEventListener('click',handlebuttonclick2);
document.getElementById("m6").addEventListener('click',handlebuttonclick2);
document.getElementById("m7").addEventListener('click',handlebuttonclick2);
document.getElementById("m8").addEventListener('click',handlebuttonclick2);
document.getElementById("m9").addEventListener('click',handlebuttonclick2);
document.getElementById("m10").addEventListener('click',handlebuttonclick2);
