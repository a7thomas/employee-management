var mongoose = require('mongoose');
var schema = mongoose.Schema;

var schemaUser =  new schema({
  userId: {
    type: Number
   // required: true,
    //unique: true
  },

  imagePath: {
    type: String
  },

  token: {
    type:String,
    default:'a'
  },
  
  email: {
    type: String,
    required: true,
    trim:true,
    unique: true,
    match: /^(([0-9a-zA-Z\!#\$%&'\*\+\-\/\=\?\^_`\{\|\}~("")]+?\.)*[0-9a-zA-Z\!#\$ %&'\*\+\-\/\=\?\^_`\{\|\}~("")]+?)@(?:(?:(:?[0-9a-zA-Z\-]+\.)*[0-9a-zA-Z\-]+)|(?:\[.+?\]))$/
  },

  password: {
    type: String,
    required: true
  },

  userType: {
    type: String,
    enum: ['user' ,'admin'],
    default: 'user' 
  },

  designation: {
    type:String,
    default:'Engineer'
  },

  personalInfo: {
    firstName: {
      type: String,
      required: true,
      lowercase: true
    },

    lastName: {
      type: String,
      lowercase:true
    },

    gender: {
      type: String,
      enum: ['male' ,'female'],
      required: true
    },

    dob: {
      type: Date
    },

    address: {
      trim: true,
      type: String
    },

    mobileNo: {
      type: String,
      required:true
    }
  },

  accounts: {
    acNo: {
      type: String,
      default: 'null'
    },

    bankName: {
      type: String,
      trim: true,
      default: 'null'
    },

    panNo: {
      default: 'null',
      type: String
     // unique: true
    }
  },

  education: {
    tenthPercentage: {
      type: Number,
      default: null,
      min: 00,
      max: 100
    },

    twelfthPercentage: {
     type: Number,
     default:null,
     min: 0,
     max: 100  
    },

    degree: {
      type: String,
      default: 'null'
    },

    other: {
      type: String,
      default: 'null'
    }
  }
});

module.exports = schemaUser; 