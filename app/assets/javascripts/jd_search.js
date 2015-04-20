;(function($) {
  'use strict';

  // if hash value, fetch and decode
  var hash = (window.location.hash !== "") ?  decodeURIComponent(window.location.hash.substr(1)) : "";

  // on DOM ready
  $(function() {
    var $searchInput = $("#jd_search");
    var $jdResults = $(".jd__results");
    var $skillItems = $(".skill");

    $jdResults.find(".jd__listing").hide();

    var displaySkillSearchResults = function(skill) {
      var skill = "" || skill;
      $searchInput.val(skill);
      $skillItems.removeClass("skill--highlighted");
      $("[data-skill='" + skill + "']")
        .addClass("skill--highlighted")
        .parents(".jd__listing")
          .show();
    };

    var updateSkillSearch = function(skill) {
      // update hash and encode
      window.location.hash = encodeURIComponent(skill);
      // update input & display results
      $jdResults.find(".jd__listing").hide();
      displaySkillSearchResults(skill);
    };

    if(hash) {
      displaySkillSearchResults(hash);
    }

    // bind events
    $skillItems.on('click', function(e) {
      updateSkillSearch($(this).data('skill'));
    });

    $searchInput.on('change', function() {
      updateSkillSearch($(this).val());
    }).parents("form").on('submit', function(e) {
      e.preventDefault();
    });

    $(".jd__save").on('click', function() {
      $(this).toggleClass( 'saved' );
    });
  });

}(jQuery));