//Stock Accounts

let acounts = {
  "dugghugg@outlook.com": {
    fname: "Sam",
    email: "dugghugg@outlook.com",
    password: "sauce"
  },
  "bigbrainceo@gmail.com": {
    fname: "BBC",
    email: "bigbrainceo@gmail.com",
    password: "smart"
  }
};

//Set the default state

if (localStorage.getItem("accounts") === null) {
  localStorage.signedin = false;
}


//Query The database if it is not empty

if (localStorage.getItem("accounts") != null) {
  let ls = localStorage.getItem("accounts");
  let parse = JSON.parse(ls);

  acounts = parse;
}

//Setting Stock
let settings = "test";

let cont = false;

//Function expression to select elements

const selectElement = s => document.querySelector(s);

//Open the menu on click

selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").style = "right:0;";
  selectElement(".form-container").style = "z-index: -1;";
  selectElement(".men-container").style = "z-index: -1;";
});

selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").style = "right:-26rem;";
  selectElement(".form-container").style = "z-index: 1;";
  selectElement(".men-container").style = "z-index: 1;";
});

//Sign In Checks

const form = document.getElementById("form");
const password = document.getElementById("password");
const email = document.getElementById("email");

function checksignin() {
  check();
  signedin();
}

function check() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    errorstate("bar", "a");
    message("red", "Email Cannot Be Empty", "error1");
    iconchange("red", "good");
  } else if (!isEmail(emailValue)) {
    errorstate("bar", "a");
    message("red", "Email is not proper", "error1");
    iconchange("red", "good");
  } else if (acounts[emailValue] == undefined) {
    errorstate("bar", "a");
    message("red", "Incorrect Email", "error1");
    let ls = localStorage.getItem("accounts");

    iconchange("red", "good");
  } else {
    goodstate("bar", "a");
    message("green", "", "error1");
    iconchange("green", "good");
  }

  if (passwordValue === "") {
    errorstate("bar2", "b");
    message("red", "Password Cannot Be Empty", "error2");
    iconchange("red", "good2");
  } else if (emailValue == "") {
    errorstate("bar2", "b");
    message("red", "Please Enter Your Email", "error2");
    iconchange("red", "good2");
  } else if (acounts[emailValue] == undefined) {
    errorstate("bar2", "b");

    message("red", "Please Fix your Email", "error2");
    iconchange("red", "good2");
  } else if (acounts[emailValue]["password"] != passwordValue) {
    errorstate("bar2", "b");
    message("red", "Incorrect Password", "error2");
    iconchange("red", "good2");
  } else {
    goodstate("bar2", "b");
    message("green", "", "error2");
    iconchange("green", "good2");
    cont = true;
  }
}

function signedin() {
  const emailValue = email.value.trim();
  if (cont === true) {
    document.querySelector("#wrapper").style.display = "none";
    document.querySelector(".menu").style.display = "flex";
    localStorage.setItem("fletter", acounts[emailValue]["fname"][0]);
    localStorage.setItem("namestore", acounts[emailValue]["fname"]);
    localStorage.setItem("emailstore", emailValue);
    localStorage.setItem("passstore", acounts[emailValue]["password"]);
    localStorage.signedin = true;
  }
}

function errorstate(clss, fclass) {
  const font = document.querySelector("." + fclass);
  const select = "." + clss;
  const element = document.querySelector(select);
  font.style = "color: red;";
  element.style = "background-color: 	#FF6347;";
}

function goodstate(clss, fclass) {
  const font = document.querySelector("." + fclass);
  const select = "." + clss;
  const element = document.querySelector(select);
  element.style = "background-color: 	green;";
  font.style = "color: green;";
}

function message(state, message, clss, iclass) {
  const select = "." + clss;
  const element = document.querySelector(select);

  if (state === "green") {
    element.style = "visibility: hidden;";
  } else {
    element.style = "color: red; visibility: visible;";

    element.textContent = message;
  }
}

function iconchange(state, class1) {
  const icon = document.querySelector("." + class1);
  if (state === "green") {
    icon.style = "color: green; visibility: visible;";
  } else {
    icon.style = "color: green; visibility: hidden;";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

/*if(acounts["bharadwaj.duggaraju@outlook.com"] === undefined) {
  alert("youuu")
} else {
  alert("booo")
}*/

//Sign Up Checks
const formv2 = document.getElementById("formv2");
const passwordv2 = document.getElementById("passwordv2");
const emailv2 = document.getElementById("emailv2");
const password2 = document.getElementById("password2");
const name = document.getElementById("name");

let egood = false;
let ugood = false;
let passgood = false;
let pass2good = false;

function checksignup() {
  checks2();
  readytocontinue();
}

function checks2() {
  const passv2value = passwordv2.value;
  const emailv2value = emailv2.value;
  const password2value = password2.value;
  const namevalue = name.value;
  if (namevalue == "") {
    errorstate("three", "c");
    message("red", "Name cannot be empty", "error3");
    iconchange("red", "good3");
    ugood = false;
  } else {
    goodstate("three", "c");
    message("green", "", "error3");
    iconchange("green", "good3");
    ugood = true;
  }

  if (emailv2value === "") {
    errorstate("four", "d");
    message("red", "Email Cannot Be Empty", "error4");
    iconchange("red", "good4");
    egood = false;
  } else if (!isEmail(emailv2value)) {
    errorstate("four", "d");
    message("red", "Email is not proper", "error4");
    iconchange("red", "good4");
    egood = false;
  } else if (acounts[emailv2value] != undefined) {
    errorstate("four", "d");
    message("red", "Email is taken", "error4");
    iconchange("red", "good4");
  } else {
    goodstate("four", "d");
    message("green", "", "error4");
    iconchange("green", "good4");
    egood = true;
  }

  if (passv2value === "") {
    errorstate("five", "e");
    message("red", "Password cannot be empty", "error5");
    iconchange("red", "good5");
    passgood = false;
  } else {
    goodstate("five", "e");
    message("green", "", "error5");
    iconchange("green", "good5");
    passgood = true;
  }

  if (password2value === "") {
    errorstate("six", "f");
    message("red", "Password 2 cannot be empty", "error6");
    iconchange("red", "good6");
    pass2good = false;
  } else if (password2value != passv2value) {
    errorstate("six", "f");
    message("red", "Passwords do not match", "error6");
    iconchange("red", "good6");
    pass2good = false;
  } else {
    goodstate("six", "f");
    message("green", "", "error6");
    iconchange("green", "good6");
    pass2good = true;
  }
}

function readytocontinue() {
  const passv2value = passwordv2.value;
  const emailv2value = emailv2.value;
  const password2value = password2.value;
  const namevalue = name.value;
  if (
    egood === true &&
    ugood === true &&
    passgood === true &&
    pass2good === true
  ) {
    let element = {
      fname: namevalue,
      email: emailv2value,
      password: passv2value
    };
    acounts[emailv2value] = element;
    const saccount = JSON.stringify(acounts);

    localStorage.setItem("accounts", saccount);
    document.querySelector("#wrapper").style.display = "none";
    document.querySelector(".menu").style.display = "flex";
    localStorage.setItem("fletter", acounts[emailv2value]["fname"][0]);
    localStorage.setItem("namestore", acounts[emailv2value]["fname"]);
    localStorage.setItem("emailstore", acounts[emailv2value]["email"]);
    localStorage.setItem("passstore", acounts[emailv2value]["password"]);
    localStorage.signedin = true;
  }
}

//Update Information Code

//This runs when the update info button is clicked, takes the info, and changes the defaults
const namechange = document.querySelector(".namechange");
const tit = document.querySelector(".changename");
const changew = document.querySelector(".alerting");

function updatenames() {
  const namechangevalue = namechange.value.trim();
  if (namechangevalue === "") {
    tit.textContent = "Name can't be empty";
    tit.style = "color: red;";
    changew.style.display = "none";
  } else {
    tit.textContent = "Name";
    tit.style = "color: black;";
    changew.style.display = "block";

    acounts[localStorage.emailstore]["fname"] = namechangevalue;
    const saccount = JSON.stringify(acounts);
    localStorage.setItem("accounts", saccount);
    changew.style.display = "block";
    localStorage.fletter = namechangevalue[0];
    localStorage.namestore = namechangevalue;
    const item = localStorage.fletter;
    const out = document.querySelector(".signout");
    out.textContent = item;
    out.style =
      "border: 1px solid black; border-radius: 50%; padding: 0.5rem 1rem;";
    document.querySelector(".namechange").placeholder = localStorage.namestore;
    document.querySelector(".inserts").textContent = localStorage.emailstore;
  }
}

//This runs when the update email is clicked
const emailchange = document.querySelector(".emailchange");
const emailtitle = document.querySelector(".changeemail");
const passwordcheck = document.querySelector(".passcheck");
const passwordtitle = document.querySelector(".changecheck");
const emailalert = document.querySelector(".femail");

function updateemails() {
  const emailchangevalue = emailchange.value.trim();
  const passwordcheckvalue = passwordcheck.value.trim();
  let emailmore = false;
  let passtrue = false;

  if (emailchangevalue == "") {
    emailtitle.textContent = "Email Cannot be Empty";
    emailtitle.style = "color: red; margin-top: 5rem;";
    emailmore = false;
  } else if (!isEmail(emailchangevalue)) {
    emailtitle.textContent = "Email is not proper";
    emailtitle.style = "color: red; margin-top: 5rem;";
  } else if (acounts[emailchangevalue] != undefined) {
    emailtitle.textContent = "Email is taken";
    emailtitle.style = "color: red; margin-top: 5rem;";
  } else {
    emailtitle.textContent = "New Email Address";
    emailtitle.style = "color: black; margin-top: 5rem;";

    emailmore = true;
  }
  if (passwordcheckvalue != acounts[localStorage.emailstore]["password"]) {
    passwordtitle.textContent = "Password is Incorrect";
    passwordtitle.style = "color: red; margin-top: 5rem;";
    passtrue = false;
  } else {
    passwordtitle.textContent = "Current Password";
    passwordtitle.style = "color: black; margin-top: 5rem;";
    passtrue = true;
  }

  //If both the email is not empty and the password is correct
  if (passtrue === true && emailmore === true) {
    emailalert.style.display = "block";
    const save = localStorage.emailstore;

    delete acounts[save];

    localStorage.emailstore = emailchangevalue;
    let element = {
      fname: localStorage.namestore,
      email: localStorage.emailstore,
      password: localStorage.passstore
    };
    acounts[localStorage.emailstore] = element;
    const saccount = JSON.stringify(acounts);

    localStorage.setItem("accounts", saccount);
    document.querySelector(".inserts").textContent = localStorage.emailstore;
    document.querySelector(".emailchange").placeholder =
      localStorage.emailstore;
  } else {
    emailalert.style.display = "none";
  }
}

//This runs when change password

function changepass() {
  const passinput = prompt("Current Password");

  if (passinput === acounts[localStorage.emailstore]["password"]) {
    const newpass = prompt("New Password");

    acounts[localStorage.emailstore]["password"] = newpass;
    localStorage.passstore = newpass;
    const saccount = JSON.stringify(acounts);
    localStorage.setItem("accounts", saccount);
    alert("Password Changed");
  } else {
    alert("Incorrect Password");
  }
}

//This deletes the account

function deleteaccount() {
  const tocontinue = prompt(
    "Do you want to delete your account. Y for yes, N for no. Either Way you will be logged out for security reasons."
  );
  if (tocontinue === "Y" || tocontinue === "y") {
    delete acounts[localStorage.emailstore];
    const saccount = JSON.stringify(acounts);
    localStorage.setItem("accounts", saccount);
    alert("Account deleted. Signing you out.");
    localStorage.signedin = false;
  } else {
    alert("Account not deleted. Signing you out for security reasons.");
    localStorage.signedin = false;
  }
}

//Runs when profile is clicked
const profile = document.querySelector(".signout");
const outs = document.querySelector(".outs");
function profileclick() {
  profile.style.display = "none";
  outs.style.display = "block";
}

function outclick() {
  profile.style.display = "block";
  outs.style.display = "none";
}
//This runs for contact form on home page abd  for the Contact Form on Customer Support

function saysubmit() {
  alert("Your information has been submitted. Thanks!");
}

//Home nav

function clickedh() {
  alert("ARE YOU SURE YOU WANT TO SIGN OUT AND GO HOME");
  localStorage.signedin = false;
}
