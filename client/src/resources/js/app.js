$(document).ready(ready);


function ready(){
  (function() {
    $('#testimonials').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1
    });

    $('.landing-top').parallax({imageSrc: '../../assets/landing/providence-doucet-87304.jpg', speed: 0.7});

    window.onbeforeunload = function () {
      var scroll = $(window).scrollTop();
      localStorage.setItem("lastScrollTop", scroll);
    }

    var getParams = {};

    document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
      function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
      }

      getParams[decode(arguments[1])] = decode(arguments[2]);
    });

    if(getParams["scrolltop"]) {
      var topPosition = parseInt(localStorage.getItem("lastScrollTop"));
      $(window).scrollTop(topPosition);
    }

    var $all_msg = $('#remember-gift');
    //get a list of letters from the welcome text
    var $wordList = $('#remember-gift').text().split("");
    //clear the welcome text msg
    $('#remember-gift').text("");
    //loop through the letters in the $wordList array
    $.each($wordList, function(idx, elem) {
      //create a span for the letter and set opacity to 0
      var newEL = $("<span/>").text(elem).css({
        opacity: 0
      });
      //append it to the welcome message
      newEL.appendTo($all_msg);
      //set the delay on the animation for this element
      newEL.delay(idx * 70);
      //animate the opacity back to full 1
      newEL.animate({
        opacity: 1
      }, 1100);
    });

    $("#video-container").click(function() {
      var video = document.getElementById("video");
      if(video.paused) {
        video.play();
        document.getElementById("video-container").setAttribute('data-state', 'playing');
      } else {
        video.pause();
        document.getElementById("video-container").setAttribute('data-state', 'paused');
      }

    })

    $("#dropdown-button").click(function(e) {
      e.stopPropagation();
      $("#dropdown").css("visibility", "visible");
      $("#dropdown").css("opacity", "1");
    })

    $(document).click(function() {
      $("#dropdown").css("visibility", "hidden");
      $("#dropdown").css("opacity", "0");
    })

    $(".delete-item").each(function(index, element) {
      $(element).click(function() {
        $("#delete-confirm").addClass("showing");
        $('body').css('top', -(document.documentElement.scrollTop) + 'px')
          .css("position", "fixed");
        $(".popup-back").show();
      });
    });

    $("#send-invites").click(function() {
      $("#submit-confirm").addClass("showing");
      $('body').css('top', -(document.documentElement.scrollTop) + 'px')
        .css("position", "fixed");
      $(".popup-back").show();
    })

    $("#cancel-cogivi").click(function() {
      $("#delete-confirm").addClass("showing");
      $('body').css('top', -(document.documentElement.scrollTop) + 'px')
        .css("position", "fixed");
      $(".popup-back").show();
    })

    $("#close-popup").click(function() {
      $(".popup").removeClass("showing");
      $(".popup-back").hide();
      var position = -parseInt($("body").css("top").slice(0, -2));
      $('body').css('top', 0 + 'px')
        .css("position", "static");
      $(window).scrollTop(position);
    })

    $("#invite-more").click(function() {
      $("#main-invite").css("max-height", "1000px");
    })

    console.log("ready");

  })();

  $("logo").hide();

  $(window).on('load', function () {
    changeNameHeights();
  });

  $(window).resize(function() {
    changeNameHeights();
  })

  function changeNameHeights() {
    var maxHeight = 0;

    $(".dashboard .contributors .contributor .name").each(function(index, element) {
      var currentHeight = $(element).height();
      if(maxHeight < currentHeight) {
        maxHeight = currentHeight;
      }
    });

    $(".dashboard .contributors .contributor .name").each(function(index, element) {
      $(element).css("min-height", maxHeight+"px");
    });
  }

  function previewFile() {
    var preview = document.querySelector('.user-icon');
    var file    = document.querySelector('#profile-picture').files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      console.log();
      preview.style.background = "url("+reader.result+") no-repeat center center / cover";
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "../../assets/register/RP_0024_Person-icon.png";
    }
  }

  function eachClicked(element) {
    if(element.checked) {
      $(".each-box .box-items input[type='checkbox']").each(function(index, checkbox) {
        if(checkbox.id != element.id) {
          $(checkbox).prop('checked', false);
        };
      });
    }
  }
}
