// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

var welcomescreen_slides = [
  {
    id: 'slide0',
    title: 'Primera slide', // optional
    picture: '<div class="tutorialicon" style="font-size:200px">♥</div>',
    text: 'Hola Mundo!'
  },
  {
    id: 'slide1',
    title: 'Slide 1', // optional
    picture: '<div class="tutorialicon" style="font-size:200px">✲</div>',
    text: 'Hola Mundo! 2'
  },
  {
    id: 'slide2',
    title: 'Slide 2', // optional
    picture: '<div class="tutorialicon" style="font-size:200px">♫</div>',
    text: 'Hola Mundo! 3'
  },
  {
    id: 'slide3',
    //title: 'NO TITLE', 
    picture: '<div class="tutorialicon" style="font-size:200px">☆</div>',
    text: 'Gracias por descargar y pagar 100 USD por esta aplicación <br><br><a class="button" onclick="welcomescreen.close();">Cerrar</a>'
  }
];

var options = {
  'bgcolor': '#0da6ec',
  'fontcolor': '#fff',
  'closeButtonText': 'Saltar',
  'open': false
}
var welcomescreen = myApp.welcomescreen(welcomescreen_slides, options);

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

function initapp(){
    console.log("dispositivo listo");
    $$('#open-ws').on('click',openWelcomeScreen);
    
    var abrir = localStorage.getItem('welcomeScreen');
    if(abrir == null){
        welcomescreen.open();
        localStorage.setItem('welcomeScreen','no abrir');
    }
}

function openWelcomeScreen(){
    welcomescreen.open();
}


