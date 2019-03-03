$(function() {
  ancho_out = $(window).width();
  if (ancho_out < 992) {
    $("#mainNav").css({"padding-top" : ".7rem", "padding-bottom" :".7rem"});
  }
  
  $(window).scroll(function() {
    //use this number to determine when to switch to fixed menu
    ancho = $(window).width();
    if (ancho > 992) {
      if ($(window).scrollTop() > 265) {
        $("#mainNav").addClass("navbarFixed");
        $("#AddMargen").addClass("margen");
        $("#mainNav").css({"padding-top" : ".7rem", "padding-bottom" :".7rem"});


      }

      if ($(window).scrollTop() < 268) {
        $("#mainNav").removeClass("navbarFixed");
        $("#AddMargen").removeClass("margen");
        $("#mainNav").css({"padding-top" : "1.5rem", "padding-bottom" :"1.5rem"});

      }
    } else {
      $("#mainNav").addClass("navbarFixed");
      $("#AddMargen").css({"margin-top" :"10rem"});
      
     

    }
  });
});


var activeFilter = "all";

$(".pp-filter-button").on("click", function(e) {
  // remove btn-primary from all buttons first
  $(".pp-filter-button").removeClass("btn-secondary");
  $(".pp-filter-button").addClass("btn-outline-secondary");

  // add btn-primary to active button
  var button = $(this);
  button.removeClass("btn-outline-secondary");
  button.addClass("btn-secondary");
  filterItems(button.data("filter"));
  e.preventDefault();
});

function filterItems(filter) {
  if (filter === activeFilter) {
    return;
  }

  activeFilter = filter;
  $(".pp-gallery .card").each(function() {
    var card = $(this);
    var groups = card.data("groups");
    var show = false;
    if (filter === "all") {
      show = true;
    } else {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i] === filter) {
          show = true;
        }
      }
    }
    // hide everything first
    card.fadeOut(400);

    setTimeout(function() {
      if (show && !card.is(":visible")) {
        card.fadeIn(400);
      }
    }, 500);
  });
}
function workBelt() {

  

  $('.card').click(function() {
    $('.child-belt').addClass("slided");
    $('.direccion').addClass('show_arrow');
    //$('.work-container').show();
  });

  $('.direccion').click(function() {

   $('.child-belt').removeClass("slided");
   var arrow = $(this);
   arrow.removeClass('show_arrow')
   // $('.work-container').hide(800);
  });

}

workBelt()

//reproductor de video

var vid = document.getElementById("myVideo");

var fillBar = document.getElementById("fill");

var currentTime = document.getElementById("currentTime");

var volumeSlider = document.getElementById("volume");

function playOrPause(){
    
    if(vid.paused){
        vid.play();
        $("#playBtn").attr("src","video/Pause.png");
    }
    else{
        vid.pause();
        $("#playBtn").attr("src","video/Play.png");
    }
}

vid.addEventListener('timeupdate',function(){
    
    var position = vid.currentTime / vid.duration;
        
    fillBar.style.width = position * 100 +'%';
    
    convertTime(Math.round(vid.currentTime));  //convert decimal no into intiger
    
    if(vid.ended){
        $("#playBtn").attr("src","video/Play.png");
    }
});

function convertTime(seconds)
        {
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;
            
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent = min + ":" + sec;
            
            totalTime(Math.round(vid.duration));
        }
        
        function totalTime(seconds)
        {
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;
            
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent += " / " + min + ":" + sec;
        }


function changeVolume(){
    
    vid.volume = volumeSlider.value;
    
    if(volumeSlider.value == 0){
        
        $("#speaker").attr("src","video/Mute.png");
    }
    else{
        $("#speaker").attr("src","video/Speaker.png");
    }
}



