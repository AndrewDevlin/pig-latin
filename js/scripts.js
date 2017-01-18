// business logic
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

var translateWord = function(word) {
  var result = '';
  var onset = word.charAt(0);
  var beginsWithVowel = false;

  for (var i = 0; i < vowels.length; i++) {
    if (onset === vowels[i]) {
      beginsWithVowel = true;
      break;
    }
  }

  if (beginsWithVowel) {
    result = word + 'ay';
  } else {
    result = word;
  }

  return result;
};

// user interface logic
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var input = $("#english").val();
    var output = translateWord(input);

    $("#pig-latin p").text(output);
    $("#pig-latin").show();
  });
});
