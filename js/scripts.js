// Back-end logic:



// User interface logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var phrase = $("input#phrase").val();
    console.log(phrase);

    var result;
      if (isNaN(phrase) === false) {
        result = phrase;
      } else if (phrase === "a" || "i" || "e"|| "u" || "o") {
        result = phrase + "ay";
      } else if (phrase.includes("a" || "i" || "e"|| "u" || "o", 0)) {
        result = phrase + "ay";
      }

    $("#piglatinoutput").show();
    $(".piglatin").text(result);
  });
});
