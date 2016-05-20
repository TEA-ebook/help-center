(function savChoice($) {
    'use strict';
    var savTree = {
        'Auchan' : {
            'name' : 'Auchan',
            'mail' : ['sav', 'tea-ebook.com'],
            'schedule' :'Du lundi au vendredi de 9h00 à 18h00'
        },
        'Bisey' : {
            'name' : 'Bisey',
            'mail' : ['info', 'bisey.com'],
            'phone' : ['03', '89', '66', '42', '92'],
            'schedule' :'Le lundi de 10h à 19h00<br/>Du mardi au vendredi de 9h00 à 19h00<br/>Le samedi de 9h00 à 18h30'
        },
        'Cdiscount' : {
            'name' : 'Cdiscount by TEA',
            'mail' : ['cdiscountbytea', 'tea-ebook.com'],
            'schedule' : 'Du lundi au vendredi de 9h00 à 18h00'
        },
        'Chapitre' : {
            'name' : 'Chapitre',
            'mail' : ['relation_clients', 'chapitre.com'],
            'phone' : ['03', '21', '79', '56', '71'],
            'schedule' : 'Du lundi au vendredi de 8h00 à 19h00<br/>Le samedi de 9h00 à 19h00'
        },
        'Cheminant' : {
            'name' : 'Cheminant',
            'mail' : ['librairie.cheminant', 'wanadoo.fr'],
            'phone' : ['02', '97', '42', '74', '11'],
            'schedule' :'Du lundi au samedi de 9h15 à 19h00'
        },
        'Cultura' : {
            'name' : 'Cultura',
            'site' : 'http://www.cultura.com/contact.html',
            'phone' : ['09', '86', '86', '02', '93'],
            'schedule' : 'Du lundi au samedi de 8h00 à 19h00'
        },
        'Decitre' : {
            'name' : 'Decitre',
            'mail' : ['serviceclients', 'decitre.fr'],
            'phone' : ['01', '76', '49', '48', '00'],
            'schedule' : 'Du lundi au samedi de 8h30 à 19h30'
        },
        'Develay' : {
            'name' : 'Develay',
            'mail' : ['contact.librairie', 'develay.net'],
            'phone' : ['04', '74', '65', '01', '49'],
            'schedule' :'Du lundi au vendredi de 9h00 à 12h00 et de 14h00 à 19h00<br/>Le samedi de 9h30 à 12h30 et de 14h00 à 19h00'
        },
        'Ebooks-store' : {
            'name' : 'Ebooks Store',
            'mail' : ['ebooks-store', 'fls.ch'],
            'phone' : ['0848', '840', '708'],
            'schedule' : 'Du lundi au vendredi de 8h00 à 12h00 et de 13h00 à 17h00'
        },
        'Espace-temps' : {
            'name' : 'Espace Temps',
            'mail' : ['espacetemps.egly', 'wanadoo.fr'],
            'phone' : ['01', '69', '26', '02', '66'],
            'schedule' :'Du lundi au samedi de 9h00 à 19h30'
        },
        'Eyrolles' : {
            'name' : 'Eyrolles',
            'mail' : ['sav', 'tea-ebook.com'],
            'schedule' :'Du lundi au vendredi de 9h00 à 18h00'
        },
        'Lecteur-moderne' : {
            'name' : 'Lecteur Moderne',
            'mail' : ['sav', 'tea-ebook.com'],
            'schedule' :'Du lundi au vendredi de 9h00 à 18h00'
        },
        'Madison' : {
            'name' : 'Madison',
            'mail' : ['madisonlibourne', 'gmail.com'],
            'phone' : ['05', '57', '51', '32', '25'],
            'schedule' :'Du lundi au samedi de 9h30 à 12h30 et de 14h00 à 19h00'
        },
        'Mes-livres-numeriques' : {
            'name' : 'Mes livres numériques',
            'mail' : ['info', 'meslivresnumeriques.be'],
            'phone' : ['32', '70/', '22', '11', '60'],
            'schedule' : 'Du lundi au vendredi de 13h00 à 16h30'
        },
        'Montbarbon' : {
            'name' : 'Montbarbon',
            'mail' : ['cde-livre-site', 'montbarbon.com'],
            'phone' : ['04', '74', '23', '45', '68'],
            'schedule' :'Le lundi de 14h00 à 19h00<br/>Du mardi au samedi de 9h30 à 19h00'
        },
        'PlanetR' : {
            'name' : 'Planet\'R',
            'mail' : ['planet.r.librairie', 'orange.fr'],
            'phone' : ['02', '33', '77', '17', '77'],
            'schedule' :'Du lundi 9h00 à 19h30'
        },
        'Systeme-U' : {
            'name' : 'Système U / Uculture',
            'site' : 'http://www.uculture.fr/contacts',
            'phone' : ['01', '76', '49', '48', '05'],
            'schedule' :'Du lundi au samedi de 8h30 à 19h30'
        }
    };

    var $sav = $('#select-sav');
    for (var sav in savTree) {
        var $option = $('<option></option>');
        $option.val(sav);
        $option.text(savTree[sav]['name']);
        $sav.append($option);
    }

    $("#select-sav").change(function () {
        var savSelected = $sav.val();
        var result = '<h2>'+savTree[savSelected]['name']+'</h2>';
        result = result + '<p>';
        if (savTree[savSelected]['site']){
            var site = savTree[savSelected]['site'];
            result = result + '<strong>Site : </strong><a href="' + site + '">' + site + '</a><br />';
        }
        if (savTree[savSelected]['mail']){
            var mail = savTree[savSelected]['mail'][0] + '@' + savTree[savSelected]['mail'][1];
            result = result + '<strong>Email : </strong><a href="mailto:' + mail +'">' + mail + '</a><br />';
        }
        if (savTree[savSelected]['phone']){
            var phone = savTree[savSelected]['phone'];
            var phoneFormated = '';
            for (var i = 0; i < phone.length; i++) {
                phoneFormated = phoneFormated + phone[i] + ' ';
            };
            result = result + '<strong>Téléphone : </strong>' + phoneFormated + '<br />';
        }
        result = result + '<strong>Horaire : </strong>' + savTree[savSelected]['schedule'];
        result = result + '</p>';
        $('#sav-contact').html(result);
    });


}(jQuery, undefined));
