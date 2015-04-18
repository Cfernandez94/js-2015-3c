//Variable Global
var appProyects = {};

	//Llamado de la funcion del ajax que contiene los Proyectos
	appProyects.ajaxProyects = function(){

		//Variable que hace el llamado ajax desde javascript
		var showProyects =new XMLHttpRequest();
		showProyects.onreadystatechange = function(){
			//
		  if (showProyects.readyState === 4 &&  showProyects.status == 200){
		  	//Contiene el json
		    var jsonProyects = JSON.parse(showProyects.responseText);
		    //Variable vacia que almacenara los li del json
		    var proyectsPortfolio = "";
		    for (i = 0; i < jsonProyects.proyectos.length; i++) {
		    	proyectsPortfolio += '<li class="portfolio-section-proyect-item"><h2 class="subtitle-portfolio-section-proyect">'+jsonProyects.proyectos[i].nombre+'</h2><figure class="image-proyect"><img class="website-about-proyect" src='+jsonProyects.proyectos[i].img+'/></figure><a class="btn-view-website" href="'+jsonProyects.proyectos[i].url+'" target="_blank"> Ir al Sitio </a></li>';
		    };
		    document.getElementById("portfolio").innerHTML = '<ul class="portfolio-section-proyect-list">'+proyectsPortfolio+'</ul>';
		  }
		},
		
		showProyects.open("GET", "js/Proyectos.json", true);
		showProyects.send();

		var showServices =new XMLHttpRequest();
		showServices.onreadystatechange = function(){
			//
		  if (showServices.readyState === 4 &&  showServices.status == 200){
		  	//Contiene el json
		    var jsonProyects = JSON.parse(showServices.responseText);
		    //Variable vacia que almacenara los li del json
		    var servicesPortfolio = "";
		    for (i = 0; i < jsonProyects.servicios.length; i++) {
		    	servicesPortfolio += '<li class="services-studio-item">'+'<figure class="services-studio-icon"><img class="services-studio-icon" src='+jsonProyects.servicios[i].img+'/></figure><p class="services-studio-kind">'+jsonProyects.servicios[i].infop+'</p>';
		    };
		    document.getElementById("servi-studio").innerHTML = '<ul class="services-studio-list">'+servicesPortfolio+'</ul>';
		  }
		}
		showServices.open("GET", "js/Proyectos.json", true);
		showServices.send();

}();

function validacion(id){
			var elem = document.getElementById(id);
			if(elem.checkValidity())
					elem.style.borderColor="blue";
			else
					elem.style.borderColor = "red";
}
function enviado()
			{
			var nombreValido=document.getElementById('nombre').checkValidity();
			var emailValido=document.getElementById('email').checkValidity();
			if(nombreValido && emailValido){
				alert(nombreValido+"Su informacion fue enviada exitosamente"+"al correo"+emailValido);
			} else{
				alert("Por Favor revise sus campos.");
			}		
		}

//FORM

// var nombre = document.getElementById('nombre').value;
// var email = document.getElementById('email').value;
// var comentario = document.getElementById('comentario').value;

// function validacion() {
// 	if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
// 	// Si no se cumple la condicion...
// 	alert('[ERROR] El campo debe de contener unicamente letras, y no estar vacío');
// 	return false;
// 	}if( email == null || !(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(email)) ) {
// 	alert('[ERROR] El campo debe tener @ y no contener letras Mayusculas, y no estar vacío');
// 	return false;
// 	} if( comentario == null || comentario.length == 0 || /^\s+$/.test(comentario) ) {
// 	alert('[ERROR] El campo no debe estar vacío');
// 	return false;
// 	} else if(
// 			alert('Ha finalizado satisfactoriamente, pronto nos comunicaremos con usted')
// 		)
// }
// function validacion(id){
// 	var elem = document.getElementById(id);
// 	if(elem.checkValidity()){
// 		elem.style.borderColor="blue";
// 	}else{
// 		elem.style.borderColor = "red";
// 	}		
// }
// function enviado(){
// 	var nombreValido=document.getElementById('nombre').checkValidity();
// 	var emailValido=document.getElementById('email').checkValidity();
// 	if(nombreValido && emailValido){
// 		alert("Su informacion fue enviada exitosamente pronto nos contactaremos con usted !!!");
// 	} else{
// 		alert("Por Favor revise sus campos, En la ventana que se muestra sobresaltada");
// 	}		
// }

//Augmenting
// Function.prototype.method = function(name, func){
    
//     if(!this.prototype[name]){
//         this.prototype[name] = func;
//     } 
//     return this;
// };

// var elElemento = document.getElementById("lbl_1");
// var elDiv = document.getElementById("color");
// var elTitlle = document.getElementById("tittle");

// //Augment  
// Element.method('cambiarColor', function(c){
//     this.style.color = c;
//    return this;
// });

// //Augment again
// Element.method('agregarEsteHTML', function(s){
//     this.innerHTML = s;
//     return this;
// });

// elElemento.cambiarColor('Red');
// elElemento.agregarEsteHTML('Clase #5 ya casi nos vamos');

// elElemento.cambiarColor('Green').agregarEsteHTML('Con esto prodrian hacer su propio jQuery');


//form

