// Fields
const commercialAddress = document.getElementById("commercial-address");
const commercialTelephone = document.getElementById("commercial-telephone");
const commercialEmail = document.getElementById("commercial-email");

const fields = [commercialAddress, commercialTelephone, commercialEmail];

fields.forEach(field => (field.innerText = INITIAL));

// Buttons
const commercialAddressBtn = document.getElementById("commercial-address-btn");
const commercialTelephoneBtn = document.getElementById(
  "commercial-telephone-btn"
);
const commercialEmailBtn = document.getElementById("commercial-email-btn");

const buttons = [
  commercialAddressBtn,
  commercialTelephoneBtn,
  commercialEmailBtn
];

const SHOW = "Show";
const HIDE = "Hide";

let addressFlag = false;
let telephoneFlag = false;
let emailFlag = false;

const toggleCommercialDetails = id => {
  console.log("You clicke btn:", id);
};

buttons.forEach(btn => {
  btn.innerText = SHOW;
  console.log(btn.id);
  btn.onclick = () => toggleCommercialDetails(btn.id);
});
