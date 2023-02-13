const express = require('express');
const app = express();
const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

const getUser = (req, res) => {};
const createUser = (req, res) => {};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

const router = express.Router();
app.use('/api/v1/users', router);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
