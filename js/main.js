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
