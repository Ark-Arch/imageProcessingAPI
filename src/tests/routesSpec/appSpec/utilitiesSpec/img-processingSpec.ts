import sharp from 'sharp'
import imgProcessing from '../../../../routes/app/utilities/img-processing'

const imgMeta:string = 'intentional error'

it('indicates an error (error: image could not be processed)', async () => {
    const error: null|string = await imgProcessing(imgMeta)
})