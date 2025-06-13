import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
})
const port= process.env.LOCAL_HOST
app.listen(port, () => {
    console.log(`Server is running on port : ${port} `);
}
);

export default app;
