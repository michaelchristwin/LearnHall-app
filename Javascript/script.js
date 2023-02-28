$(function () {
  function no_hamburger() {
    var context;
    var $window = $(window);

    // run this right away to set media-querry
    if ($window.width() >= 960) {
      context = "tablet";
    }

    // refresh the page only if you're crossing into the media-querry
    // that isn't already set
    $(window).resize(function () {
      if ($window.width() >= 960 && context != "tablet") {
        //refresh the page
        location.reload();
      }
    });
  }

  /* Hamburger menu function */
  $("#open-hamburger").click(function () {
    /* Openning the menu */
    $(".hamburger-menu-open").css("display", "none");
    $(".hamburger-menu-close").css("display", "flex");
    $(".nav-bar-hamburger-menu").css("display", "block");
    no_hamburger();

    $(".learnhall-info").css("marginTop", "300px");

    /* Closing the menu */
    $("#close-hamburger").click(function () {
      $(".hamburger-menu-open").css("display", "flex");
      $(".hamburger-menu-close").css("display", "none");
      $(".nav-bar-hamburger-menu").css("display", "none");
      no_hamburger();

      $(".learnhall-info").css("marginTop", "0px");
    });
  });

  $(".read-more").click(function () {
    $(".review-text").css("display", "none");
    $(".review-text-1").css("display", "flex");
  });

  /* Discplays the current year at the copywright section */
  let currentYear = new Date();
  currentYear = currentYear.getFullYear();

  $("#current_year").text(currentYear);
});
