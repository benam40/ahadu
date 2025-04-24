const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// In-memory contacts array
let contacts = [
  { name: 'John Doe', email: 'john@example.com', phone: '0911000000' },
  { name: 'Jane Smith', email: 'jane@example.com', phone: '0922000000' }
];

// Home/dashboard
app.get('/', (req, res) => {
  res.render('index', { title: 'Dashboard', message: null });
});

// List contacts
app.get('/contacts', (req, res) => {
  res.render('contacts', { title: 'Contacts', contacts });
});

// Add contact form
app.get('/contacts/new', (req, res) => {
  res.render('new_contact', { title: 'Add Contact' });
});

// Create contact
app.post('/contacts', (req, res) => {
  const { name, email, phone } = req.body;
  contacts.push({ name, email, phone });
  res.redirect('/contacts');
});

// Edit contact form
app.get('/contacts/:idx/edit', (req, res) => {
  const idx = parseInt(req.params.idx);
  if (contacts[idx]) {
    res.render('edit_contact', { title: 'Edit Contact', contact: contacts[idx], idx });
  } else {
    res.redirect('/contacts');
  }
});

// Update contact
app.put('/contacts/:idx', (req, res) => {
  const idx = parseInt(req.params.idx);
  if (contacts[idx]) {
    contacts[idx] = { name: req.body.name, email: req.body.email, phone: req.body.phone };
  }
  res.redirect('/contacts');
});

// Delete contact
app.delete('/contacts/:idx', (req, res) => {
  const idx = parseInt(req.params.idx);
  if (contacts[idx]) {
    contacts.splice(idx, 1);
  }
  res.redirect('/contacts');
});

app.listen(PORT, () => {
  console.log(`Ahadu CRM running on port ${PORT}`);
});
