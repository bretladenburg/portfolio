'use strict';

function Article (rawDataObj) {
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.authors = rawDataObj.authors;
  this.projectUrl = rawDataObj.projectUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

Article.all = [];

Article.prototype.toHtml = function() {
  let template = Handlebars.compile($('#template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

Article.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  })
}

Article.fetchAll = function() {
  if (localStorage.rawData) {
    Article.loadAll(JSON.parse(localStorage.rawData));
  } else {
    $.getJSON('data/data.json').then(function(rawData){
      Article.loadAll(rawData);
      articleView.initIndexPage();
      localStorage.rawData = JSON.stringify(rawData);
    });
  }
}


$('#icon-menu').click(function() {
  $('#mobile-nav').toggle();
})

$('.float-left').click(function() {
  location.reload()
})
