import express from 'express';
const app = express();
import cors from 'cors';

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

// routes
import codeSubmit from './routes/code-submit';

app.use('/api/v1/code-submit', codeSubmit);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
