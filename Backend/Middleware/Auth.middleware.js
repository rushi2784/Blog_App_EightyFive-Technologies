const jwt = require('jsonwebtoken');
require('dotenv').config()

const userAuthentication = (req, res, next) => {

    if (!req.headers.authorization) {
        res.status(401).send({ "message": "Authorization header was missing" });
    }

    const user_token = req.headers.authorization.split(" ")[1];

    jwt.verify(user_token, process.env.SECRETKEY, (err, decoded) => {
        if (err) {
            return res.send("please login again err")
        }

        req.body.email = decoded.email;
        req.body.userId = decoded.userId
        next();
    })

}

module.exports = userAuthentication;