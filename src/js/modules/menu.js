// Example of a JavaScript module using the Module pattern

var menu =  (function(){

      // Init global variables
      var deployed = false;

      // Caching dom El
      var $el = $('.wrapper__menu');
      var $navBar = $el.find('>ul');
      var $navBarItems = $el.find('>ul>li');

      // Init function
      colorChange();

      //Biding Event
      $navBar.on('click', OpenMenu);

      //Function logic
      function OpenMenu(){
         $navBar.slideDown(500);
      }


})();


