$( document ).ready(function() {
    $('.toggle').on('click', function() {
        $('.container').stop().addClass('active');
        $('.toggle').css("height","250");
    });

    $('.close').on('click', function() {
        $('.container').stop().removeClass('active');
        $('.toggle').css("height","140");
    });


    //$('#signUp_form').submit(function() {
    //    alert($('#Name').val());
    //});

    $('#signUp_form').submit(function(e) {
        //var formData = new FormData($(this)[0]);
        //console.log(formData);
        alert("inhere");

        $.ajax({
            url: "members/php_signup.php",
            type: "POST",
            data: formToJSON(),
            async: false,
            success: function (data) {
                if (data==2){
                    //$("#password-error").removeClass("secret-combination");
                    alert("skata");
                }
                else if (data==1){
                    //$("#email-error").removeClass("secret-combination");
                    alert("skata2");
                }
                else{
                    console.log(data);
                    alert(data);
                    alert("SUCCESS");
                }
            },

            cache: false,
            contentType: false,
            processData: false
        });


    });

    function formToJSON() {
        return JSON.stringify({
            "user_firstname": $('#user_firstname').val(),
            "user_lastname": $('#user_lastname').val(),
            "user_username": $('#user_username').val(),
            "user_password": $('#user_password').val(),
            "user_repeat_password": $('#user_repeat_password').val()
        })
    }
});

