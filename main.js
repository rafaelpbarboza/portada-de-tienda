//barra para categorias-------------------------------------
const barra = document.getElementById("btn-menu-barras");
const grid = document.getElementById('grid');
var activador = true

barra.addEventListener('click', () => {

	if (activador) {

		grid.style.display = 'grid';
		

		activador = false;
	} else {
		grid.style.display = 'none';
		activador = true;
	}


})
//barra para categorias-------------------------------------

//id de categorias---------------------------------------------------------------

dispositivomovil = () => {
	if (window.innerWidth <= 800) {
		return true;
	}
}

const libros = document.getElementById('libro');
const librotext = document.getElementById('marca2');
const tecnologia = document.getElementById('tecno');
const tecnologias = document.getElementById('principal');
const muebles = document.getElementById('muebles');
const mueblestext = document.getElementById('marca3');

const oneMarca = document.getElementById('img-tecno');
const twoMarca = document.getElementById('img-marca2');
const treeMarca = document.getElementById('img-muebles3');
//id----------------------------------------------------------------------------



//menu libros----------------------------------
libros.addEventListener('mouseover', () => {

	if (!dispositivomovil()) {
		librotext.style.display = 'flex';

		tecnologia.style.display = 'none';
		mueblestext.style.display = 'none';


		oneMarca.style.display = 'none';
		twoMarca.style.display = 'flex';
		treeMarca.style.display = 'none';
	}else{
	libros.addEventListener('click', () => {
		librotext.style.display = 'flex';

		tecnologia.style.display = 'none';
		mueblestext.style.display = 'none';


		oneMarca.style.display = 'none';
		twoMarca.style.display = 'flex';
		treeMarca.style.display = 'none';

	})
}
	
})
//menu libros---------------------------------



//menu tecnologia-----------------------------
tecnologias.addEventListener('mouseover', () => {
	if (!dispositivomovil()) {
		tecnologia.style.display = 'flex';

		librotext.style.display = 'none';

		mueblestext.style.display = 'none';


		oneMarca.style.display = 'flex';
		twoMarca.style.display = 'none';
		treeMarca.style.display = 'none';
	}else {
		tecnologias.addEventListener('click', () => {
		tecnologia.style.display = 'flex';

		librotext.style.display = 'none';

		mueblestext.style.display = 'none';


		oneMarca.style.display = 'flex';
		twoMarca.style.display = 'none';
		treeMarca.style.display = 'none';

	})
	}
})
//menu tecnologia-----------------------------


//menu muebles-----------------------------

muebles.addEventListener('mouseover', () => {
	if (!dispositivomovil()) {
		tecnologia.style.display = 'none';

		librotext.style.display = 'none';

		mueblestext.style.display = 'flex';

		oneMarca.style.display = 'none';
		twoMarca.style.display = 'none';
		treeMarca.style.display = 'flex';
	}else {
		muebles.addEventListener('click', () => {
		tecnologia.style.display = 'none';

		librotext.style.display = 'none';

		mueblestext.style.display = 'flex';

		oneMarca.style.display = 'none';
		twoMarca.style.display = 'none';
		treeMarca.style.display = 'flex';

	})
	}
})


//menu muebles-----------------------------




//header cambio======================================================

	$('.slider li').hide();
	$('.slider li:first').show();



//next imagenes y atras=================================================



 let posimg = 1;
function nextSlider(){
	$('.right span').click(()=>{
		if( posimg >= 3){posimg = 1;} 
		else {posimg++;}

		
	
		$('.slider li').hide();
		$('.slider li:nth-child('+ posimg +')').fadeIn();


	});
	}
	function prevSlider(){
		$('.left span').click(()=>{
		if( posimg <= 1){ posimg=3;} 
		else {posimg--;}

		

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ posimg +')').fadeIn(); // Mostramos el Slide seleccionado
		});
	}
nextSlider()
prevSlider()



//next imagenes y atras=================================================



//slider celulares======================================================================================

class celularesSlider {

	contructor(contenedor) {
		this.contenedor = contenedor;
	}

	celularNext() {
		let contenedor = document.getElementById('contenedor-padre-img');

		contenedor.scrollLeft += contenedor.offsetWidth;


	}

	celularAtras() {
		let contenedor = document.getElementById('contenedor-padre-img');

		contenedor.scrollLeft -= contenedor.offsetWidth;
	}
}

//derecha evento ============================
document.getElementById('derecha').addEventListener('click', function() {



	const celulares = new celularesSlider();
	celulares.celularNext();

}) //derecha fin============================


//izquierda evento============================
document.getElementById('atras').addEventListener('click', function() {



	const celulares = new celularesSlider();
	celulares.celularAtras();

}) //izquierda fin============================


//slider celulares final======================================================================================













