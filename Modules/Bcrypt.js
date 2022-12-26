const bcrypt = require('bcrypt');
const saltRounds = 10;


/*----Sync----*/

const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
const result = bcrypt.compareSync(myPlaintextPassword, hash); //true or false


/*----Async----*/

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});

bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});


/*----Promise----*/

bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    // Store hash in your password DB.
});

bcrypt.compare(myPlaintextPassword, hash).then(function(result) {
    // result == true
});