// Imports
import express from 'express';
import { listUsers } from '../controllers/usersController';
import { listTransactions } from '../controllers/transactionsController';

const router = express.Router();

router.get('/', listUsers);
router.get('/transactions', listTransactions);

export default router;