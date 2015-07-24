$(function onLoad() {
    'use strict';

    var $article = $('article.page');
    var $results = $('#results');
    var initialText = $results.find('.no-results').text();

    function displayResultText(text) {
        $results.empty().append($('<p></p>').text(text).attr('class', 'no-results'));
    }

    function constructResults() {
        var resultContent = [];
        var anchors = [];
        $('span.highlight').each(function(i, element) {
            var $matchingElement = $(element).closest('p, ul, table, ol, h3');
            var tagname = $matchingElement.prop('tagName');
            var $title,content;
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
                'title' : $title.text(),
                'content' : content,
                'anchor' : anchor
            });
        });
        var results = $('<div></div>');
        var size = resultContent.length;
        if (size == 0) {
            displayResultText('Aucun résultat.');
            return;
        }
        for (var i = 0; i < size; i++) {
            var element = resultContent[i];
            var link = $('<a></a>').text(element.title).attr('href', '#'+element.anchor);
            var title = $('<h4></h4>').append(link);
            var result = $('<div></div>').attr('class', 'result').append(title);
            if (element.content) {
                result.append($('<div></div>').attr('class', 'result-content').text(element.content));
            }
            results.append(result);
        }

        $results.empty().append(results);
    }

    function searchAndDisplay() {
        $article.removeHighlight();
        var searchTerm = $(this).val();
        if (searchTerm && searchTerm.length > 2) {
            $article.highlight(searchTerm);
            constructResults();
            $results.removeHighlight().highlight(searchTerm);
        } else {
            displayResultText(initialText)
        }
    }

    $('#search-form').find('form').bind('submit', function(event) {
        event.preventDefault();
    });

    $('#text-search').bind('keyup change', searchAndDisplay);
    searchAndDisplay.call($('#text-search'));
});
