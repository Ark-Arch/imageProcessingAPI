import sharp from 'sharp'

interface resizeMetadata {
    sourcePath: string;
    sinkPath: string;
    width: number;
    height: number
}

const resizeImage = async (meta: resizeMetadata): Promise<null|string> => {
    try {
        await sharp(meta.sourcePath)
              .resize(meta.width,meta.height)
              .toFile(meta.sinkPath);
        
        return null;
    } catch {
        return 'error: your image could not be successfully processed...'
    }
};


export default resizeImage