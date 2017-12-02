/*var countries=["netherlands, united kingdom"];
var city=["amsterdam, london"];

var amsterdam = [1500, 500, 1800, 700];
var london = [2500, 1500, 1000, 900];
console.log(amsterdam, london);
*/

var dam1 = 1500;
var dam2 = 500;
var dam3 = 1800;
var dam4 = 700;
var amsterdam = [dam1 + dam2 + dam3 + dam4];
console.log(amsterdam);
var averagea = [amsterdam/4];
console.log(averagea);
document.getElementById("nl").innerHTML = averagea();


var lnd1 = 2500;
var lnd2 = 1500;
var lnd3 = 1000;
var lnd4 = 900;
var london = [lnd1 + lnd2 + lnd3 + lnd4];
console.log(london);
var averagel = [london/4];
console.log(averagel);
document.getElementById("ad").innerHTML = averagel();


var diff = [averagel - averagea];
console.log(diff);
document.getElementById("total").innerHTML = diff();





