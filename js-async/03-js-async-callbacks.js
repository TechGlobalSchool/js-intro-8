/*

Login function
1. enter your username and password and click on login button
2. validation will happen
3. login
*/

function enterCreds() {
    console.log('Credentials entered!');
}

function validateCreds(callbackfn) {
    setTimeout(() => {
        console.log('Credentials are validated!');
        callbackfn();
    }, 5000);
}

function login() {
    console.log('You are logged in!');
}



enterCreds();
validateCreds(() => {
    login();
}); // happens in 5 seconds

// Hard pause - not preferred
// setTimeout(() => {
//     login();
// }, 5000);
