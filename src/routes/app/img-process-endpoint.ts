import express from 'express';
import requestValidation from './utilities/image-validation';
import {
  getQueriedImagePath,
  isThumbNailAvailable
} from './utilities/fs-interface';
import { createThumbImage } from './utilities/fs-interface';

const images: express.Router = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    // valid request???
    const validationResponse: null | string = await requestValidation(
      req.query
    );
    if (validationResponse) {
      res.send(validationResponse);
      console.log();
      return;
    }

    // check if thumb is availabe
    let error: null | string = '';

    if (!(await isThumbNailAvailable(req.query))) {
      error = await createThumbImage(req.query);
    }

    if (error) {
      res.send(error);
      return;
    }

    const path: null | string = getQueriedImagePath(req.query) + '.jpg';
    console.log(path);

    if (path) {
      res.sendFile(path);
    } else {
      res.send('ERRRRRRROOOOOOORRRRRRR');
    }
  }
);

export default images;
