scrollProgress.set({
    color: '#68a99c',
    height: '12px',
    bottom: true
});


$( "#tabs" ).tabs();
$(".navbar ul.dropdown-menu").hide();
$(".navbar li.dropdown > a").click(function () {
    var $this = $(this);
    if ($this.next("ul.dropdown-menu:visible").length !== 0) {
        $this.next("ul.dropdown-menu").slideUp("normal");
        $this.removeClass("active");
    } else {
        $(".navbar ul.dropdown-menu").slideUp("normal");
        $(".navbar li.dropdown > a").removeClass("active");
        $this.next("ul.dropdown-menu").slideDown("normal");
        $this.addClass("active");
    }
    return false;
});

$("#title-menu-top").click(function () {
    if($("#content-menu-top").css("display")=="none") {
        $("#content-menu-top").css("display","block");
    } else {
        $("#content-menu-top").css("display","none");
    }    
})

(function () {
    'use strict';

    var trailingSlashes = /\/+$/;
    var pathRegexp = new RegExp(
        '^' + document.location.pathname.replace(trailingSlashes, '') + '/?$'
    );
    var navList = $('ul.nav.navbar-nav li');

    navList.each(function (pos, navElt) {
        navElt = $(navElt);
        if (pathRegexp.test(navElt.find('a').attr('href'))) {
            navElt.addClass('active');
        }
    });
}());

function trackEventInGa(category, action, label, value, nonInteraction)
{
    'use strict';
    var ga_params;
    if (typeof(ga) !== 'undefined') {
        value = value || 1;
        ga_params = {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            eventValue: value
        };
        if (nonInteraction !== undefined) {
            ga_params.nonInteraction = nonInteraction;
        }
        ga('send', ga_params);
    }
}
