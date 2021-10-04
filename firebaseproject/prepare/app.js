// Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyBIDCflQUABRXkDrdc-xhTmDftYTK6BJm4",
  authDomain: "green-diagram-314011.firebaseapp.com",
  databaseURL: "https://green-diagram-314011-default-rtdb.firebaseio.com",
  projectId: "green-diagram-314011",
  storageBucket: "green-diagram-314011.appspot.com",
  messagingSenderId: "975258160214",
  appId: "1:975258160214:web:41282c5c8389a08b543ff7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let postCollection = document.querySelector("#posts-collection");

const db = firebase.firestore();

function createPost(name, title, content) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-4");

  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let small = document.createElement("small");

  h2.textContent = title;
  small.textContent = name;
  p.textContent = content;

  div.appendChild(h2);
  div.appendChild(small);
  div.appendChild(p);

  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().name,
          docs.data().title,
          docs.data().content
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();
