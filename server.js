const express = require('express')
const app = express()
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//  render html
app.use(express.static('public'));

//  send notes page 
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// const notesRouter = require('./routes/noteroutes');
// app.use('/note', notesRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});