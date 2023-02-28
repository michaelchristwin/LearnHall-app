$(function () {
    
  function no_hamburger(){

      var context;
      var $window = $(window);

      // run this right away to set media-querry
      if ($window.width() >= 960) {
          context = 'tablet';
      }

      // refresh the page only if you're crossing into the media-querry
      // that isn't already set
      $(window).resize(function() {
          if(($window.width() >= 960) && (context != 'tablet')) {
          //refresh the page
              location.reload();
          }
      });
  };
  
  
  /* Hamburger menu function */
  $("#open-hamburger").click(function (){

      /* Openning the menu */
      $(".hamburger-menu-open").css('display', 'none');
      $(".hamburger-menu-close").css('display', 'flex');
      $(".nav-bar-hamburger-menu").css('display', 'block');
      no_hamburger()

      $(".learnhall-info").css('marginTop', '300px');
      

      /* Closing the menu */
      $("#close-hamburger").click(function (){

          $(".hamburger-menu-open").css('display', 'flex');
          $(".hamburger-menu-close").css('display', 'none');
          $(".nav-bar-hamburger-menu").css('display', 'none');
          no_hamburger()

          $(".learnhall-info").css('marginTop', '0px');
      });
  });

  /* stars function */

  b = $('.content').children(".stars")
  c = $(".stars").children(".name").children("span").attr("id")
  
  
  for ( c in b){
      numOfStars = $(".stars").children(".name").children("span").text()
      /* alert(numOfStars) */
      $(".star").text("")
  }
   
  /* for ( var a = 0; a < b; a++) { 
     alert(a)
      
  
      for (numOfStars in b) {
      
          $(".star").append('<img src="images/star-1.png" alt="img"></img>')
      }
  } */ 



  /* read more function */
  $(".read-more").click(function(){

      currentText = $(this).attr("id");
      parentElement = $(this).parent();
      showText = parentElement.parent().children().last().attr("id")
  
      currentText = "#" + currentText
      showText =  "#" + showText

      $(currentText).css('display', 'none');
      $(showText).css('display', 'block');
      
  
  });


  /* Discplays the current year at the copywright section */
  let currentYear= new Date();
  currentYear = currentYear.getFullYear();

  $("#current_year").text(currentYear)
});

