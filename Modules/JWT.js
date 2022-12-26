const jwt = require('jsonwebtoken');

const token = jwt.sign(data, SecretKey);

const verified = jwt.verify(token, SecretKey);
if (verified) {
    return res.send("Successfully Verified");
} else {
    // Access Denied
    return res.status(401).send(error);
}