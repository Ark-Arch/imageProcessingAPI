import express from 'express';
import routes from './routes/index';
import { createThumbNailPath } from './routes/app/utilities/fs-interface';

const app: express.Application = express();
const port: number = 3000;

app.use(routes);

app.listen(port, async (): Promise<void> => {
  await createThumbNailPath();

  console.log(`listing on port ${port}`);
});

export default app;
