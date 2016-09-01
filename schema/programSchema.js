var mongoose = require('mongoose');
var schema = mongoose.Schema;

var schemaProgram = new schema({
  programName: {
    type: String,
    trim: true,
    required: true
  },

  programVenue: {
    type: String,
    required: true
  },

  programDate: {
    type: Date,
    required: true
  },

  programDescription: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports= schemaProgram;