// Fields
const commercialAddress = document.getElementById("commercial-address");
const commercialTelephone = document.getElementById("commercial-telephone");
const commercialEmail = document.getElementById("commercial-email");

const fields = [commercialAddress, commercialTelephone, commercialEmail];

fields.forEach(field => (field.innerText = INITIAL));

// Buttons
const SHOW = "表示する";
const HIDE = "表示を閉じる";

btnIDs = {
  address: "commercial-address-btn",
  telephone: "commercial-telephone-btn",
  email: "commercial-email-btn"
};

const commercialAddressBtn = document.getElementById(btnIDs.address);
const commercialTelephoneBtn = document.getElementById(btnIDs.telephone);
const commercialEmailBtn = document.getElementById(btnIDs.email);

const buttons = [
  commercialAddressBtn,
  commercialTelephoneBtn,
  commercialEmailBtn
];

buttons.forEach(btn => {
  btn.innerText = SHOW;
  btn.onclick = () => toggleCommercialDetails(btn.id);
});

let addressFlag = false;
let telephoneFlag = false;
let emailFlag = false;

const toggleCommercialDetails = id => {
  const { address, telephone, email } = btnIDs;

  switch (id) {
    case address:
      addressFlag = !addressFlag;
      buttons[0].innerText = addressFlag ? HIDE : SHOW;
      fields[0].innerText = addressFlag ? officeAddress : INITIAL;
      break;
    case telephone:
      telephoneFlag = !telephoneFlag;
      buttons[1].innerText = telephoneFlag ? HIDE : SHOW;
      fields[1].innerText = telephoneFlag ? phoneNumber : INITIAL;
      break;
    case email:
      emailFlag = !emailFlag;
      buttons[2].innerText = emailFlag ? HIDE : SHOW;
      fields[2].innerText = emailFlag ? emailAddress : INITIAL;
  }
};
