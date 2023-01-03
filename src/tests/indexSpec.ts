import app from '../index';
import supertest from 'supertest';

const req: supertest.SuperTest<supertest.Test> = supertest(app);

describe("test response from '/' endpoint", (): void => {
  it('gets /', async (): Promise<void> => {
    const res: supertest.Response = await req.get('/');
    expect(res.status).toEqual(200);
  });
});

describe("test responses from '/api/images'", (): void => {
  it('gets /api/images?filename=fjord&width=199&height=199', async (): Promise<void> => {
    const res: supertest.Response = await req.get(
      '/api/images?filename=fjord&width=199&height=199'
    );

    expect(res.status).toEqual(200);
  });
});
