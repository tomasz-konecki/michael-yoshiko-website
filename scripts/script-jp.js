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

// The 'Contact details' button handler
document.addEventListener("DOMContentLoaded", () => {
  const officeAddress = "83 Cecil Road, Selly Park, Birmingham B29 7QQ";
  const emailAddress = "m.and.y.translations@gmail.com";
  const phoneNumber = "+44 780 9905";
  const INITIAL = "XXX";
  const SEE_DETAILS = "Click to see contact details";
  const HIDE_DETAILS = "Click to hide contact details";

  let detailsShown = false;

  const contactDetails = [
    document.getElementById("contact-office-address"),
    document.getElementById("contact-email-address"),
    document.getElementById("contact-telephone-number")
  ];

  const detailsButton = document.getElementById("contact-details-btn");
  detailsButton.innerText = SEE_DETAILS;
  detailsButton.onclick = () => toggleDetails();

  contactDetails.forEach(item => (item.innerText = INITIAL));

  const toggleDetails = () => {
    detailsShown = !detailsShown;
    detailsButton.innerText = !detailsShown ? SEE_DETAILS : HIDE_DETAILS;

    contactDetails[0].innerText = detailsShown ? officeAddress : INITIAL;
    contactDetails[1].innerHTML = detailsShown
      ? `<a href="mailto:${emailAddress}" target="_top">${emailAddress}</a>`
      : INITIAL;
    contactDetails[2].innerText = detailsShown ? phoneNumber : INITIAL;
  };
});
