const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

<<<<<<< HEAD
module.exports = mongoose.model('Company', companySchema);
=======
module.exports = mongoose.model('Company', companySchema);
>>>>>>> upstream/main
