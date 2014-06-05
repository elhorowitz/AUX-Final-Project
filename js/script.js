(function(){
  'use strict';

  //====================================
  //Function to switch between tabs
  var toggleTab = function (el) {
    var thisTab = "#" + el.attr("id");
    var tabContents = thisTab + "-content";

    $(thisTab).addClass("selected");
    $(tabContents).addClass("shown");

    $(thisTab).siblings().removeClass("selected");
    $(tabContents).siblings().removeClass("shown");
  };

  $(".action-nav .action-item").on("click", function(e) {
    e.preventDefault();

    if ( ! $(this).hasClass("selected") ) {
      toggleTab($(this));
    }
  });

  //====================================
  //Function to show report form
  var showForm = function (el) {
    $(".report").removeClass("hidden");
  };

  $("button.show-report").on("click", function(e) {
    e.preventDefault();
    showForm($(this));
  });
})();