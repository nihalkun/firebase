function login() {
    let useremail = document.getElementById('email').value;
    let userpassword = document.getElementById('password').value;

  
    const auth = firebase.auth();

    auth.signInWithEmailAndPassword(useremail, userpassword).then(user => {
        location.replace("index.html");
            }).catch(err => {
                alert(err.message);
            });
}

var provider = new firebase.auth.GoogleAuthProvider();

function googlesignIn() {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}

var provider = new firebase.auth.FacebookAuthProvider();

function facebooksignIn() {
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            // ...
        });
}



function signUp() {
    let username = document.getElementById('name').value;
    let useremail = document.getElementById('email').value;
    let userpassword = document.getElementById('password').value;

    const auth = firebase.auth();
 
     firebase.auth().createUserWithEmailAndPassword(username,useremail, userpassword)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            location.replace('index.html');
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}

function logOut(){
    alert("Logged out")
  }