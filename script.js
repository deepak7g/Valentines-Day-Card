var screenWidth = window.innerWidth;

if (screenWidth < 768) {
  setTimeout(function () {
    $(".card").stop().animate(
      {
        top: "-90px",
      },
      "slow"
    );
  }, 3000);
  
  setTimeout(function(){
    $(".card").stop().animate(
      {
        top: "0",
      },
      "slow"
    );
  }, 6000);
  
} else {  
  
$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});
}