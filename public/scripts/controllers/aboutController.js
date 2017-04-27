'use strict';

(function(module) {
  const aboutController = {};


  aboutController.list = () => {
    $('.tab-content').hide();
    $('#about').show();
  }
  module.aboutController = aboutController;
})(window);
