// damageChargeController.js

const DamageCharge = require('../models/DamagechargeModel');

// Example controller functions

exports.createDamageCharge = async (req, res) => {
  try {
    const damageCharge = await DamageCharge.create(req.body);
    res.status(201).json(damageCharge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getDamageCharges = async (req, res) => {
  try {
    const damageCharges = await DamageCharge.find();
    res.status(200).json(damageCharges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Implement other CRUD operations as needed
