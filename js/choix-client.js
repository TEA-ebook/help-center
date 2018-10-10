
(function clientList($) {

    'use strict';

    var apps = {
        'Furet du Nord' : {
            'name' : 'Furet du Nord eBook',
            'android' : 'https://play.google.com/store/apps/details?id=com.epagine.fdn',
            'ios' : ''
        },
        'CNAM' : {
            'name' : 'Le Cnam eBooks partagés',
            'android' : 'https://play.google.com/store/apps/details?id=fr.cnam.reader',
            'ios' : ''
        },
         'Chapitre' : {
            'name' : 'Chapitre ebooks',
            'android' : 'https://play.google.com/store/apps/details?id=com.chapitre.ebooks',
            'ios' : ''
        },
        'France Loisirs' : {
            'name' : 'France Loisirs eBooks',
            'android' : 'https://play.google.com/store/apps/details?id=fr.tea.ebookreader.franceloisirs&hl=fr',
            'ios' : ''
        },
        'Cultura' : {
            'name' : 'Cultura Ebooks',
            'android' : 'https://play.google.com/store/apps/details?id=fr.tea.ebookreader.Cultura&hl=fr',
            'ios' : ''
        },
        'Decitre' : {
            'name' : 'Decitre eBooks',
            'android' : 'https://play.google.com/store/apps/details?id=fr.tea.ebookreader.decitre&hl=fr',
            'ios' : ''
        },
        'France Loisirs Suisse' : {
            'name' : 'France Loisirs Suisse eBooks',
            'android' : 'https://play.google.com/store/apps/details?id=fr.tea.ebookreader.franceloisirs.ch',
            'ios' : ''
        },
        'Belgique Loisirs' : {
            'name' : 'Belgique Loisirs eBooks',
            'android' : 'https://play.google.com/store/apps/details?id=fr.tea.ebookreader.franceloisirs.be',
            'ios' : ''
        },
        'Québec Loisirs' : {
            'name' : 'Québec Loisirs',
            'android' : 'https://play.google.com/store/apps/details?id=fr.tea.ebookreader.franceloisirs.ca',
            'ios' : ''
        }
    };

    var $selectClients = $('select.clients');
    for (var client in apps) {
        var $option = $('<option></option>');
        $option.val(client);
        $option.text(client);
        $selectClients.append($option);
    }

    $selectClients.change(function () {
        var clientApp = apps[$selectClients.val()];
        var result = '<div class="protip">';
        if (clientApp['android']){
            result += "<h5>Application Android</h5>";
            result += '<p>Téléchargez <a class="button" href="' + clientApp['android'] + '">' + clientApp['name'] + '</a>  sur Google Play.</p>'
        }
        result += '</div>';
        $('.client-android-app').html(result);
    });

    console.log("coucou");

}(jQuery, undefined));
