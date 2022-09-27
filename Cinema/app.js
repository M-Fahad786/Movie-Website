// DECLARING EMPTY ARRAY
let input_values = [];
let values;

// TARGETING INPUTS
let userName = document.getElementById("username");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let userConfirm = document.getElementById("confirm-pass");
let userNumber = document.getElementById("number");
let profile = document.getElementById("pic");

// CONSTRUCTOR
function Input(name, email, password, confirmPass, phoneNum, pic) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.confirmPass = confirmPass;
  this.phoneNum = phoneNum;
  this.Pic = pic;
}

// FUNCTION ON SUBMIT
function onLogin() {
  // FORM VALIDATION ON EMPTY VALUES
  if (userName.value === "") {
    let user_para = document.getElementById("user-para");
    user_para.style.display = "block";
    userName.style.border = "1px solid red";
  } else {
    if (userEmail.value === "") {
      let email_para = document.getElementById("email-para");
      email_para.style.display = "block";
      userEmail.style.border = "1px solid red";
    } else {
      if (userPassword.value === "") {
        let pass_para = document.getElementById("pass-para");
        pass_para.style.display = "block";
        userPassword.style.border = "1px solid red";
      } else {
        if (userConfirm.value === "") {
          let confirm_para = document.getElementById("confirm-para");
          confirm_para.style.display = "block";
          userConfirm.style.border = "1px solid red";
        } else {
          if (userNumber.value === "") {
            let num_para = document.getElementById("num-para");
            num_para.style.display = "block";
            userNumber.style.border = "1px solid red";
          } else {
            if (profile.value === "") {
              let profile_para = document.getElementById("pic-para");
              profile_para.style.display = "block";
              profile.style.border = "1px solid red";
            } else {
              values = new Input(
                userName.value,
                userEmail.value,
                userPassword.value,
                userConfirm.value,
                profile.value
              );
              if (userPassword.value === userConfirm.value) {
                input_values.push(values);
                // STORING ARRAY IN LOCAL STORAGE
                let inp = JSON.stringify(input_values);
                window.localStorage.setItem("input_values", inp);
                let container = document.getElementById("container");
                let sec_container = document.getElementById("sec-container");
                container.style.display = "none";
                sec_container.style.display = "flex";
                container.style.display = "none";
              } else {
                let not_match = document.getElementById("not-match");
                not_match.style.display = "block";
                userConfirm.style.borderColor = "red";
              }
            }
          }
        }
      }
    }
  }
}

// TARGETING INPUT VALUES FORM SEC FORM
let user_value = document.getElementById("user-value");
let email_value = document.getElementById("email-value");
let pass_value = document.getElementById("pass-value");
let conf_value = document.getElementById("conf-value");
// FUNCTION ON LOGIN
function signIn() {
  if (user_value.value === "") {
    let user_error = document.getElementById("user-error");
    user_error.style.display = "block";
    user_value.style.border = "1px solid red";
  } else {
    if (email_value.value === "") {
      let email_error = document.getElementById("email-error");
      email_error.style.display = "block";
      email_value.style.border = "1px solid  red";
    } else {
      if (pass_value === "") {
        let pass_error = document.getElementById("pass-error");
        pass_error.style.display = "block";
        pass_value.style.border = "1px solid red";
      } else {
        if (conf_value === "") {
          let confirm_error = document.getElementById("confirm-error");
          confirm_error.style.display = "block";
          conf_value.style.border = "1px solid red";
        } else {
          let storage = window.localStorage.getItem("input_values");
          let items = JSON.parse(storage);
          for (let key in items) {
            if (user_value.value !== items[0].name) {
              let error = document.getElementById("error");
              error.style.display = "block";
              user_value.style.border = "1px solid red";
            } else {
              if (email_value.value !== items[0].email) {
                let error = document.getElementById("error");
                error.style.display = "block";
                email_value.style.border = "1px solid red";
              } else {
                if (pass_value.value !== items[0].password) {
                  let error = document.getElementById("error");
                  error.style.display = "block";
                  pass_value.style.border = "1px solid red";
                } else {
                  if (conf_value.value !== items[0].confirmPass) {
                    let error = document.getElementById("error");
                    error.style.display = "block";
                    conf_value.style.border = "1px solid red";
                  } else {
                    let prev = localStorage.getItem("input_values");
                    if (prev) {
                      prev = JSON.parse(prev);
                      console.log(prev);
                      let simpleArray = [...prev];
                      let newData = { auth: true };
                      simpleArray.push(newData);
                      localStorage.setItem(
                        "input_values",
                        JSON.stringify(simpleArray)
                      );
                      console.log(simpleArray);
                    }
                    let main_container =
                      document.getElementById("sec-container");
                    main_container.style.display = "none";
                    window.location.replace("./Movie Website/movie.html");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// FORM VALIDATIONS USING ON CHANGE

// ONCHANGE FUNCTIONS
function onName() {
  let user_para = document.getElementById("email-length");
  let user_inp = document.getElementById("username");
  user_para.style.display = "none";
  user_inp.style.borderColor = "green";
}
function onEmail() {
  let email_para = document.getElementById("email-para");
  let email_inp = document.getElementById("email");
  email_para.style.display = "none";
  email_inp.style.borderColor = "green";
}
function onPassword() {
  let pass_para = document.getElementById("pass-para");
  let pass_inp = document.getElementById("password");
  pass_para.style.display = "none";
  pass_inp.style.borderColor = "green";
}
function onConfirm() {
  let confirm_para = document.getElementById("confirm-para");
  let confirm_inp = document.getElementById("confirm-pass");
  confirm_para.style.display = "none";
  confirm_inp.style.borderColor = "green";
}
function onNumber() {
  let num_para = document.getElementById("num-para");
  let num_inp = document.getElementById("number");
  num_para.style.display = "none";
  num_inp.style.borderColor = "green";
}

function onPic() {
  let pic_para = document.getElementById("pic-para");
  let pic_inp = document.getElementById("pic");
  pic_para.style.display = "none";
  pic_inp.style.borderColor = "green";
}

// ONBLUR FUNCTIONS
function userLength() {
  let user_length = document.getElementById("email-length");
  let user_para = document.getElementById("user-para");
  if (userName.value.length >= 5) {
    user_para.style.display = "none";
  } else {
    user_length.style.display = "block";
    userName.style.borderColor = "red";
  }
}

function emailValid() {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let email_valid = document.getElementById("email-valid");
  if (userEmail.value.match(pattern)) {
    email_valid.style.display = "none";
  } else {
    email_valid.style.display = "block";
    userEmail.style.borderColor = "red";
  }
}

function passLength() {
  let pass_length = document.getElementById("pass");
  if (userPassword.value.length >= 8) {
    pass_length.style.display = "none";
  } else {
    pass_length.style.display = "block";
    userPassword.style.borderColor = "red";
  }
}

function confirmLength() {
  let pass_length = document.getElementById("confirm");
  if (userConfirm.value.length >= 8) {
    pass_length.style.display = "none";
  } else {
    pass_length.style.display = "block";
    userConfirm.style.borderColor = "red";
  }
}

function NumLength() {
  let num_length = document.getElementById("num-length");
  let num_para = document.getElementById("num-para");
  if (userNumber.value.length === 11) {
    num_length.style.display = "none";
  } else {
    num_length.style.display = "block";
    userNumber.style.borderColor = "red";
  }
}

// SECOND FORM ON BLUR
function loginForm(event) {
  if (event.value !== "") {
    event.style.borderColor = "green";
    event.nextSibling.nextSibling.style.display = "none";
  }
}
