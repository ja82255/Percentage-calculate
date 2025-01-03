$(document).ready(function () {
  $("#calculate").click(function () {
    var student1 = parseFloat($("#student1").val());
    var student2 = parseFloat($("#student2").val());
    var student3 = parseFloat($("#student3").val());

    var total = student1 + student2 + student3;
    var average = total / 3;

    $("#progressBar")
      .animate(
        {
          width: average + "%",
        },
        2000
      )
      .attr("aria-valuenow", average)
      .text(average.toFixed(0) + "%");
  });
});
