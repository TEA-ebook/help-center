(function showInfo($) {

    $("span.info").hover(
        function() {
            $("#overlay").css('display','block');
            $("#wrapper-info").css('display','block');
        },
        function() {
            $("#overlay").css('display','none');
            $("#wrapper-info").css('display','none');
        }
    )

}(jQuery, undefined));
