'use strict';
const express = require('express');
const basicAuth = require('./middleware/basic.js');
const bcrypt = require('bcrypt');

const Users=require('./models/user-model.js')
const router = express.Router();

router.post('/signin',basicAuth,signInHandler);
router.post('/signup',signUpHandler);

async function signInHandler(req, res) {
   const record=req.user;
   res.status(200).send(record); 
}
async function signUpHandler(req, res) {
   try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = new Users(req.body);
      const record = await user.save(req.body);
      res.status(200).json(record);
    } catch (e) { res.status(403).send("Error Creating User"+e.message); }  
}
  
  

module.exports = router;