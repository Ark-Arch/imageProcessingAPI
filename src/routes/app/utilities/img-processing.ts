import sharp from 'sharp';

interface ResizeMetadata {
  sourcePath: string;
  sinkPath: string;
  width: number;
  height: number;
}

const resizeImage = async (meta: ResizeMetadata): Promise<null | string> => {
  try {
    await sharp(meta.sourcePath)
      .resize(meta.width, meta.height)
      .toFile(meta.sinkPath);
    // console.log('success')
    return null;
  } catch {
    return 'error: your image could not be successfully processed...';
  }
};

export default resizeImage;
