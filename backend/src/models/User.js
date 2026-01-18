const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true, index: true },
    area: { type: String },
    role: { type: String, enum: ['Volunteer', 'Student', 'Supporter'], required: true },
    joinedDate: { type: Date, default: Date.now },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
