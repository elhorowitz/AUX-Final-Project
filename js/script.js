(function(){
  'use strict';

  //====================================
  //Smooth Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  //====================================
  //Function for page search
  $(".search_box").chosen({
    no_results_text: "Sorry, no matches. Please try again!",
    data_placeholder: "ie. Parking Ticket",
    search_contains: true
  });

  $('.search_box').on('change', function(e) {
    e.preventDefault();
    var url = $(this).val()[0].split(" ")[0] + ".html";
    var anchor = "#" + $(this).val()[0].split(" ")[1];
    window.location.replace(url + "/" + anchor);
  });



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

  //====================================
  //Function to change image on hover
  var orangeColor = function (el) {
    var source = el.find($("img")).attr("src").replace("blue", "orange");
    el.find($("img")).attr("src", source);
  };

  var blueColor = function (el) {
    var source = el.find($("img")).attr("src").replace("orange", "blue");
    el.find($("img")).attr("src", source);
  };

  $(".services-info figure").hover(function(e) {
    e.preventDefault();
    orangeColor($(this));
  }, function(e) {
    e.preventDefault();
    blueColor($(this));
  });
})();