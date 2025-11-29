const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const { verifyToken } = require('../middleware/auth');

<<<<<<< HEAD
// Get user profile
=======

>>>>>>> upstream/main
router.get('/', verifyToken, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

<<<<<<< HEAD
// Create or update user profile
router.post('/', verifyToken, async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id });
    
    if (profile) {
      // Update existing profile
=======

router.post('/', verifyToken, async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id });

    if (profile) {
>>>>>>> upstream/main
      profile = await Profile.findOneAndUpdate(
        { user: req.user._id },
        { $set: req.body },
        { new: true }
      );
    } else {
<<<<<<< HEAD
      // Create new profile
=======
>>>>>>> upstream/main
      profile = new Profile({
        user: req.user._id,
        ...req.body
      });
      await profile.save();
    }
<<<<<<< HEAD
    
=======

>>>>>>> upstream/main
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

<<<<<<< HEAD
// Add project
=======

>>>>>>> upstream/main
router.post('/project', verifyToken, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    profile.projects.unshift(req.body);
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

<<<<<<< HEAD
// Add certification
=======
>>>>>>> upstream/main
router.post('/certification', verifyToken, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    profile.certifications.unshift(req.body);
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

<<<<<<< HEAD
// Add goal
=======

>>>>>>> upstream/main
router.post('/goal', verifyToken, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    profile.goals.unshift(req.body);
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> upstream/main
