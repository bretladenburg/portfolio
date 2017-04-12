'use strict';

var articles = [];

function Article (rawDataObj) {
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.authors = rawDataObj.authors;
  this.projectUrl = rawDataObj.projectUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.data('category', this.category);
  $newArticle.find('h2').html(this.title);
  $newArticle.find('address').html(this.authors);
  $newArticle.find('a').attr('href', this.projectUrl);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};
