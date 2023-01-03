import requestValidation from '../../../../routes/app/utilities/image-validation';

interface DuckImageMetaData {
  filename?: string;
  width?: string;
  height?: string;
}

const duckImage: DuckImageMetaData = {
  filename: 'fjord',
  width: '200',
  height: '-3'
};

it('test response to provided invalid height', async () => {
  const response =
    'error: you have provided an invalid parameter. pleas provide positive width and height queries';
  const value = await requestValidation(duckImage);
  expect(value).toEqual(response);
});
