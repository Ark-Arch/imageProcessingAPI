import { getStoredImageNames } from './fs-interface';
import { isImageAvailable } from './fs-interface';

interface ImgMetaData {
  filename?: string;
  width?: string;
  height?: string;
}

const requestValidation = async (meta: ImgMetaData): Promise<null | string> => {
  const isImgAvail = await isImageAvailable(meta.filename);
  const invalidWidth: boolean =
    Number.isNaN(parseInt(meta.width || '')) || parseInt(meta.width || '') < 1;
  const invalidHeight: boolean =
    Number.isNaN(parseInt(meta.height || '')) ||
    parseInt(meta.height || '') < 1;
  if (!isImgAvail) {
    return `the image you queried does not exist in the database. Please use any of the following image names ${(
      await getStoredImageNames()
    ).join(' || ')}`;
  } else if (!meta.width && !meta.height) {
    return null;
  } else if (invalidHeight || invalidWidth) {
    return 'error: you have provided an invalid parameter. pleas provide positive width and height queries';
  } else {
    return null;
  }
};

export default requestValidation;
