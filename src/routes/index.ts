import express from 'express';
import images from './app/img-process-endpoint';

const routes = express.Router();

routes.use('/api/images', images);

routes.get('/', (req, res) => {
  res.send(
    'YOU ARE FINALLY WELCOME TO MY UDACITY IMAGE PROCESSING API PROJECT!'
  );
});

export default routes;
