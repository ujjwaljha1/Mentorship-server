// File: controllers/workshopController.js
const Workshop = require('../models/Workshop');
const cloudinary = require('../config/cloudinary');

// exports.createWorkshop = async (req, res) => {
//   try {
//     const workshop = new Workshop({
//       title: req.body.title,
//       banner: req.file.path,
//       date: req.body.date,
//       time: req.body.time,
//       location: req.body.location,
//       ageGroup: req.body.ageGroup,
//       language: req.body.language,
//       venueAddress: req.body.venueAddress
//     });
//     await workshop.save();
//     res.status(201).json(workshop);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };


// exports.createWorkshop = async (req, res) => {
//   try {
//     console.log('Received request to create workshop');
//     console.log('Body:', req.body);

//     if (!req.file) {
//       console.log('No file uploaded');
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     console.log('File:', req.file);

//     const workshop = new Workshop({
//       title: req.body.title,
//       banner: `/uploads/${req.file.filename}`, // Store the path to the file
//       date: req.body.date,
//       time: req.body.time,
//       location: req.body.location,
//       ageGroup: req.body.ageGroup,
//       language: req.body.language,
//       venueAddress: req.body.venueAddress
//     });

//     console.log('Workshop object created:', workshop);

//     await workshop.save();
//     console.log('Workshop saved successfully');

//     res.status(201).json(workshop);
//   } catch (error) {
//     console.error('Error in createWorkshop:', error);
//     res.status(500).json({ 
//       message: 'An error occurred while creating the workshop',
//       error: error.message,
//       stack: error.stack
//     });
//   }
// };


// exports.createWorkshop = async (req, res) => {
//   try {
//     console.log('Received request to create workshop');
//     console.log('Body:', req.body);

//     if (!req.file) {
//       console.log('No file uploaded');
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     console.log('File:', req.file);

//     const workshop = new Workshop({
//       title: req.body.title,
//       banner: `/uploads/${req.file.filename}`, // Store the path to the file
//       date: req.body.date,
//       time: req.body.time,
//       location: req.body.location,
//       ageGroup: req.body.ageGroup,
//       language: req.body.language,
//       venueAddress: req.body.venueAddress
//     });

//     console.log('Workshop object created:', workshop);

//     await workshop.save();
//     console.log('Workshop saved successfully');

//     res.status(201).json(workshop);
//   } catch (error) {
//     console.error('Error in createWorkshop:', error);
//     res.status(500).json({ 
//       message: 'An error occurred while creating the workshop',
//       error: error.message,
//       stack: error.stack
//     });
//   }
// };
exports.createWorkshop = async (req, res) => {
  try {
    const workshop = new Workshop({
      title: req.body.title,
      banner: req.body.banner, // Now expecting a URL instead of a file
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      ageGroup: req.body.ageGroup,
      language: req.body.language,
      venueAddress: req.body.venueAddress
    });

    await workshop.save();
    res.status(201).json(workshop);
  } catch (error) {
    res.status(500).json({ 
      message: 'An error occurred while creating the workshop',
      error: error.message
    });
  }
};


// ... rest of the controller methods remain the same

//exports.createWorkshop = async (req, res) => {
//   try {
//     console.log('Received request to create a new workshop.');

//     // Log received form data
//     console.log('Form data:', {
//       title: req.body.title,
//       date: req.body.date,
//       time: req.body.time,
//       location: req.body.location,
//       ageGroup: req.body.ageGroup,
//       language: req.body.language,
//       venueAddress: req.body.venueAddress,
//     });

//     // Check if file was uploaded
//     if (!req.file) {
//       console.log('No file uploaded.');
//       return res.status(400).json({ message: 'Banner image is required.' });
//     }

//     console.log('File details:', req.file);

//     // Upload to Cloudinary
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       resource_type: 'image',
//     });

//     console.log('Cloudinary upload successful.');
//     console.log('Cloudinary response:', result);

//     // Create a new workshop object
//     const newWorkshop = new Workshop({
//       bannerUrl: result.secure_url,
//       title: req.body.title,
//       date: req.body.date,
//       time: req.body.time,
//       location: req.body.location,
//       ageGroup: req.body.ageGroup,
//       language: req.body.language,
//       venueAddress: req.body.venueAddress,
//     });

//     console.log('Saving new workshop to MongoDB...');
//     const savedWorkshop = await newWorkshop.save();

//     console.log('Workshop saved to MongoDB successfully.');
//     console.log('Saved Workshop:', savedWorkshop);

//     return res.status(201).json(savedWorkshop);
//   } catch (error) {
//     console.error('Error occurred during workshop creation:', error);
//     return res.status(500).json({ message: 'An error occurred while creating the workshop.', error });
//   }
// };


exports.getAllWorkshops = async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.json(workshops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id);
    if (workshop == null) {
      return res.status(404).json({ message: 'Workshop not found' });
    }
    res.json(workshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id);
    if (workshop == null) {
      return res.status(404).json({ message: 'Workshop not found' });
    }
    
    if (req.body.title != null) {
      workshop.title = req.body.title;
    }
    if (req.file != null) {
      workshop.banner = req.file.path;
    }
    if (req.body.date != null) {
      workshop.date = req.body.date;
    }
    if (req.body.time != null) {
      workshop.time = req.body.time;
    }
    if (req.body.location != null) {
      workshop.location = req.body.location;
    }
    if (req.body.ageGroup != null) {
      workshop.ageGroup = req.body.ageGroup;
    }
    if (req.body.language != null) {
      workshop.language = req.body.language;
    }
    if (req.body.venueAddress != null) {
      workshop.venueAddress = req.body.venueAddress;
    }
    
    const updatedWorkshop = await workshop.save();
    res.json(updatedWorkshop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteWorkshop = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id);
    if (workshop == null) {
      return res.status(404).json({ message: 'Workshop not found' });
    }
    await workshop.remove();
    res.json({ message: 'Workshop deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};