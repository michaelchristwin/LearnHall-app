$(function () {
    
    function no_hamburger() {
  
        var context;
        $window = $(window);
  
        // run this right away to set media-querry
        if ($window.width() >= 960) {
            context = 'desktop';
        } 
  
        // refresh the page only if you're crossing into the media-querry
        // that isn't already set
        $(window).resize(function() {
            if(($window.width() >= 960) && (context != 'desktop')) {
            //refresh the page
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
        no_hamburger()
  
        $(".learnhall-info").css('marginTop', '300px');
        
  
        /* Closing the menu */
        $("#close-hamburger").click(function () {
  
            $(".hamburger-menu-open").css('display', 'flex');
            $(".hamburger-menu-close").css('display', 'none');
            $(".nav-bar-hamburger-menu").css('display', 'none');
            no_hamburger()
  
            $(".learnhall-info").css('marginTop', '0px');
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
    let nextId = 1,
    middleId = 0,
    previouseId = -1,
    IDs = [];
    
    $('.next').click(function() {
        nextId ++,
        middleId++,
        previouseId ++;

        $(".content").each(function() {
            a = $(this).attr("id");
            /* IDs.append(a); */
            
            if (a == previouseId) {
                a = "#" + a;
                $(a).hide();
            };
            if (a == nextId) {
                a = "#" + a;
                $(a).show();
            };
            
        });  
        console.log(IDs.last());
        return nextId,
        previouseId;
    });

    $('.previous').click(function() {
        
        $(".content").each(function() {
            a = $(this).attr("id");
            
                if ( nextId == 2 && previouseId == -1) {
                    console.log("end");
                } else if ( a == nextId) {
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
        middleId,
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
    function show_FAQ(){
        $(".FAQ-p").show();
        $(".FAQ-cross").hide();
        $(".FAQ-minus").show();
        $(".FAQ-brown-1").hide();
        $(".FAQ-brown-2").show();
        $(".FAQ-img").css("marginTop", "-130px")
    };
    function hide_FAQ(){
        $(".FAQ-p").hide();
        $(".FAQ-cross").show();
        $(".FAQ-minus").hide();
        $(".FAQ-brown-2").hide();
        $(".FAQ-brown-1").show();
        $(".FAQ-img").css("marginTop", "0px")
    };

    $(".FAQ-brown-1").click(show_FAQ );
    $(".FAQ-brown-2").click( hide_FAQ );
    $(".FAQ-cross").click(show_FAQ );
    $(".FAQ-minus").click( hide_FAQ );
  
    /* Discplays the current year at the copywright section */
    let currentYear= new Date();
    currentYear = currentYear.getFullYear();
  
    $("#current_year").text(currentYear);

});

