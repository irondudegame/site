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
