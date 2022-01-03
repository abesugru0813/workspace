function calc(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var operater = document.getElementById("operater").value;
	var calcResult;
	if(operater == "+"){
		  calcResult = n1 + n2;
	}
	if(operater == "-"){
		  calcResult = n1 - n2;
	}
	if(operater == "*"){
		  calcResult = n1 * n2;
	}
	if(operater == "/"){
		  calcResult = n1 / n2;
	}
    	
    document.getElementById("calcResult").innerHTML = calcResult;
}