import sharp from 'sharp'
import resizeImage from '../../../../routes/app/utilities/img-processing'

interface resizeMetadata {
    sourcePath: string;
    sinkPath: string;
    width: number;
    height: number
}

const imgMeta:resizeMetadata = {
    sourcePath : 'non-existing',
    sinkPath:"non-existing",
    width: 34,
    height: 32
}

it('indicates an error (error: image could not be processed)', async () => {
    const error: null|string = await resizeImage(imgMeta)
    expect(error).toEqual('error: your image could not be successfully processed...')
});