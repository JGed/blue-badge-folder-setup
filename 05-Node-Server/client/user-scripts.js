
/* **********************
 *** USER SIGNUP *** 
*********************** */
function userSignUp() {
    let userEmail = document.getElementById('emailSignup').value;
    let userPass = document.getElementById('pwdSignup').value;
    let newUserData = { user: { email: userEmail, password: userPass } };
    fetch('http://localhost:3000/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(response => {
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
        tokenChecker();
    })
    .catch(err => console.log(err));
}
/* **********************
 *** USER LOGIN *** 
*********************** */
function userLogin() {
    let userEmail = document.getElementById('emailLogin').value;
    let userPass = document.getElementById('pwdLogin').value;
    let userData = { user: { email: userEmail, password: userPass } };
    fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(response => {
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
        tokenChecker();
    })
    .catch(err => console.log(err));
}
/* **********************
 *** USER LOGOUT *** 
*********************** */
function userLogout() {
    localStorage.setItem('SessionToken', undefined);
    tokenChecker();
}
/* **********************
 ***TOKEN CHECKER FUNCTION *** 
*********************** */
function tokenChecker() {
    console.log('tokenChecker Function Called');
     let display = document.getElementById('journals');
     let header = document.createElement('h5');
     let accesssToken =localStorage.getItem('SessionToken');
     let text = 'Login or signup to get started!';

     for (i = 0; i = display.childNodes.length; i++) {
         display.removeChild(display.firstChild);
     }

     if (accesssToken === 'undefined') {
         display.appendChild(header);
         header.textContent = text;
         header.setAttribute('id', 'defaultLogin');
     }
}
tokenChecker();