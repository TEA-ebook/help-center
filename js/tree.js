(function enableJsNavigation($) {
    'use strict';
    var tree = {
        '…' : {},
        'le web' : {
            'un ordinateur' : ['/web-web','Acheter un ebook sur Internet et le lire sur son ordinateur'],
            'une liseuse TEA TouchLux 2 ou 3 ou Ultra' : ['/web-liseuseTEA','Acheter un ebook sur Internet et le lire sur sa liseuse Pocketbook v5'],
            'l\'application android v1' : ['/web-androidv1','Acheter un ebook sur Internet et le lire sur sa tablette Android (app v1)'],
            'l\'application android v2' : ['/web-androidv2','Acheter un ebook sur Internet et le lire sur sa tablette Android (app v2)'],
            'l\'application iOs v1' : ['/web-iosv1','Acheter un ebook sur Internet et le lire sur son iPad/iPhone (app v1)']/*,
            'l\'application iOs v2' : ['/web-iosv2','Acheter un ebook sur Internet et le lire sur son iPad/iPhone (app v2)']*/
        },
        'une liseuse TEA TouchLux 2 ou 3 ou Ultra' : {
            'une liseuse TEA TouchLux 2 ou 3 ou Ultra' : ['/liseuse-liseuseTEA','Acheter un ebook et le lire sur sa liseuse Pocketbook v5'],
        },
        'l\'application android v1' : {
            'l\'application android v1' : ['/androidv1-androidv1','Acheter un ebook et le lire sur sa tablette Android (app v1)']
        },
        'l\'application android v2' : {
            'l\'application android v2' : ['/androidv2-androidv2','Acheter un ebook et le lire sur sa tablette Android (app v2)']
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
//    $('#select_container').on('click', '#select_achat', updateLectureSelect);
    $('#select_container').on('change', '#select_achat', updateLectureSelect);

    function updateSelectResult(e, t) {
        var achat = $achat.val();
        var lecture = $(e.target).val();
        var resultat = tree[achat][lecture];
        var htmlResultat = '<a class="btn btn-default btn-home" role="button" href="'+resultat[0]+'">'+resultat[1]+'</a>';
        $('#select_result').html(htmlResultat);
    }
    $('#select_container').on('change', '#select_lecture', updateSelectResult);
}(jQuery, undefined));
