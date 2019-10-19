// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

const officeAddress = "83 Cecil Road, Selly Park, Birmingham B29 7QQ";
const emailAddress = "m.and.y.translations@gmail.com";
const phoneNumber = "+44 780 9905";
const INITIAL = "";
const SEE_DETAILS = "Click to see contact details";
const SEE_DETAILS_SHORT = "Contact details";
const HIDE_DETAILS = "Click to hide contact details";
const HIDE_DETAILS_SHORT = "Hide details";
const detailsButton = document.getElementById("contact-details-btn");
const body = document.getElementsByTagName("body")[0];
const WIDTH_LIMIT = 750;
const detailsBox = document.getElementById("contact-details");
const DETAILS_BOX_WIDTH = Number(
  window
    .getComputedStyle(detailsBox, null)
    .getPropertyValue("width")
    .substr(0, 3)
);
let detailsShown = false;

detailsButton.innerText =
  DETAILS_BOX_WIDTH > WIDTH_LIMIT ? SEE_DETAILS : SEE_DETAILS_SHORT;

body.onresize = () => handleOnResize();

const handleOnResize = () => {
  const DETAILS_BOX_WIDTH = Number(
    window
      .getComputedStyle(detailsBox, null)
      .getPropertyValue("width")
      .substr(0, 3)
  );

  detailsButton.innerText =
    DETAILS_BOX_WIDTH > WIDTH_LIMIT ? SEE_DETAILS : SEE_DETAILS_SHORT;
};

// The 'Contact details' button handler
const contactDetails = [
  document.getElementById("contact-office-address"),
  document.getElementById("contact-email-address"),
  document.getElementById("contact-telephone-number")
];

detailsButton.onclick = () => toggleDetails();

contactDetails.forEach(item => (item.innerText = INITIAL));

const toggleDetails = () => {
  detailsShown = !detailsShown;
  detailsButton.innerText = !detailsShown
    ? DETAILS_BOX_WIDTH > WIDTH_LIMIT
      ? SEE_DETAILS
      : SEE_DETAILS_SHORT
    : DETAILS_BOX_WIDTH > WIDTH_LIMIT
    ? HIDE_DETAILS
    : HIDE_DETAILS_SHORT;

  contactDetails[0].innerText = detailsShown ? officeAddress : INITIAL;
  contactDetails[1].innerHTML = detailsShown
    ? `<a href="mailto:${emailAddress}" target="_top">${emailAddress}</a>`
    : INITIAL;
  contactDetails[2].innerText = detailsShown ? phoneNumber : INITIAL;
};
