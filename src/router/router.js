'use strict';
const express = require('express');
const basicAuth = require('./middleware/basic.js');
const UserModel=require('./models/user-model.js')

const UsersCollection=require('./models/user-collection.js');
const router = express.Router();

router.post('/signin',basicAuth,signInHandler);
router.post('/signup',signUpHandler);

async function signInHandler(req, res) {
   const record=req.user;
   res.status(200).send(record); 
}
async function signUpHandler(req, res) {
   try {
      const usersCollection=new UsersCollection(UserModel);
      const record = await usersCollection.create(req.body);
      res.status(200).json(record);
    } catch (e) { res.status(403).send("Error Creating User"+e.message); }  
}
  
  

module.exports = router;