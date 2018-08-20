// business logic
function Place(name, country, landmark, yearVisited, note) {
  this.name = name;
  this.country = country;
  this.landmark = landmark;
  this.yearVisited = yearVisited;
  this.note = note;
}

Place.prototype.title = function() {
  return this.name + ", " + this.country;
}



// user logic
$(document).ready(function() {
  $("form#add-place").submit(function(event) {
    event.preventDefault();


    var inputName = $("#name").val();
    var inputCountry = $("#country").val();
    var inputLandmark = $("#landmark").val();
    var inputYearVisited = $("#yearVisited").val();
    var inputNote = $("#note").val();



    var newPlace = new Place(inputName, inputCountry, inputLandmark, inputYearVisited, inputNote);

    $("ul#places").append("<li><span class='eachPlace'>" + newPlace.title() + "</span></li>");


    $(".eachPlace").last().click(function(){
      $("#show-place").hide();
      $("#show-place").slideDown();
      $("#show-place h2").text(newPlace.title());
      $(".landmark").text(newPlace.landmark);
      $(".yearVisited").text(newPlace.yearVisited);
      $(".note").text(newPlace.note);

    });

    var inputs = ["name", "country", "yearVisited", "note", "landmark"];

    inputs.forEach(function(input) {
      $('input#' + input).val("");
    });

  });

});
