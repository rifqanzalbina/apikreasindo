const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User ');
const { JWT_SECRET } = process.env;

// Register Route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User  already exists' });
    }

    // Create a new user
    user = new User({ email, password });
    await user.save();

    // Generate JWT token
    const payload = { userId: user.id }; // Payload contains user ID
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    // Send the token back to the client
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    const payload = { userId: user.id }; // Payload contains user ID
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    // Send the token back to the client
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;