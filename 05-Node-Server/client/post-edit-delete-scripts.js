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
    const fetch_url = `http://localhost:3000/journal/update/${postId}`;
    const accessToken = localStorage.getItem('SessionToken');

    let card = document.getElementById(postId);
    let input = document.createElement('input');

    if(card.childNodes.length < 2) {
      card.appendChild(input);
      input.setAttribute('type', 'text');
      input.setAttribute('id', 'updatedEntry');
      input.setAttribute('placeholder', 'Edit your journal entry');
    }
    else {
      let updated = document.getElementById('updatedEntry').value;
      let updateEntry = {journal: { entry: updated } };
      fetch(fetch_url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken
        },
        body: JSON.stringify(updateEntry)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        displayMine();
      })
      card.removeChild(card.lastChild);
    }
}

/* **********************
 *** DISPLAY BY USER *** 
*********************** */
function deleteJournal(postId) {
    console.log('deleteJournal Function Called');
    const accessToken = localStorage.getItem('SessionToken');
    fetch(`http://localhost:3000/journal/delete/${postId}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': accessToken
      })
    })
    .then(response => {
      console.log(response);
      displayMine();
    });
}