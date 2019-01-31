var $tableList = $("#tableList");
var $waitList = $("#waitList");
var $clearBtn = $("#clear");

var runTableQuery = function() {
  $.ajax({
    url: "/api/tables",
    method: "GET"
  }).then(function(tableData) {
    // Loop through and display each of the customers
    for (var i = 0; i < tableData.length; i++) {
      var $listItem = $("<li class='list-group-item mt-4'>");

      $listItem.append(
        $("<h2>").text("Table #" + (i + 1)),
        $("<hr>"),
        $("<h2>").text("ID: " + tableData[i].id),
        $("<h2>").text("Name: " + tableData[i].name),
        $("<h2>").text("Email: " + tableData[i].email),
        $("<h2>").text("Phone: " + tableData[i].phone)
      );

      $tableList.append($listItem);
    }
  });
};

var runWaitListQuery = function() {
  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({
    url: "/api/waitlist",
    method: "GET"
  }).then(function(waitData) {
    // Here we then log the waitlistData to console, where it will show up as an object.
    console.log(waitData);
    console.log("------------------------------------");

    // Loop through and display each of the customers
    for (var i = 0; i < waitData.length; i++) {
      // Then display the fields in the HTML (Section Name, Date, URL)
      var $listItem = $("<li class='list-group-item mt-4'>");

      $listItem.append(
        $("<h2>").text("Table #" + (i + 1)),
        $("<hr>"),
        $("<h2>").text("ID: " + waitData[i].id),
        $("<h2>").text("Name: " + waitData[i].name),
        $("<h2>").text("Email: " + waitData[i].email),
        $("<h2>").text("Phone: " + waitData[i].phone)
      );

      $waitList.append($listItem);
    }
  });
};

// This function resets all of the data in our tables. This is intended to let you restart a demo.
var clearTable = function() {
  $.ajax({
    url: "/api/tables",
    method: "DELETE" 
  }).then(function() {
    $("#waitList").empty();
    $("#tableList").empty();
    console.log("Tables cleared!");
  });
};


$clearBtn.on("click", clearTable);

// Run Queries!
// ==========================================
runTableQuery();
runWaitListQuery();
