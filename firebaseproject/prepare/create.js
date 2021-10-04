document.querySelector("#submitBtn").addEventListener("click", function() {
  let name = document.querySelector("#name").value;
  let blogTitle = document.querySelector("#title").value;
  let blogContent = document.querySelector("#content").value;

  if (
    name === "" ||
    blogTitle === "" ||
    blogContent === "" 
  ) {
    alert("Fields Empty");
  } else {
    db.collection("posts")
      .doc()
      .set({
        name: name,
        title: blogTitle,
        content: blogContent
      });
  }
});

