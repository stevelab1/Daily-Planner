$(document).ready(function () {
  //   Display the current day at the top of the calender when a user opens the planner.
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

  //   Present timeblocks for standard business hours when the user scrolls down.
  for (let i = 9; i < 19; i++) {
    // create a row
    var row = $(`<div data-time=${i} id='${i}' class="row">`);

    // create a column
    var col1 = $(
      '<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + "</p>"
    );

    //create column 2
    var col2 = $(
      `<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`
    );

    //create column 3
    var col3 = $(
      `<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`
    );

    // append col to row
    row.append(col1);
    row.append(col2);
    row.append(col3);

    // last step add rows to container
    $(".container").append(row);
  }
});
