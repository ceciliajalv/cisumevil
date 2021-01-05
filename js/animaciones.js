$(document).ready(function(){
  debugger
  $(window).scroll(function(){
    if($(this).scrollDown() >  0){
      setTimeout(()=>{
      $(".blur").css({"opacity" : "1"})
    },2500)}
    else {
      $(".blur").css({"opacity" : "0"})
    }
  })
})