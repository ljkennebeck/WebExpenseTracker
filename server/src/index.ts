// Imports
import express, { Request, Response } from 'express';
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT: number = 8080;

// Middleware
app.use(cors());

// Routes
app.use('/users', userRoutes);

app.get('/api/home', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!', people: ['Harry', 'Jack', 'Barry'] });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});