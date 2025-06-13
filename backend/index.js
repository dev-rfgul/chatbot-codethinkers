import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// import patternMatch from './controller/patternMatch.js';
import patternRoutes from './routes/patternRoutes.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
})

// app.use('/api',)
app.use('/api',patternRoutes)
const port= process.env.LOCAL_HOST
app.listen(port, () => {
    console.log(`Server is running on port : ${port} `);
}
);

export default app;
