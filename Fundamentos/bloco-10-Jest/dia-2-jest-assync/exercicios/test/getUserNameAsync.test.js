const { user, getUserName, findUserById } = require('../getUserName')

describe('the function getUserName must return the name of an user ID', () => {
  it('must show Mark name', async () => {
    const res = await getUserName(1)
    expect(res).toBe('Mark')
  });
  it('must show Paul name', async () => {
    const result = await getUserName(2)
    expect(result).toBe('Paul')
  });
  it('must show an Error message', async () => {
    expect.assertions(1)
    await getUserName(3)
      .catch((error) => expect(error.message).toBe('User with 34 not found.'))
  })
});