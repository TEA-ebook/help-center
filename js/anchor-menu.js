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

    $('#text-search').bind('keyup change', function(ev) {
        $('article.page').removeHighlight();
        var searchTerm = $(this).val();
        if (searchTerm) {
            $('article.page').highlight(searchTerm);
        }
    });
});
