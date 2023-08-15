// step-1: add click event handler with the submit button
document.querySelector("#btn-login").addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.querySelector("#user-email");
    const email = emailField.value;
    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.querySelector("#user-password");
    const password = passwordField.value;

    // DANGER: DO NOT VERIFY email password on the client side
    // step-4: verify email and password and check whether valid user or not
    if(email === 'pola@baap.com' && password === 'secret') {
        window.location.href = './bank.html';
    }
    else {
        alert('Wrong email-password combination');
        window.location.reload();
    }
})