'use strict';

(function(module) {
  const homeController = {};


  homeController.list = () => {
    $('.tab-content').show();
  }
  module.homeController = homeController;
})(window);
