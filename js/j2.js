var opa;
var opb;
var operacion;
var resul;

resul = document.getElementById('resultado');
resul.style.color = 'brown';
function cont (){
	var i;
	function clo(){
		i++;
	}
	clo();
}
function limpiar(){
	document.getElementById('Calc').reset();
}
function sumar(){
	opa = parseFloat(resul.value);
	operacion = "+";
	limpiar();
	cont();
	resul.style.color = 'blue';
}
function restar(){
	opa = parseFloat(resul.value);
	operacion = "-";
	limpiar();
	cont();
	resul.style.color = 'red';
}
function mult(){
	opa = parseFloat(resul.value);
	operacion = "*";
	limpiar();
	cont();
	resul.style.color = 'green';
}
function divi(){
	opa = parseFloat(resul.value);
	operacion = "/";
	limpiar();
	cont();
	resul.style.color = 'violet';
}
function mama(){
	opa = parseFloat(resul.value);
	opa = opa + 1;
	resul.value = opa;
	cont();
	resul.style.color = 'cyan';
}
function menomeno(){
	opa = parseFloat(resul.value);
	opa = opa - 1;
	resul.value = opa;
	cont();
	resul.style.color = 'orange';
}
function igual(){
	opb = parseFloat(resul.value);
	var res = 0;
	switch(operacion){
		case "+":
			res = opa + opb;
			break;

		case "-":
			res = opa - opb;
			break;

		case "*":
			res = opa * opb;
			break;

		case "/":
			if(opb != 0)
			{
				res = opa / opb;
			}
			else
			{
				limpiar();
				alert('No Puedo Dividir Por 0 :c');
			}
			break;
	}
	resul.value = res;
	opa = 0;
	opb = 0;
	operacion = "";
	cont();
	resul.style.color = 'brown';
}