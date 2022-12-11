$(document).ready(function () {
  //   Display the current day at the top of the calender when a user opens the planner.
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
});
