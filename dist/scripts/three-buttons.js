// Text Fields
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

// Flags
const ADDRESS_FLAG = "addressFlag";
const TELEPHONE_FLAG = "telephoneFlag";
const EMAIL_FLAG = "emailFlag";

let flags = {
  [ADDRESS_FLAG]: false,
  [TELEPHONE_FLAG]: false,
  [EMAIL_FLAG]: false
};

const toggleCommercialDetails = id => {
  const { address, telephone, email } = btnIDs;

  switch (id) {
    case address:
      showDetails({ flag: ADDRESS_FLAG, index: 0, text: officeAddress });
      break;
    case telephone:
      showDetails({ flag: TELEPHONE_FLAG, index: 1, text: phoneNumber });
      break;
    case email:
      showDetails({ flag: EMAIL_FLAG, index: 2, text: emailAddress });
  }
};

const showDetails = ({ flag, index, text }) => {
  flags[flag] = !flags[flag];
  buttons[index].innerText = flags[flag] ? HIDE : SHOW;
  fields[index].innerText = flags[flag] ? text : INITIAL;
};
