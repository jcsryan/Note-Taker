const path = require("path");
const router = require("express").Router();
const { notes } = require("../../db/db.json");
const fs = require("fs")

//gets notes from db and converts to json
router.get('/notes', (req, res) =>{
    res.json(notes);
})

//stores notes and alows for the addition of new notes
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


  //this code does not work for the delte button, office hours for sunday did not happen so I was
  //not able to figure out the bonus, if you could mark what I did wrong it would be really
  //helpful for me
  router.delete('/notes:note', (req, res) => {
    const note = req.params.id;
    const index = notes.indexOf(note);
    if (index > -1) {
      array.splice(index, 1);
    }
    console.log(index); 
    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify({index}, null, 2)
    );
    res.json(index)
  })
  

  module.exports = router;

  //look up  array filter the notes taht dont have the delete id, write a new array after deleting
  //note you want. 14-17 stores it back, 11-14 needs change