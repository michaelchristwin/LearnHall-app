$(function () {
    
    function no_hamburger(){

        let querry1 = window.matchMedia("(min-width: 1440px)");
        let querry2 = window.matchMedia("(min-width: 960px) and (max-width: 1440px)");

        if (querry1.matches) {
            $(".hamburger-menu-open").css('display', 'none');
            $(".hamburger-menu-close").css('display', 'none');
            $(".nav-bar-hamburger-menu").css('display', 'none');
        };
        if (querry2.matches) {
            $(".hamburger-menu-open").css('display', 'none');
            $(".hamburger-menu-close").css('display', 'none');
            $(".nav-bar-hamburger-menu").css('display', 'none');
        };
    }
    
    /* Hamburger menu function */
    $(".hamburger-menu-open").click(function (){

        /* Openning the menu */
        $(".hamburger-menu-open").css('display', 'none');
        $(".hamburger-menu-close").css('display', 'flex');
        $(".nav-bar-hamburger-menu").css('display', 'block');
        no_hamburger()

        /* Closing the menu */
        $(".hamburger-menu-close").click(function (){

            $(".hamburger-menu-open").css('display', 'flex');
            $(".hamburger-menu-close").css('display', 'none');
            $(".nav-bar-hamburger-menu").css('display', 'none');
            no_hamburger()
        });
    });


})