const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password, admin} = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
// if(user)
  // Check password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    
    return res.status(400).json({ message: 'Invalid password' });
  }
  else
  {
    if(user.admin){
       return res.status(200).json({ message: 'Admin' });
    }
    else{
      return res.status(201).json({ message: 'Customer' });
    }
  }

  // Generate token
 
});

module.exports = router;
