$( document ).ready(function() {


    //$('#signUp_form').submit(function () {
    //    alert($('#Name').val());

        // get all the inputs into an array.

        //var $inputs = $('#signUp_form :input');
        //console.log($inputs);

        // not sure if you wanted this, but I thought I'd add it.
        // get an associative array of just the values.

        //var values = {};
        //$.each( $inputs, function( index, value ){
        //    console.log(value);
        //
        //});
        //alert();

        //$inputs.each(function() {
        //
        //    values[this.name] = $(this).val();
        //    alert(values.this.name);
        //});

    //});


    function formToJSON() {
        return JSON.stringify({
            "user_firstname": $('#user_firstname').val(),
            "user_lastname": $('#user_lastname').val(),
            "user_username": $('#user_username').val(),
            "user_password": $('#user_password').val()
        })
    }




});

$("form[name='signUp_form']").submit(function(e) {
    var formData = new FormData($(this)[0]);
    alert("inhere");

    $.ajax({
        url: "members/php_signup.php",
        type: "POST",
        data: formData,
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
                alert("SUCCESS");
            }
        },

        cache: false,
        contentType: false,
        processData: false
    });


});

