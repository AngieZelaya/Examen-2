// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
	
		{
		path: '/ver/',
    	url: 'ver_mas.html',
    	name: 'ver',
  		},
		{
		path: '/chef/',
    	url: 'chef.html',
    	name: 'subir',
  		},
		{
		path: '/acerca/',
    	url: 'acerca.html',
    	name: 'acerca',
  		},
		{
		path: '/perfil/',
    	url: '/perfil.html',
    	name: 'perfil',
  		},

	],
	dialog: {
		title: 'AngRestaurant',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a nuestro restaurante !');
    }
	
});





