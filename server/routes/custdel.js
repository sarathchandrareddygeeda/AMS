const express = require('express');

const CustInfo = require('../models/CustomerDetails');
const router = express.Router();

router.post('/custinfo', async (req, res) => {
  const { fname, lname, address, country,zip,city,state} = req.body;

  const user = new CustInfo({ fname,  lname, address,state,country,zip,city });
  await user.save();

  res.json({ message: 'CustInfo Saved successfully' });
});

module.exports = router;
