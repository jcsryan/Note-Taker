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



  module.exports = router;

  //look up  array filter the notes taht dont have the delete id, write a new array after deleting
  //note you want. 14-17 stores it back, 11-14 needs change