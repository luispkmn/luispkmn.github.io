var ancho = window.innerWidth
var alto = window.innerHeight
var path = window.location.pathname
var prot = window.location.protocol;
var so = navigator.platform;
var weapon = {
	color: "black",
	name: "M16",
	descripcion: function () {
		return this.name + " " + this.color;
	},
	custom : function () {
		this.name = "M16A";
	}
};
var a = document.getElementById('11');
var b = document.getElementById('12');
var c = document.getElementById('21');
var d = document.getElementById("31");

a.innerHTML = "El Path de la pagina es :" + path;
b.innerHTML = "El Protocolo de esta pagina es: " + prot + ".";
c.innerHTML = "El Sistema Operativo presente en el navegador es :" + so + ".";
d.innerHTML = "La pantalla tiene un ancho de : " + ancho + ", y un largo de: " + alto + ".";

delete weapon.color;
weapon.pais = "EEUU";
weapon.historia = function(){
	return this.name + " " + this.pais;
}
