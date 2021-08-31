const { user, getUserName, findUserById } = require('../getUserName')

describe('the function getUserName must return the name of an user ID', () => {
  it('must show Mark name', async () => {
    try {
      const result = await getUserName(1)
      expect(result).toBe('Mark')
    } catch ( error) {
      expect(error).toEqual(new Error('User with 1 not found.'))
    }
  });
  it('must show Paul name', async () => {
    try {
      const result = await getUserName(2)
      expect(result).toBe('Paul')
    } catch ( error) {
      expect(error).toEqual(new Error('User with 2 not found.'))
    }
  });
  it('must show an Error', async () => {
    try {
      const result = await getUserName(3)
      expect(result).toBe('Leandro')
    } catch ( error) {
      expect(error).toStrictEqual(new Error('User with 3 not found.'))
    }
  });
});