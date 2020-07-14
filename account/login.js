var logins = [];
var passwords = [];

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var success = document.getElementById("success");
    
    var found = false;
    for (var i=0; i < logins.length; i++) {
        if (username = logins[i]) {
            found = true;
            if (password = passwords[i]) {
                // correct
            }
            else {
                success.innerHTML = "Incorrect password!";
            }
        }
    }
    
    if (found == false) {
        success.innerHTML = "That username doesn't exist!";
    }
}

function signup() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var success = document.getElementById("success");
    
    if (username.length < 4) {
        success.innerHTML = "Your username must be longer than 3 characters!";
    }
    else if (password.length < 6) {
        success.innerHTML = "Your password must be longer than 5 characters!";
    }
    else {
        var taken = false;
        for (var i=0; i < logins.length; i++) {
            if (username = logins[i]) {
                var taken = true;
                success.innerHTML = "That username is taken!";
            }
        }
        if (taken == false) {
            var link = "mailto:irondude.game@gmail.com?subject=DioBraando Signup Request&body=Username: " + username + "%0D%0APassword: " + password;
            success.innerHTML = "Please click <a href='" + link + "'>here</a> and click send to finish signing up. If your account was accepted, we'll email you back.";
        }
    }
}
