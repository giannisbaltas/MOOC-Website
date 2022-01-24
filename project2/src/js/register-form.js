import {User} from "./User.js";

let _form = null;

function getForm() {
    if (_form == null) {
        _form = document.getElementById("register-form");
    }

    return _form
}

const fname     = document.getElementById("fname");
const lname     = document.getElementById("lname");
const age       = document.getElementById("age");
const address   = document.getElementById("address");
const email     = document.getElementById("email");
const pass      = document.getElementById("password");
const r_pass    = document.getElementById("r-password");

const highschool = document.getElementById("highschool");
const university = document.getElementById("university");

document.getElementById("register-btn").addEventListener ("click", validateAndSubmitForm, false);


function validateAndSubmitForm() {
   if (validateForm()) {
       makeHttpRequest();
   } 
}

function validateForm() {
    r_pass.setCustomValidity("");
    
    if (r_pass.value.trim() !== pass.value.trim()) {
        r_pass.setCustomValidity("Passwords must match");
    }
    
    if (getForm().reportValidity()) {
        document.getElementById("register-form").style.display = "none";
        document.getElementById("register-btn").style.display = "none";
        document.getElementById("after-submit-area").style.display = "block";

        return true;
    } else {
        return false;
    }
}

function makeHttpRequest() {
    let education = "";
    if (highschool.checked) {
        education = "highschool"
    } else if (university.checked) {
        education = "university";
    } else {
        education = "master's";
    }

    const user = new User(fname.value, lname.value, age.value, address.value, education, email.value, pass.value, r_pass.value);
    console.log(user);

    fetch(
        'http://127.0.0.1:5500/api/register',
        {
            method: 'POST',
            headers: {
                'Conent-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(user)
        }
    ).then(response => (console.log(response)))
     .catch(err => console.log(err))
    
    //POST HTTP request ...
}