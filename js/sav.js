
(function savContact($) {

    'use strict';

    var mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    function isMobile() {
        return mobileRegex.test(navigator.userAgent);
    }

    var savTree = {
        'Auchan' : {
            'name' : 'Auchan',
            'mail' : ['sav', 'tea-ebook', 'com'],
            'schedule' :'Du lundi au vendredi de 9h à 18h'
        },
        'Bisey' : {
            'name' : 'Bisey',
            'mail' : ['info', 'bisey', 'com'],
            'phone' : ['92', '42', '66', '89', '03'],
            'schedule' :'Le lundi de 10h à 19h<br/>Du mardi au vendredi de 9h à 19h<br/>Le samedi de 9h à 18h30'
        },
        'Boulanger' : {
            'name' : 'Boulanger',
            'mail' : ['sav', 'tea-ebook', 'com'],
            'schedule' :'Du lundi au vendredi de 9h à 18h'
        },
        'Cdiscount' : {
            'name' : 'Cdiscount by TEA',
            'mail' : ['cdiscountbytea', 'tea-ebook', 'com'],
            'schedule' : 'Du lundi au vendredi de 9h à 18h'
        },
        'Chapitre' : {
            'name' : 'Chapitre / France Loisirs',
            'mail' : ['relation_clients', 'chapitre', 'com'],
            'phone' : ['71', '56', '79', '21', '03'],
            'schedule' : 'Du lundi au vendredi de 8h à 19h<br/>Le samedi de 9h à 19h'
        },
        'Cheminant' : {
            'name' : 'Cheminant',
            'mail' : ['librairie.cheminant', 'wanadoo', 'fr'],
            'phone' : ['11', '74', '42', '97', '02'],
            'schedule' :'Du lundi au samedi de 9h15 à 19h'
        },
        'Cultura' : {
            'name' : 'Cultura',
            'site' : 'http://www.cultura.com/contact.html',
            'phone' : ['93', '02', '86', '86', '09'],
            'schedule' : 'Du lundi au samedi de 8h à 19h'
        },
        'Decitre' : {
            'name' : 'Decitre',
            'mail' : ['relationclients', 'decitre', 'fr'],
            'phone' : ['00', '48', '49', '76', '01'],
            'schedule' : 'Du lundi au samedi de 8h30 à 19h30'
        },
        'Develay' : {
            'name' : 'Develay',
            'mail' : ['contact.librairie', 'develay', 'net'],
            'phone' : ['49', '01', '65', '74', '04'],
            'schedule' :'Du lundi au vendredi de 9h à 12h et de 14h à 19h<br/>Le samedi de 9h30 à 12h30 et de 14h à 19h'
        },
        'Ebooks-store' : {
            'name' : 'Ebooks Store / France Loisirs Suisse',
            'mail' : ['ebooks-store', 'fls', 'ch'],
            'phone' : ['708', '840', '0848'],
            'schedule' : 'Du lundi au vendredi de 8h à 12h et de 13h à 17h'
        },
        'Électro dépôt' : {
            'name' : 'Électro dépôt',
            'mail' : ['sav', 'tea-ebook', 'com'],
            'schedule' :'Du lundi au vendredi de 9h à 18h'
        },
        'Espace-temps' : {
            'name' : 'Espace Temps',
            'mail' : ['espacetemps.egly', 'wanadoo', 'fr'],
            'phone' : ['66', '02', '26', '69', '01'],
            'schedule' :'Du lundi au samedi de 9h à 19h30'
        },
        'Eyrolles' : {
            'name' : 'Eyrolles',
            'mail' : ['sav', 'tea-ebook', 'com'],
            'schedule' :'Du lundi au vendredi de 9h à 18h'
        },
        'Furet du Nord' : {
            'name' : 'Furet du Nord',
            'mail' : ['contact','supportfuret','com'],
            'schedule' :'Du lundi au vendredi de 9h à 18h'
        },
        'Harlequin' : {
            'name' : 'Harlequin',
            'site' : 'https://www.harlequin.fr/contenu/contactez-nous'
        },
        'Harper Collins France' : {
            'name' : 'Harper Collins France',
            'site' : 'https://www.harpercollins.fr/contenu/contactez-nous'
        },
        'Librairie Jésuite' : {
            'name' : 'Librairie Jésuite',
            'mail' : ['communication-ser','ser-sa','com'],
            'phone' : ['24', '48', '39', '44', '01'],
            'schedule' :'Du lundi au vendredi 9h à 17h'
        },
        'Mes-livres-numeriques' : {
            'name' : 'Mes livres numériques / Belgique Loisirs',
            'mail' : ['info', 'meslivresnumeriques', 'be'],
            'phone' : ['60', '11', '22', '70/', '32'],
            'schedule' : 'Du lundi au vendredi de 13h à 16h30'
        },
        'Montbarbon' : {
            'name' : 'Montbarbon',
            'mail' : ['cde-livre-site', 'montbarbon', 'com'],
            'phone' : ['68', '45', '23', '74', '04'],
            'schedule' :'Le lundi de 14h00 à 19h00<br/>Du mardi au samedi de 9h30 à 19h'
        },
        'PlanetR' : {
            'name' : 'Planet\'R',
            'mail' : ['planet.r.librairie', 'orange', 'fr'],
            'phone' : ['77', '17', '77', '33', '02'],
            'schedule' :'Du lundi au samedi de 9h à 19h30'
        },
        'Québec Loisirs' : {
            'name' : 'Québec Loisirs',
            'mail' : ['serviceclub'.'quebecloisirs'.'com'],
            'site' : 'https://www.quebecloisirs.com/contactez-nous'
        }
        'Systeme-U' : {
            'name' : 'Système U / Uculture',
            'site' : 'http://www.uculture.fr/contacts',
            'phone' : ['05', '48', '49', '76', '01'],
            'schedule' :'Du lundi au samedi de 8h30 à 19h30'
        }
    };

    var $selectSav = $('#select-sav');
    for (var savContact in savTree) {
        var $option = $('<option></option>');
        $option.val(savContact);
        $option.text(savTree[savContact]['name']);
        $selectSav.append($option);
    }

    $selectSav.change(function () {
        var savSelected = $selectSav.val();
        var savChoice = savTree[savSelected];
        var result = '<h2>'+ savChoice['name']+'</h2>';
        result += '<p>';
        if (savChoice['site']){
            var site = savChoice['site'];
            result += '<strong>Site : </strong><a href="' + site + '">' + site + '</a><br />';
        }
        if (savChoice['mail']){
            var mail = savChoice['mail'][0] + '@' + savChoice['mail'][1] + '.' + savChoice['mail'][2];
            result += '<strong>Email : </strong><a href="mailto:' + mail +'">' + mail + '</a><br />';
        }
        if (savChoice['phone']){

            var phone = savChoice['phone'].reverse().join('');
            var phoneFormatted = savChoice['phone'].join(' ');
            result += '<strong>Téléphone : </strong>';

            if (isMobile()) {
                result += '<a href="tel:' + phone + '"">' + phoneFormatted + '</a>';
            } else {
                result += phoneFormatted;
            }

            result +=  '<br />';
        }
        result += '<strong>Horaire : </strong>' + savChoice['schedule'];
        result += '</p>';
        $('#sav-contact').html(result);
    });

    var mailPB = 'help' + '@' + 'pocketbook-int' + '.com';
    var phonePB = {
        'France' : {
            'countryName' : 'France',
            'phoneNumber' : ['277', '080', '805', '0']
        },
        'Suisse' : {
            'countryName' : 'Suisse',
            'phoneNumber' : ['720', '898', '800', '0']
        },
        'Autres' : {
            'countryName' : 'Autres pays francophones',
            'phoneNumber' : ['277', '080', '805', '0033']
        }
    };
    var contactSavPB = '<ul>';
    for (var country in phonePB){
        var countryName = phonePB[country]['countryName'];
        var phoneNumber = phonePB[country]['phoneNumber'].reverse().join('');
        var phoneNumberFormatted = phonePB[country]['phoneNumber'].join(' ');
        contactSavPB += '<li>';
        if (isMobile()) {
            contactSavPB += countryName + ' : <strong><a href="tel:' + phoneNumber + '"">' + phoneNumberFormatted + '</a>';
        }
        else {
            contactSavPB += countryName + ' : <strong>' + phoneNumberFormatted;
        }
        contactSavPB += '</strong></li>';
    }
    contactSavPB += '</ul>';
    contactSavPB += '<p>Ou par email à l\'adresse : ' + '<a href="mailto:' + mailPB +'">' + mailPB + '</a></p>';
    $('#contact-pb').html(contactSavPB);

}(jQuery, undefined));
