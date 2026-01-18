const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = model('Event', eventSchema);
