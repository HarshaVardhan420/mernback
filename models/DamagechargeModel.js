

const mongoose = require('mongoose');

const damageChargeSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  member: { type: String, required: true },
  chargeAmount: { type: Number, required: true },
  description: { type: String }
});

module.exports = mongoose.model('DamageCharge', damageChargeSchema);
