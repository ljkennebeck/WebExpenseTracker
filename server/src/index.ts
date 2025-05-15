// Imports
import express, { Request, Response } from 'express';
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import transactionRoutes from "./routes/transactionRoutes"

const app = express();
const PORT: number = 3000;

// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes)

app.get('/api/home', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!', people: ['Harry', 'Jack', 'Barry'] });
});

app.get('/home', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!', people: ['Harry', 'Jack', 'Barry'] });
});

// Start server locally
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app