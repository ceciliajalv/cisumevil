$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollDown() >  0){
      $(".blur").css({"opacity" : "1"})
    }
    else {
      $(".blur").css({"opacity" : "0"})
    }
  })
})