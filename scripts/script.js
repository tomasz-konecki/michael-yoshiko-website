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
  const officeAddress = "1 Baker Street, W1U 8ED London";
  const emailAddress = "example@example.com";
  const phoneNumber = "123 456 7890";
  const initial = "XXX";
  let detailsShown = false;

  const contactDetails = [
    document.getElementById("contact-office-address"),
    document.getElementById("contact-email-address"),
    document.getElementById("contact-telephone-number")
  ];

  const detailsButton = document.getElementById("contact-details-btn");
  detailsButton.innerText = "Click to see contact details";
  detailsButton.onclick = () => toggleDetails();

  contactDetails.forEach(item => (item.innerText = initial));

  const toggleDetails = () => {
    detailsShown = !detailsShown;
    detailsButton.innerText = !detailsShown
      ? "Click to see contact details"
      : "Click to hide contact details";
    contactDetails[0].innerText = detailsShown ? officeAddress : initial;
    contactDetails[1].innerText = detailsShown ? emailAddress : initial;
    contactDetails[2].innerText = detailsShown ? phoneNumber : initial;
  };
});
