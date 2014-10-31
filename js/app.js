$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        var $that = $(this);


        $.ajax({
            type: "POST",
            dataType: 'json',
            cache: false,
            url: $that.attr('action'),
            data: $that.serialize()
        }).done(function(data) {
            document.getElementById("node-2").value = "Done";
        }).fail(function() {
           document.getElementById("node-2").value = "Fail";
        })


        return false;
    });

})
