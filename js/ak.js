const careerStart = new Date(2018, 5, 20);
const comp1Start = new Date(2018, 5, 20);
const comp1End = new Date(2020, 9, 15);
const comp2Start = new Date(2020, 9, 19);
const comp2End = new Date(2021, 11, 1);
const comp3Start = new Date(2021, 11, 6);
const comp3End = new Date(2022, 11, 31);
const comp4Start = new Date(2023, 0, 16);

$(document).ready(function () {
  document.getElementById("txtExperience").innerHTML = getDuration(careerStart);
  document.getElementById("txtDelExp").innerHTML = getDuration(comp4Start);
  document.getElementById("txtFISExp").innerHTML = getDuration(
    comp3Start,
    comp3End
  );
  document.getElementById("txtCSSExp").innerHTML = getDuration(
    comp2Start,
    comp2End
  );
  document.getElementById("txtVCXExp").innerHTML = getDuration(
    comp1Start,
    comp1End
  );
});

$("#feedbackForm").on("submit", function (e) {
  e.preventDefault();
});

function getDuration(startDate, endDate = new Date()) {
    let duratinInMs = moment.duration(
      moment(endDate).diff(startDate),
      "milliseconds"
    );
  let duration = moment
    .duration(moment(endDate).diff(startDate), "milliseconds")
    .as("years")
    .toFixed(1);
  if (duration < 1) {
    let duration = duratinInMs.as("months").toFixed(0);
    return "(" + duration + " months)";
  }
  return "(" + duration + " years)";
}
