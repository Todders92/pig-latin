// Back-end logic:



// User interface logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var phrase = $("input#phrase").val();
    console.log(phrase);

    var phraseArray = phrase.split("");
    console.log(phraseArray);

    var result;
      if (isNaN(phrase) === false) {
        result = phrase;
      } else if (["a", "e", "i", "o", "u"].includes(phraseArray[0])) {
        result = phrase + "ay";
        console.log(result);
      } else if (["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"].includes(phraseArray[0])) {
        var clonePhraseArray = phraseArray.map(function(element) {
          return element;
        })
        var removed = clonePhraseArray.splice(0, 1);
        console.log(removed);
        result = removed + phraseArray[0];
        console.log(result);
      }

    $("#piglatinoutput").show();
    $(".piglatin").text(result);
  });
});
