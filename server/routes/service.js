const express = require('express');

const Service = require('../models/Service');
const router = express.Router();

router.post('/services', async (req, res) => {
  const { fname, bcompany, bmodel, bnumber,problem} = req.body;

  const user = new Service({ fname, bcompany, bmodel, bnumber,problem });
  await user.save();

  res.json({ message: 'Service created successfully' });
});

module.exports = router;
