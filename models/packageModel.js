const mongoose = require('mongoose');
const packageSchema = new mongoose.Schema({
  trackingId: {
    type:String,
     required:true
  },
  status: {
    type:String,
    required:true
  },
  destination:{
    type:String,
    required:true
  },
},
{timestamps:true});


module.exports = mongoose.model('Package',packageSchema);
