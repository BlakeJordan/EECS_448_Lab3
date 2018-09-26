function validate() {
    let password = document.getElementsByName("password")[0].value;
    let password2 = document.getElementsByName("password2")[0].value;
    console.log(password);
    console.log(password2);
    if (password != password2) {
        alert('Passwords do not match');
    }
    else if(password.length < 8) {
        alert('Passwords must be at least 8 characters long');
    }
    else {
        alert('Password Validated!');
    }
}