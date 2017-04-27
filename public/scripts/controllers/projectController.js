'use strice';

(function(module) {
  const projectController = {};


  projectController.list = () => {
    Article.fetchAll(articleView.initIndexPage);
    $('.tab-content').hide();
    $('#projects').show();
    console.log('thing');
  }

  module.projectController = projectController;
})(window);
