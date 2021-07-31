
/* **********************
 *** DISPLAY BY USER *** 
*********************** */
/*
function postJournal() {
    console.log('postJournal Function Called');
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let entry = document.getElementById('entry').value;
    const accessToken = localStorage.getItem('sessionToken');
    let newEntry = { journal: {title: title, date: date, entry: entry } };
    console.log(newEntry)
    fetch('http://localhost:3000/journal/create', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }),
        body: JSON.stringify(newEntry)
    })
    .then(response => {
        console.log(response);
        displayMine();
    })
    .catch(err => console.log(err));
}
*/
function postJournal() {
    console.log("postJournal Function Called");
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let entry = document.getElementById("entry").value;
  
    let bodyObj = {
      journal: {
        title: title,
        date: date,
        entry: entry,
      },
    };
  
    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("SessionToken"));
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify(bodyObj);
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("http://localhost:3000/journal/create", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }


/* **********************
 *** DISPLAY BY USER *** 
*********************** */
function editJournal(postId) {
    console.log('editJournal Function Called');
}

/* **********************
 *** DISPLAY BY USER *** 
*********************** */
function deleteJournal() {
    console.log('deleteJournal Function Called');
}