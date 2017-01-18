// business logic

// user interface logic
$(document).ready(function() {
  $("form#translator").submit(function() {
    event.preventDefault();
    var input = $("#english").val();

    $("#pig-latin p").text(input);
    $("#pig-latin").show();
  });
});
