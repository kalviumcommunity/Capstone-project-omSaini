const express = require('express');
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserStats,
  searchUsers
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(protect);

// Admin only routes
router.get('/', authorize('admin'), getUsers);
router.get('/stats', authorize('admin'), getUserStats);
router.put('/:id', authorize('admin'), updateUser);
// router.delete('/:id', authorize('admin'), deleteUser);

// User routes (accessible by the user themselves or admin)
router.get('/search', searchUsers);
router.get('/:id', getUserById);

module.exports = router; 