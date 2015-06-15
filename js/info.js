(function showInfo($) {

    $("span.info").hover(
        function() {
            $("#wrapper-info").css('display','block');
        },
        function() {
            $("#wrapper-info").css('display','none');
        }
    )

}(jQuery, undefined));