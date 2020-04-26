import axios from 'axios';
import { fetchData } from './';
jest.mock('axios');
describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {...};
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetchData('react')).resolves.toEqual(data);
  });
  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    await expect(fetchData('react')).rejects.toThrow(errorMessage);
  });
});