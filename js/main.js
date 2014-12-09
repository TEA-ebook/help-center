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
