var $submitBtn = $(".submit");

var handleSubmitClick = function(event) {
  event.preventDefault();

  // Get reservation info from the form
  var newReservation = {
    name: $("#reserve-name").val().trim(),
    phone: $("#reserve-phone").val().trim(),
    email: $("#reserve-email").val().trim()
  };

  // POST the reservation to "/api.tables"
  $.ajax({
    url: "/api/tables",
    method: "POST",
    data: newReservation
  }).then(function(data) {
    // If a table is available... tell user they are booked.
    if (data) {
      alert("Yay! You are officially booked!");
    }

    // If a table is available... tell user they on the waiting list.
    else {
      alert("Sorry you are on the wait list");
    }

    // Clear the form after submitting
    $("#reserve-name").val("");
    $("#reserve-phone").val("");
    $("#reserve-email").val("");
    }
  );
};

// Run handleSubmitClick whenever the form is submitted
$submitBtn.on("click", handleSubmitClick);
