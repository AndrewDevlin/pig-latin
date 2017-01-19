// business logic
var translateWord = function(word) {
  if (word.match(/[^a-z]/i)) {
    return word;
  }

  var regEx = /^(y?(?:(?:qu)|[^aeiouy])*)(.*)$/i;

  return word.replace(regEx, '$2$1ay');
};

var translateTokens = function(tokens) {
  var result = '';

  for (var i = 0; i < tokens.length; i++) {
    result += translateWord(tokens[i]);
  }

  return result;
};

// user interface logic
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var input = $("#english").val();
    var tokens = input.split(/\b/);
    var output = translateTokens(tokens);

    $("#pig-latin p").text(output);
    $("#pig-latin").show();
  });
});
