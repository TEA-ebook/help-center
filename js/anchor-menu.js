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
        var $article = $('article.page');
        var $results = $('#results');
        var resultContent = [];
        $('span.highlight').each(function(i, element) {
            var matchingElement = $(element).parent();
            var tagname = matchingElement.prop('tagName');
            if (tagname === 'h3') {
                resultContent.push({
                    'title' : matchingElement.text(),
                    'content' : '',
                    'anchor' : matchingElement.attr('id')
                });
            } else {
                // find title just before matched element
                var title = matchingElement.prevAll('h3[id]')[0];
                if (!title) {
                    return;
                }
                var $title = $(title);
                // use title's content and anchor
                // use matching element's content
                resultContent.push({
                    'title' : $title.text(),
                    'content' : matchingElement.text(),
                    'anchor' : $title.attr('id')
                });
            }
        });
        console.log(resultContent);
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
