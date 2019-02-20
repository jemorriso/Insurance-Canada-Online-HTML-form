var smoker;
var otherInsurance;

// when user fills out smoking status, grab the value to use for control flow
$("#smoker").on("change", function() {
  smoker = ($("input[name='smoker']:checked").val() == 'yes');
});

$("#otherInsurance").on("change", function() {
  otherInsurance = ($("input[name='otherInsurance']:checked").val() == 'yes');
});

// put event listener on each section so that if yes is ever selected we know not to go to the next section
$("#section-two").on("change", function() {
  otherInsurance = ($("input[name='otherInsurance']:checked").val() == 'yes');
});

$(".section-submit").on("click", function() {
  var section = $(this).parent();
  // hide the section
  section.hide();
  //figure out if next section should be shown
  showNextSection(section)
});

function showNextSection(currSection) {
  // get array of sections
  var sectionArray = $(".section");
  var dex = sectionArray.index(currSection);
  var nextSection = sectionArray.eq(dex+1);

  // if any questions were answered yes, then don't show the next section
  // select all checked radion buttons in current section and iterate
  var shouldShow = true;

  // always show section 2
  if (dex != 0) {
    $('#'+currSection.attr('id') + " input:radio:checked").each(function() {

      if ($(this).val() == 'yes') {
        shouldShow = false;
      }
    });
  }

  if (shouldShow) {
    // consider ajax load from file - use object (dictionary) to store files for each section index<->file
    nextSection.toggle();
  } 
  // show submit button if no more questions to answer
  else {
    sectionArray.eq(sectionArray.length-1).toggle();
  }
}

// function completedSectionAlert() {
//   if (smoker && otherInsurance) {

//   }
// };

// there is a section-submit for each section
// var sectionArray = $(".section-submit");
// sectionArray.on("click", function() {
//   // get the index of this section
//   var dex = sectionArray.index(this);
//   // hide this section and show the next section
//   $
//   sectionArray.eq(dex).toggle();
//   sectionArray.eq(dex+1).toggle();
//   console.log(sectionArray);
//   console.log(this);
//   console.log(dex);
// })