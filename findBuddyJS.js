function main(){
  var isButtonActive = 0;
  $skillset = $('.findBuddyEntry');
  $skillset.hide()
  $skillset.fadeIn(1000);
  $('.hiddenText').hide();
  $('.showButton').on("click",function(){
    $(this).toggleClass("active");
    isButtonActive = 1 - isButtonActive;
    if (isButtonActive > 0){
      $(this).text("Show less");
      $(this).next().next().slideToggle(400);
    }else {
      $(this).text("Show more");
      $(this).next().next().slideToggle(400);
    }
  });

  $('.pendingButton').on("click",function(){
    $(this).addClass("active");
    $(this).text("Pending...");
  });
}
$(document).ready(main);
