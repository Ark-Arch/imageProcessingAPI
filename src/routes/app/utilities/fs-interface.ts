// this chapter of my server :) helps to query my file storage system.
// it queries for the below (has the following endpoints):
// get the path of the queries image (done)
// get the data of the images available (done)
// confirm that the queried image is a part of the already available image (done)

// check if thumb version is already availabe

import { promises as fsPromises } from 'fs';
import path from 'path'; // core module needed to resolve my paths
import resizeImage from './img-processing';

interface ImgMetaData {
  filename?: string;
  width?: string;
  height?: string;
}

// resolved image paths
const queriedImagePath = path.resolve(
  __dirname,
  '../../../../assets/originals'
);
const thumbedImagePath = path.resolve(
  __dirname,
  '../../../../assets/thumb-nailed'
);

// getting image path (endpoint)
const getQueriedImagePath = (meta: ImgMetaData) => {
  if (!meta.filename) {
    return null;
  } else {
    if (meta.width && meta.height) {
      return path.resolve(
        thumbedImagePath,
        `${meta.filename}_${meta.width}by${meta.height}`
      );
    } else {
      return path.resolve(queriedImagePath, `${meta.filename}`);
    }
  }
};

// get the stored image names
async function getStoredImageNames(): Promise<string[]> {
  try {
    const storedImageList = await fsPromises.readdir(queriedImagePath);
    const modifiedList = storedImageList.map(
      (image: string): string => image.split('.')[0]
    );
    // console.log(modifiedList)
    return modifiedList;
  } catch {
    return [];
  }
}

// check for availability of image
const isImageAvailable = async (image: string = ''): Promise<boolean> => {
  // console.log(image)
  const response = !image
    ? false
    : (await getStoredImageNames()).includes(image);
  // console.log(response)
  return response;
};

const createThumbNailPath = async (): Promise<void> => {
  try {
    await fsPromises.access(thumbedImagePath);
  } catch {
    fsPromises.mkdir(thumbedImagePath);
  }
};

// // is there an existing thumbnail?
const isThumbNailAvailable = async (meta: ImgMetaData): Promise<boolean> => {
  if (!meta.filename || !meta.width || !meta.height) {
    return false;
  }

  const thumbPath: string = path.resolve(
    thumbedImagePath,
    `${meta.filename}_${meta.width}by${meta.height}.jpg`
  );

  try {
    await fsPromises.access(thumbPath);
    return true;
  } catch {
    return false;
  }
};

const createThumbImage = async (meta: ImgMetaData): Promise<null | string> => {
  if (!meta.filename || !meta.width || !meta.height) {
    return null;
  }

  // console.log('creating thumb');
  // console.log(meta)
  const value = await resizeImage({
    sourcePath: path.resolve(queriedImagePath, `${meta.filename}.jpg`),
    sinkPath: path.resolve(
      thumbedImagePath,
      `${meta.filename}_${meta.width}by${meta.height}.jpg`
    ),
    width: parseInt(meta.width),
    height: parseInt(meta.height)
  });
  // console.log(value)
  // console.log('remeber thumb')
  console.log('createdThumbNailImage');
  return value;
};

export {
  getQueriedImagePath,
  isImageAvailable,
  getStoredImageNames,
  createThumbNailPath,
  createThumbImage,
  isThumbNailAvailable
};
