import express from 'express';
import { addProfile, deleteProfile } from '../controllers/ProfileController';  

const router = express.Router();

router.get('/profile', addProfile);
router.get('/profile', deleteProfile);


export default router;