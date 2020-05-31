const path = require("path");
const router = require("express").Router();
const { notes } = require("../../db/db.json");
const fs = require("fs")

router.get('/notes', (req, res) =>{
    res.json(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = req.body;
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify({notes}, null, 2)
    );
    res.json(note)
  });


  fetch('/api/notes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(notes)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding an animal!');
    });

  module.exports = router;

  //look up  array filter the notes taht dont have the delete id, write a new array after deleting
  //note you want. 14-17 stores it back, 11-14 needs change