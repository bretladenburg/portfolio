'use strict';

(function(module) {
  const aboutController = {};


  aboutController.list = () => {
    $('.tab-content').hide();
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);
  }
  module.aboutController = aboutController;
})(window);
