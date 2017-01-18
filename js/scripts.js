// business logic
var vowels = ['a', 'e', 'i', 'o', 'u'];

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

    if ((char.toLowerCase() === 'u') && (word.charAt(i-1).toLowerCase() === 'q')) {
      result += char;
      continue;
    }
    if (isVowel(char) || (i !== 0 && char.toLowerCase() === 'y')) {
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

  if (word.length === 0) {
    return '';
  }

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

var isAlpha = function(charCode) {
  return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}

var parseEnglish = function(text) {
  var result = '';
  var word = '';

  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);

    if (isAlpha(charCode)) {
      word += text.charAt(i);
    } else {
      result += translateWord(word);
      word = '';
      result += text.charAt(i);
    }
  }
  return result;
};

// user interface logic
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var input = $("#english").val();
    var output = parseEnglish(input);

    $("#pig-latin p").text(output);
    $("#pig-latin").show();
  });
});
