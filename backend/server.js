import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import siswaRoute from './routes/siswaRoute.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', siswaRoute);
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});