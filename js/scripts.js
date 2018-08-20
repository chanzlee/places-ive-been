// business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}



// user logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputFirst = $("#new-first-name").val();
    var inputLast = $("#new-last-name").val();

    var newContact = new Contact(inputFirst, inputLast);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");


    $(".contact").last().click(function(){
      $("#show-contact").hide();
      $("#show-contact").slideDown();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

    });
    $("input#new-last-name").val("");
    $("input#new-first-name").val("");
  });

});
