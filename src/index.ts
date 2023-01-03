import express from 'express';
import routes from './routes/index';
import { createThumbNailPath } from './routes/app/utilities/fs-interface';

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, async () => {
  await createThumbNailPath();

  console.log(`listing on port ${port}`);
});

export default app;
