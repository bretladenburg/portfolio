'use strict';

var articleView = {};

articleView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function(){
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).fadeIn();
  });
  // $('.main-nav .tab:first').click();
};

$(document).ready(function() {
  articleView.handleMainNav();
  $('#icon-menu').on('click', function() {
    $('.main-nav ul').toggle();
  })
})

articleView.initIndexPage = function() {
  Article.all.forEach(function(article) {
    $('#projects').append(article.toHtml());
  })

  articleView.handleMainNav();
}
