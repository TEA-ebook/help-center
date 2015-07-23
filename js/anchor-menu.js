$(function onLoad() {
    'use strict';

    var $anchorMenuElt = $('#anchor-menu');

    $('a.anchor-menu-item-target').each(function () {
        var $anchorElt = $(this);
        addAnchorMenuItem({
            fragment: $anchorElt.attr('id'),
            label: $anchorElt.attr('title'),
            level: getLevel($anchorElt)
        });
    });

    function addAnchorMenuItem(itemData) {
        var $menuItemElt = $('<li class="anchor-menu-item level-' + itemData.level + '"></li>');
        $menuItemElt.append('<a href="#' + itemData.fragment + '">' + itemData.label + '</a>');
        $anchorMenuElt.append($menuItemElt);
    }

    function getLevel($anchorElt) {
        var relatedTitleElt = $anchorElt.next('h1,h2,h3,h4,h5,h6').get(0);
        if (!relatedTitleElt && $anchorElt.parent().get(0).tagName.toLowerCase() === 'p') {
            relatedTitleElt = $anchorElt.parent().next('h1,h2,h3,h4,h5,h6').get(0);
        }

        if (relatedTitleElt) {
            return +relatedTitleElt.tagName[1]
        } else {
            return +$anchorElt.attr('data-level') || 6;
        }
    }
    $('#anchor-menu-title').click(function () {
      if ($("#anchor-menu").is(":hidden")) {
        $("#anchor-menu").slideDown("slow");
        $("#anchor-menu-title").removeClass("menu-close").addClass("menu-open");
      } else {
        $("#anchor-menu").hide();
        $("#anchor-menu-title").removeClass("menu-open").addClass("menu-close");
      }
    });

    function constructResults() {
        var $results = $('#results');
        var resultContent = [];
        $('span.highlight').each(function(i, element) {
            var matchingElement = $(element).parent();
            var tagname = matchingElement.prop('tagName');
            if (tagname === 'H3') {
                var anchor = matchingElement.prev().children('a').attr('id');
                resultContent.push({
                    'title' : matchingElement.text(),
                    'content' : matchingElement.next().text(),
                    'anchor' : anchor
                });
            } else if (tagname !== 'H2') {
                // find title just before matched element
                var title = matchingElement.prevAll('h3[id]')[0];
                if (!title) {
                    return;
                }
                var $title = $(title);
                var anchor = $title.prev().children('a').attr('id');
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
        if (size == 0) { return; }
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

    $('#text-search').bind('keyup change', function(ev) {
        $('article.page').removeHighlight();
        var searchTerm = $(this).val();
        if (searchTerm) {
            $('article.page').highlight(searchTerm);
            constructResults();
        }
    });

});
