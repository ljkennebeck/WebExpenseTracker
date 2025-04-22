// Imports
import express from 'express';
import { listUsers, listUserTransactions, addUser, updateUser, deleteUser } from '../controllers/usersController';

const router = express.Router();

router.get('/', listUsers);
router.get('/transactions/:id', listUserTransactions);
router.get('/add', addUser)
router.get('/edit', updateUser)
router.get('/delete', deleteUser)

export default router;