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
  let template = $('#template').html();
  let render = Handlebars.compile(template);
  return render(this);
};


$('#icon-menu').click(function() {
  $('#mobile-nav').toggle();
})

$('.float-left').click(function() {
  location.reload()
})
