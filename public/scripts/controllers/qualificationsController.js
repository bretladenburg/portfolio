'use strict';

(function(module) {
  const qualificationsController = {};


  qualificationsController.list = () => {
    $('.tab-content').hide();
    $('#qualifications').show();
  }
  module.qualificationsController = qualificationsController;
})(window);
