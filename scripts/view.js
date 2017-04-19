'use strict';

var articleView = {};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  articles.push(new Article(articleObject));
});


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
    console.log('clicked');
  })
})

articles.forEach(function(article) {
  $('#projects').append(article.toHtml());
})
