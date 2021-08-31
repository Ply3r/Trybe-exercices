const { user, getUserName, findUserById } = require('../getUserName')

describe('the function getUserName must return the name of an user ID', () => {
  it('must show Mark name', () => (
    getUserName(1).then((result) => {
      expect(result).toBe('Mark')
    }),
    getUserName(2).then((result) => {
      expect(result).toBe('Paul')
    }),
    getUserName(3).catch((error) => {
      expect(error).toStrictEqual(new Error('User with 3 not found.'))
    })
  ));
});