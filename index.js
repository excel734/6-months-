console.log("js loaded");

$(document).ready(function() {
  const message = "Heyyy princess....Happy 6 month anniversary...i hope that our love for each other only keeps growing. Thank you for always being there for me, thank you for the love support and kindness you have shown me, thank you for the advice you give me, you really are a blessing to me and I promise to keep developing myself for you me and us, I love you from the top top to the bottom of my heart"; 
  let i = 0;
  let speed = 90;
  let timerId = null; 

  function typeMsg() {
    if (i < message.length) {
      $("#message").append(message.charAt(i));
      i++;
      timerId = setTimeout(typeMsg, speed);
    } else {
      $("#caret").fadeOut(200); 
      $(".card").addClass("finished"); 
    }
  }

  // show the card then start typing
  $(".card").addClass("visible"); 
  setTimeout(typeMsg, 600);

  // click-to-skip
  $(".card").on("click", function() {
    if (i < message.length) {
      clearTimeout(timerId); 
      $("#message").css({ opacity: 0 }).text(message).animate({ opacity: 1 }, 300);
      i = message.length;
      $("#caret").fadeOut(150);
      $(".card").addClass("finished");
    }
  });
});
