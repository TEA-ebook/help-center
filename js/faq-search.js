$(function onLoad() {
    'use strict';

    var $article = $('article.page');
    var $results = $('#results');
    var initialText = $results.find('.no-results').text();

    function displayResultText(text) {
        $results.empty().append($('<p>').text(text).addClass('no-results'));
    }

    function constructResults() {
        var resultContent = [];
        var anchors = [];
        $('span.highlight').each(function (i, element) {
            var $matchingElement = $(element).closest('.entry > p, .entry > ul, .entry > table, .entry > ol, .entry > h3');
            var tagname = $matchingElement.prop('tagName');
            var $title, content;
            if (tagname === 'H3') {
                $title = $matchingElement;
                content = $title.next().text();
            } else {
                // find title just before matched element
                var title = $matchingElement.prevAll('h3[id]')[0];
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
            return;
        }
        for (var i = 0; i < size; i++) {
            var element = resultContent[i];
            var link = $('<a>').text(element.title).attr('href', '#' + element.anchor);
            var title = $('<h4>').append(link);
            var result = $('<div>').addClass('result').append(title);
            if (element.content) {
                var secondLink = $('<a>').text('Voir la réponse complète').attr('href', '#' + element.anchor).addClass('see-more');
                result.append($('<p>').addClass('result-content').text(element.content).append(secondLink));
            }
            results.append(result);
        }

        $results.empty().append(results);
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

    $('#text-search').bind('keyup change', searchAndDisplay);
    searchAndDisplay.call($('#text-search'));

    $results.on('click', '.see-more', function() {
        trackEventInGa('faq-search', 'click-result', 'faq-search|click-result|link|' + $(this).attr('href'));
    });

    $results.on('click', 'h4 a', function() {
        trackEventInGa('faq-search', 'click-result', 'faq-search|click-result|title|' + $(this).attr('href'));
    });
});
