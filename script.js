// Get the button
let mybutton = document.getElementById("move_up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$("img").on('click',function(){
  var style = $(this).attr('data-id');
  $('.hideDivs').hide();
  $('#'+style).show();
});

function changeLanguage() {
  var selectedLanguage = document.getElementById("language-select").value;

  // Hide/show content based on the selected language
  if (selectedLanguage === "english") {
    document.getElementById("welcome-english").style.display = "block";
    document.getElementById("welcome-nederlands").style.display = "none";
    document.getElementById("info-english").style.display = "block";
    document.getElementById("info-nederlands").style.display = "none";
  } else if (selectedLanguage === "nederlands") {
    document.getElementById("welcome-english").style.display = "none";
    document.getElementById("welcome-nederlands").style.display = "block";
    document.getElementById("info-english").style.display = "none";
    document.getElementById("info-nederlands").style.display = "block";
  }

  console.log("Selected Language: " + selectedLanguage);
}

const notice = document.getElementById("fullscreen-notice");

// Hide the overlay when clicked
notice.addEventListener("click", () => {
  notice.style.display = "none";
});
