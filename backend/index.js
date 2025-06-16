// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// // import patternMatch from './controller/patternMatch.js';
// import patternRoutes from './routes/patternRoutes.js';
// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Welcome to the backend server!');
// })

// // app.use('/api',)
// app.use('/api',patternRoutes)
// const port= process.env.LOCAL_HOST
// app.listen(port, () => {
//     console.log(`Server is running on port : ${port} `);
// }
// );

// export default app;


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import patternRoutes from './routes/patternRoutes.js';

dotenv.config();

const app = express();

// ✅ CORS setup: Only allow frontend domain
app.use(cors({
  origin: ['https://chatbot-codethinkers.vercel.app','https://www.rfgul.live'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// ✅ API route
app.use('/api', patternRoutes);

// ✅ Use PORT from env or default to 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`✅ Server is running on port: ${port}`);
});

export default app;
