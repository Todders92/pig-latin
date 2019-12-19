// Back-end logic:



// User interface logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var phrase = $("input#phrase").val();
    console.log(phrase);

    var result;
      if (parseInt(phrase) != "NaN") {
        result = phrase;
      }

    $("#piglatinoutput").show();
    $(".piglatin").text(result);
  });
});
