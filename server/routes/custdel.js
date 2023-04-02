const express = require('express');

const CustInfo = require('../models/CustomerDetails');
const router = express.Router();

router.post('/custinfo', async (req, res) => {
  const { fname, lname, pno, address, country,zipcode,city,state} = req.body;

  const user = new CustInfo({ fname,  lname, pno, address,state,country,zipcode,city });
  await user.save();

  res.json({ message: 'CustInfo Saved successfully' });
});

module.exports = router;
