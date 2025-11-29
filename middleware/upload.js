
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
<<<<<<< HEAD
    cb(null, 'uploads/') // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
=======
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
>>>>>>> upstream/main
  }
});

const upload = multer({ storage: storage });

<<<<<<< HEAD
module.exports = upload;
=======
module.exports = upload;
>>>>>>> upstream/main
