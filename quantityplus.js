// function quantityplus()
// {
//     var cartvalue = parseInt(document.getElementById("foodcart1").innerText);
//     console.log(cartvalue);
//     cartvalue = cartvalue + 1;
//     console.log(cartvalue);
    
//     document.getElementById("foodcart1").innerHTML = cartvalue;
// }
function handlebuttonclick(event)
{
    var buttonId = event.target.id;
    var butnum  = parseInt(buttonId.slice(1));
    var cartvalue = parseInt(document.getElementById(`foodcart${butnum}`).innerText);
        console.log(cartvalue);
        cartvalue = cartvalue + 1;
        document.getElementById(`foodcart${butnum}`).innerHTML = cartvalue;
        
}

document.getElementById("p1").addEventListener('click',handlebuttonclick);
document.getElementById("p2").addEventListener('click',handlebuttonclick);
document.getElementById("p3").addEventListener('click',handlebuttonclick);
document.getElementById("p4").addEventListener('click',handlebuttonclick);
document.getElementById("p5").addEventListener('click',handlebuttonclick);
document.getElementById("p6").addEventListener('click',handlebuttonclick);
document.getElementById("p7").addEventListener('click',handlebuttonclick);
document.getElementById("p8").addEventListener('click',handlebuttonclick);
document.getElementById("p9").addEventListener('click',handlebuttonclick);
document.getElementById("p10").addEventListener('click',handlebuttonclick);
