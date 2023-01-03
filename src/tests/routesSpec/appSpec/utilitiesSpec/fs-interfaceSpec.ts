import path from 'path';
import { getQueriedImagePath } from '../../../../routes/app/utilities/fs-interface';
import { isImageAvailable } from '../../../../routes/app/utilities/fs-interface';

const queriedImagePath = path.resolve(
  __dirname,
  '../../../../../assets/originals'
);
const thumbedImagePath = path.resolve(
  __dirname,
  '../../../../../assets/thumb-nailed'
);

interface DuckImageMetaData {
  filename?: string;
  width?: string;
  height?: string;
}

describe('Testing file access and checks to images', (): void => {
  const duckImage: DuckImageMetaData = {
    filename: 'this should pass :)',
    width: '450',
    height: '300'
  };

  it('tests response to querying availability of a non existing image', async () => {
    const response = await isImageAvailable(duckImage.filename);
    expect(response).toEqual(false);
  });
});
