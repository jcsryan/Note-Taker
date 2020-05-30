const path = require('path');
const router = require('express').Router();


router.get('/', (req, res) => {
  console.log("hello")
  res.sendFile(path.join(__dirname, '../../public/index2.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});



module.exports = router;