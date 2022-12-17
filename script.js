var email = document.getElementById("email")
var password = document.getElementById("password")
var p1 = document.getElementsByTagName("p1")[0]
var p2 = document.getElementsByTagName("p2")[0]
var p3 = document.getElementsByTagName("p3")[0]
var submitBtn = document.getElementsByTagName("button")[0]

var checkGood2go1 = "false"
var checkGood2go2 = "false"

// if any of the validation is incorrect, "All good to go" text will not be printed
// if "All good to go" text will not be printed, user won't be able to submit the values


// we are checking the email validation
function changeEmail() {
    if (email.value.length <= 3) {
        p1.style.display = 'block'
        p3.style.display = 'none'
        checkGood2go1 = "false"
    }
    else if (email.value.indexOf('@') == -1) {
        p1.style.display = 'block'
        p3.style.display = 'none'
        checkGood2go1 = "false"
    }
    else if (email.value.indexOf('.') == -1) {
        p1.style.display = 'block'
        p3.style.display = 'none'
        checkGood2go1 = "false"
    }

    else {
        p1.style.display = 'none'
        checkGood2go1 = "true"
        if (checkGood2go2 == "true") {
            p3.style.display = 'block'
        }
    }
}

email.addEventListener('change', changeEmail)

//we are checking the password validation
function changePassword() {
    if (password.value.length <= 8) {
        p2.style.display = 'block'
        p3.style.display = 'none'
        checkGood2go2 = "false"
    }

    else {
        p2.style.display = 'none'
        checkGood2go2 = "true"
        if (checkGood2go1 == "true") {
            p3.style.display = 'block'
        }
    }
}

password.addEventListener('change', changePassword)

//this function is to check the submit button
function submitButton() {
    // sumbit button will show confirmation window only if all the validations were right
    if (p3.style.display == 'block') {
        let text = "Are you sure you want to submit:";
        if (confirm(text) == true) {
            alert("Successful SignUp!")
            // reloading the page after successfully submitting the values and final confirmaton alert
            window.location.reload();
        }
        else {
            window.location.reload();
        }
    }
}

submitBtn.addEventListener('click', submitButton)



