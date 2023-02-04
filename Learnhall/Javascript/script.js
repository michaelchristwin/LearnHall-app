
$(function () {
    
    /* Hamburger menu function */
    $(".hamburger-menu-open").click(function (){

        /* Openning the menu */
        $(".hamburger-menu-open").css('display', 'none');
        $(".hamburger-menu-close").css('display', 'flex');
        $(".nav-bar-hamburger-menu").css('display', 'block');

        /* Closing the menu */
        $(".hamburger-menu-close").click(function (){

            $(".hamburger-menu-open").css('display', 'flex');
            $(".hamburger-menu-close").css('display', 'none');
            $(".nav-bar-hamburger-menu").css('display', 'none');
        });
    });


})