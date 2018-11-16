$(function onLoad() {
    'use strict';

    $(".show-contact-form").click(function () {
        $(this).next("form").toggle();
    });

    var $article = $('article.page');
    var $results = $('#results');
    var initialText = $results.find('.no-results').text();

    function displayResultText(text) {
        $results.html($('<p>').text(text).addClass('no-results'));
    }

    function displayContactForm() {
        $(".contact-form").show();
    }

    function constructResults() {
        var resultContent = [];
        var anchors = [];
        $('span.highlight').each(function (i, element) {
            var $matchingElement = $(element).closest('.entry > p, .entry > ul, .entry > table, .entry > ol, .entry > h4, .entry > h3');
            var tagname = $matchingElement.prop('tagName');
            var $title, content;
            if (tagname === 'H3' || tagname === 'H4') {
                $title = $matchingElement;
                content = $title.next().text();
            } else {
                // find title just before matched element
                var title = $matchingElement.prevAll('h4[id],h3[id]')[0];
                if (!title) {
                    return;
                }
                $title = $(title);
                content = $matchingElement.text();

            }
            var anchor = $title.prev().children('a').attr('id');
            if (anchors.indexOf(anchor) > -1) {
                return;
            }
            anchors.push(anchor);
            resultContent.push({
                'title': $title.text(),
                'content': content,
                'anchor': anchor
            });
        });
        var results = $('<div>');
        var size = resultContent.length;
        if (size == 0) {
            displayResultText('Aucun résultat.');
            displayContactForm();
            return;
        }
        for (var i = 0; i < size; i++) {
            var element = resultContent[i];
            var link = $('<a>').text(element.title).attr('href', '#' + element.anchor);
            var title = $('<h4>').append(link);
            var result = $('<div>').addClass('result').append(title);
            if (element.content) {
                var secondLink = $(' <a>').text('Voir la réponse complète').attr('href', '#' + element.anchor).addClass('see-more');
                result.append($('<p> ').addClass('result-content').text(element.content).append(secondLink));
            }
            results.append(result);
            displayContactForm();
        }

        $results.html(results);
    }

    function searchAndDisplay() {
        $article.removeHighlight();
        var searchTerm = $(this).val();
        if (searchTerm.length > 2) {
            trackEventInGa('faq-search', 'search-term', 'faq-search|search-term|' + searchTerm);
            $article.highlight(searchTerm);
            constructResults();
            $results.removeHighlight().highlight(searchTerm);
        } else {
            if (searchTerm) {
                trackEventInGa('faq-search', 'search-term', 'faq-search|search-term|' + searchTerm);
            }
            displayResultText(initialText)
        }
    }

    $('#search-form').find('form').bind('submit', function (event) {
        trackEventInGa('faq-search', 'submit-form', 'faq-search|submit-form');
        event.preventDefault();
    });

    $('#text-search').bind('keyup', searchAndDisplay);
    searchAndDisplay.call($('#text-search'));

    $results.on('click', '.see-more', function() {
        trackEventInGa('faq-search', 'click-result', 'faq-search|click-result|link|' + $(this).attr('href'));
    });

    $results.on('click', 'h4 a', function() {
        trackEventInGa('faq-search', 'click-result', 'faq-search|click-result|title|' + $(this).attr('href'));
    });
});
