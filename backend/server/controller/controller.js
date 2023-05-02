const axios = require("axios");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

exports.home = async (req, res) => {
    // res.send("Hii...")
    try{
         const string = req.body.link;

         res.status(200).json({
            status: true,
            link : string
        })

    } catch(err){
        res.status(500).send({ message : "Server Error"})
    }
}
