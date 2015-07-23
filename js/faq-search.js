$(function onLoad() {
    'use strict';

    var $article = $('article.page');
    var $results = $('#results');

    function constructResults() {
        var resultContent = [];
        var anchors = [];
        $('span.highlight').each(function(i, element) {
            var matchingElement = $(element).closest('p, ul, table, ol, h3');
            var tagname = matchingElement.prop('tagName');
            if (tagname === 'H3') {
                var anchor = matchingElement.prev().children('a').attr('id');
                if (anchors.indexOf(anchor) > -1) {
                    return;
                }
                anchors.push(anchor);
                resultContent.push({
                    'title' : matchingElement.text(),
                    'content' : matchingElement.next().text(),
                    'anchor' : anchor
                });
            } else {
                // find title just before matched element
                var title = matchingElement.prevAll('h3[id]')[0];
                if (!title) {
                    return;
                }
                var $title = $(title);
                var anchor = $title.prev().children('a').attr('id');
                if (anchors.indexOf(anchor) > -1) {
                    return;
                }
                anchors.push(anchor);
                if (($title).find('.highlight').length) {return;}
                // use title's content and anchor
                // use matching element's content
                resultContent.push({
                    'title' : $title.text(),
                    'content' : matchingElement.text(),
                    'anchor' : anchor
                });
            }
        });
        var results = $('<div></div>');
        var size = resultContent.length;
        if (size == 0) {
            $results.empty().append($('<div></div>').text('Aucun résultat.').attr('class', 'no-results'));
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
        if (searchTerm) {
            $article.highlight(searchTerm);
            constructResults();
            $results.highlight(searchTerm);
        }
    }
    $('#text-search').bind('keyup change', searchAndDisplay);

});
