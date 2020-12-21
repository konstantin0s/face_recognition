const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'constantin',
    password : 'tehnician',
    database : 'smart-brain'
  }
});

// db.select('*').from('users')
// .then((data) => {
//     console.log(data);
// })

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(database.users);
});

app.post('/signin', (req, res) => {
    if ( req.body.email === database.users[1].email 
        && req.body.password === database.users[1].password) {
            res.json('success');
        } else {
            res.status(400).json('login failed');
        }
  
});

app.post('/register', (req, res) => {
const {email, name, password } = req.body;

db('users')
.returning('*')
.insert({
    email: email,
    name: name,
    joined: new Date()
}).then(user => {
 res.json(user[0]);
}).catch(err => res.status(400).json('duplicate or unable to register'));

  
});

//get one profile by ID
app.get('/profile/:id', (req, res) => {
 const { id } = req.params;
 let found = false;
    database.users.forEach((user) => {
        if (user.id === id) {
            found = true;
           return res.json(user);
        } 
        if (!found) {
            res.status(404).json('no such user');
        }
    })
});

//image end point
app.post('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
       database.users.forEach((user) => {
           if (user.id === id) {
               found = true;
               user.entries++;
              return res.json(user.entries);
           } 
           if (!found) {
               res.status(404).json('no such user');
           }
       })
})

app.listen(5000, () => {
    console.log('App running on port 5000...');
});

/* 
/ --> res = this is working
/signin --> POST =  SUCCESS/fail
/register --> POST = new user
/profile/:userId --> GET = user
/image --> PUT --> update user
*/

