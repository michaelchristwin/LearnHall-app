$(function () {
    
    function reload() {
  
        var context;
        $window = $(window);
  
        // run this right away to set media-querry
        if ($window.width() >= 1440) {
            context = 'large-desktop';
        } else if ($window.width() >= 960) {
            context = 'desktop';
        } else if ($window.width() >= 576) {
            context = 'tablet';
        } else if ($window.width() >= 0) {
            context = 'mobile';
        }
  
        // refresh the page only if you're crossing into the media-querry
        // that isn't already set
        $(window).resize(function() {
            //refresh the page
            if(($window.width() >= 1440) && (context != 'large-desktop')) {
                location.reload();
            } else if(($window.width() >= 960) && (context != 'mobile')) {
                location.reload();
            } else if(($window.width() >= 576) && (context != 'tablet')) {
                location.reload();
            } else if(($window.width() >= 0) && (context != 'mobile')) {
                location.reload();
            }
        });
    };
    
    /* Hamburger menu function */
    $("#open-hamburger").click(function () {
  
        /* Openning the menu */
        $(".hamburger-menu-open").css('display', 'none');
        $(".hamburger-menu-close").css('display', 'flex');
        $(".nav-bar-hamburger-menu").css('display', 'block');

        $("header").css('height', "max-content");
        reload()
        
        /* Closing the menu */
        $("#close-hamburger").click(function () {
  
            $(".hamburger-menu-open").css('display', 'flex');
            $(".hamburger-menu-close").css('display', 'none');
            $(".nav-bar-hamburger-menu").css('display', 'none'); 
        
            $("header").css('height', "max-content");
            reload()
        });
    });
  
    /* stars function */
    $(".star").each(function() {
      a = $(this).text();
      $(this).text("");
  
      for(var i = 0; i < a; i++) {
          $(this).append('<img src="images/star-1.png" alt="img"></img>');
      } 
    });
  
  
    /* read more function */
    $(".read-more").click(function() {
  
        currentText = $(this).attr("id");
        parentElement = $(this).parent();
        showText = parentElement.parent().children().last().attr("id");
    
        currentText = "#" + currentText;
        showText =  "#" + showText;
        
        $(currentText).css('display', 'none');
        $(showText).css('display', 'block');
        
    });
        
    $window = $(window);
    $(".content").each(function() {
        a = $(this).attr("id");
              
        if($window.width() >= 960) {
            if (a < 3) {
                a = "#" + a;
                $(a).show();
            } else {
                a = "#" + a;
                $(a).hide();
            };
        } else if($window.width() >= 576) {
            if (a < 2) {
                a = "#" + a;
                $(a).show();
            } else {
                a = "#" + a;
                $(a).hide();
            };
            
        } else if($window.width() >= 0) {
            if (a < 1) {
                a = "#" + a;
                $(a).show();
            } else {
                a = "#" + a;
                $(a).hide();
            };
        };
    }); 
    
 
    
    /* slider function */
    if ($window.width() >= 960) {
        nextId = 1,
        previouseId = -1;
    } else if($window.width() >= 576) {
        nextId = 0,
        previouseId = -1;
    } else if($window.width() >= 0) {
        nextId = -1,
        previouseId = -2;
    }; 
    
    $('.next').click(function() {
        reload()
        nextId ++,
        previouseId ++;

        $(".content").each(function() {
            a = $(this).attr("id");
            
            if (a == previouseId) {
                a = "#" + a;
                $(a).hide();
            };
            if (a == nextId) {
                a = "#" + a;
                $(a).show();
            };
            
        });  
        return nextId,
        previouseId;
    });

    $('.previous').click(function() {
        reload()
        
        $(".content").each(function() {
            a = $(this).attr("id");
            
                if ( a == nextId) {
                    a = "#" + a;
                    $(a).hide();
                    nextId --;
                } else if (a == previouseId) {
                    a = "#" + a;
                    $(a).show();
                    previouseId --;
                };
        });
        return nextId,
        previouseId ;
    });
    
  
    /* footer email section */
    var form_id = "jquery_form";

    var data = {
        "access_token": "syky96ehkc3tv2xzzp65uodx"
    };

    function onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function onError(error) {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }

    var sendButton = $("#" + form_id + " [name='send']");

    function send() {
        sendButton.val('Sending…');
        sendButton.prop('disabled',true);

        var message = $("#" + form_id + " [name='email']").val();
        data['email'] = message;

        $.post('https://postmail.invotes.com/send',
            data,
            onSuccess
        ).fail(onError);

        return false;
    }

    sendButton.on('click', send);

    var $form = $("#" + form_id);
    $form.submit(function( event ) {
        event.preventDefault();
    });

    /* show and hide FAQ's */
    function show_FAQ(z){
        $( z + ".FAQ-p").show();
        $( z + ".FAQ-cross").hide();
        $( z + ".FAQ-minus").show();
        $( z + ".FAQ-brown-1").hide();
        $( z + ".FAQ-brown-2").show();
        $( z + ".FAQ-img").css("marginTop", "-130px")

        if ($window.width() >= 1440) {
            $( z + ".FAQ-container").css("height", "233px")
        } else if ($window.width() >= 960) {
            $( z + ".FAQ-container").css("height", "212px")
        } else if($window.width() >= 576) {
            $( z + ".FAQ-container").css("height", "216px")
            
        } else if($window.width() >= 0) {
            $( z + ".FAQ-container").css("height", "210px")
        };  
        reload()
    };

    function hide_FAQ(z){
        $( z + ".FAQ-p").hide();
        $( z + ".FAQ-cross").show();
        $( z + ".FAQ-minus").hide();
        $( z + ".FAQ-brown-2").hide();
        $( z + ".FAQ-brown-1").show();
        $( z + ".FAQ-img").css("marginTop", " 0px")
        $( z + ".FAQ-container").css("height", "max-content")
        reload()
    };

    $(".FAQ-brown-1").click(function(){
        z = $(this).attr("id");
        z = "#" + z
        show_FAQ(z)
    });
    $(".FAQ-brown-2").click(function(){
        z = $(this).attr("id");
        z = "#" + z
        hide_FAQ(z)
    });
    $(".FAQ-cross").click(function(){
        z = $(this).attr("id");
        z = "#" + z
        show_FAQ(z)
    });
    $(".FAQ-minus").click(function(){
        z = $(this).attr("id");
        z = "#" + z
        hide_FAQ(z)
    });
  
    /* Discplays the current year at the copywright section */
    let currentYear= new Date();
    currentYear = currentYear.getFullYear();
  
    $("#current_year").text(currentYear);

});

