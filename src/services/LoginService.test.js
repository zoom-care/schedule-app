import { login } from "./LoginService";

describe('login()', () => {
  it('should login with the given credentials and return a response object', async () => {
    const credentials = { username: 'user', password: 'pass' };
    const expectedResponse = { token: 'abc123' };

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(expectedResponse)
    });

    const response = await login(credentials);
    expect(response).toEqual(expectedResponse);
    expect(fetch).toHaveBeenCalledWith('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
  });
});