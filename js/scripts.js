// business logic
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

var isVowel = function(letter) {
  if (letter.length !== 1) {
    throw new Error("argument must be single-letter string");
  }
  for (var i = 0; i < vowels.length; i++) {
    if (letter.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}

var onsetConsonants = function(word) {
  var result = '';

  for (var i = 0; i < word.length; i++) {
    var char = word.charAt(i);
    if (isVowel(char)) {
      break;
    }
    result += char;
  }

  return result;
}

var translateWord = function(word) {
  var result = '';
  var onset = word.charAt(0);
  var beginsWithVowel = false;

  // Check for presence of initial vowel and set flag accordingly
  beginsWithVowel = isVowel(onset);

  if (beginsWithVowel) {
    result = word + 'ay';
  } else {
    onset = onsetConsonants(word);
    result = word.slice(onset.length) + onset + 'ay';
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
