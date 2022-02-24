//CONTADOR
let elemento = document.querySelector('#contador');

		var contador= parseInt(elemento.textContent);

		var numeros=0;

		let contando = setInterval(function(){

			if(numeros == contador) {
					clearInterval(contando);
					return;
				}

			numeros = numeros+1;
			elemento.innerHTML = numeros;}, 0.1);

let elemento2 = document.querySelector('#contador2');

		var contador2= parseInt(elemento2.textContent);

		var numeros2=0;

		let contando2 = setInterval(function(){

			if(numeros2 == contador2) {
					clearInterval(contando2);
					return;
				}
				
			numeros2 = numeros2+1;
			elemento2.innerHTML = numeros2;}, 10);

let elemento3 = document.querySelector('#contador3');

		var contador3= parseInt(elemento3.textContent);

		var numeros3=0;

		let contando3 = setInterval(function(){

			if(numeros3 == contador3) {
					clearInterval(contando3);
					return;
				}
				
			numeros3 = numeros3+1;
			elemento3.innerHTML = numeros3;}, 0.1);		

let elemento4 = document.querySelector('#contador4');

		var contador4= parseInt(elemento4.textContent);

		var numeros4=0;

		let contando4 = setInterval(function(){

			if(numeros4 == contador4) {
					clearInterval(contando4);
					return;
				}
				
			numeros4 = numeros4+1;
			elemento4.innerHTML = numeros4;}, 10);	
