// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// const descriptionEl = $('.description');
// const startButtonEl = $('.saveBtn');
// const hour9El = $('#hour-9');
// const currentDayEl = $('#currentDay');
const today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
const timeBlock = $('.hour');
const timeNow =(today.format('H'));

console.log(today);
console.log(timeBlock)
console.log(timeNow)



// $(function () { 



  // function displayTime(){
  //   var today = dayjs();
  //   $('#currentDay').text(today.format('MMM D, YYYY'));
  //   }
  //   console.log(today);
  //   setInterval(displayTime,1000);

    $.each(timeBlock, function (i, hour){
      var hourId = parseInt($(this).attr("id"));
      console.log(hourId);
      if (hourId == timeNow) {
        $(this).next().addClass("present");
    
      }
      else if  (hourId < timeNow) {
        $(this).next().addClass("past");
      }
      else if (hourId > timeNow) {
        $(this).next().addClass("future");
      }
      });

      $(".saveBtn").on("click", function (event) {
        const textEl = event.target.parentElement.previousElementSibling.children[1].value;
        localStorage.setItem(event.target.attributes[1].value, textEl);
      });

      $(document).ready(function() {
        if (localStorage["9am"] !== null && localStorage["9am"] !==undefined){
          const nineAm = $("<p>" + localStorage["9am"] + "</p>");
          $("#9").append(nineAm[0].innerText);
        }else{
          ("");
        } 
          if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
            var tenAm = $("<p>" + localStorage["10am"] + "</p>");
            $("#10").append(tenAm[0].innerText);
          } else {
            ("");
          }
          if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
            var elevenAm = $("<p>" + localStorage["11am"] + "</p>");
            $("#11").append(elevenAm[0].innerText);
          } else {
            ("");
          }
          if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
            var twelvePm = $("<p>" + localStorage["12pm"] + "</p>");
            $("#12").append(twelvePm[0].innerText);
          } else {
            ("");
          }
          if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
            var onePm = $("<p>" + localStorage["1pm"] + "</p>");
            $("#13").append(onePm[0].innerText);
          } else {
            ("");
          }
          if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
            var twoPm = $("<p>" + localStorage["2pm"] + "</p>");
            $("#14").append(twoPm[0].innerText);
          } else {
            ("");
          }
          if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
            var threePm = $("<p>" + localStorage["3pm"] + "</p>");
            $("#15").append(threePm[0].innerText);
          } else {
            ("");
          }
          if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
            var fourPm = $("<p>" + localStorage["4pm"] + "</p>");
            $("#16").append(fourPm[0].innerText);
          } else {
            ("");
          }
          if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
            var fivePm = $("<p>" + localStorage["5pm"] + "</p>");
            $("#17").append(fivePm[0].innerText);
          } else {
            ("");
          }
        });
  // TODbO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

