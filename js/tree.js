(function enableJsNavigation($) {
    'use strict';
    var tree = {
        'web' : {
            'web' : 'http://blabla/web-web.html',
            'ordinateur' : 'web-ordinateur',
            'basic2' : 'web-liseuse'
        },
        'liseuse' : {
            'cybook' : 'link liseuse-cybook',
            'pbv4' : 'link liseuse-pb4'
        },
        'android' : {
            'android' : 'link android'
        }
    };

    var $achat = $('#select_achat');
    for (var achat in tree) {
        var $option = $('<option></option>');
        $option.val(achat);
        $option.text(achat);
        $achat.append($option);
    }

    function updateLectureSelect(e) {
        var $lecture;
        $lecture = $('<select></select>');
        $lecture.attr('id', 'select_lecture');
        achat = $achat.val();
        for (var lecture in tree[achat]) {
            $option = $('<option></option>');
            $option.val(lecture);
            $option.text(lecture);
            $lecture.append($option);
        }
        $('#select_lecture_wrapper').html($lecture);
        $lecture.change();
    }
    $('#select_container').on('change', '#select_achat', updateLectureSelect);

    function updateSelectResult(e, t) {
        var achat = $achat.val();
        var lecture = $(e.target).val();
        console.log(achat, lecture);
        var resultat = tree[achat][lecture];
        $('#select_result').html(resultat);
    }
    $('#select_container').on('change', '#select_lecture', updateSelectResult);
}(jQuery, undefined));
