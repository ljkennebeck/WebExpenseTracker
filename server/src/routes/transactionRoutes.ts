// Imports
import express from 'express';
import { listTransactions, addTransaction, updateTransaction, deleteTransaction } from '../controllers/transactionsController';

const router = express.Router();

router.get('/', listTransactions);
router.get('/add', addTransaction);
router.get('/edit', updateTransaction);
router.get('/delete', deleteTransaction);

export default router;