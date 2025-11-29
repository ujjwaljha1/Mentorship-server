const mongoose = require('mongoose');

const jobTitleSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

<<<<<<< HEAD
module.exports = mongoose.model('JobTitle', jobTitleSchema);
=======
module.exports = mongoose.model('JobTitle', jobTitleSchema);
>>>>>>> upstream/main
