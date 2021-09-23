const { user, getUserName, findUserById } = require('../getUserName')

describe('the function getUserName must return the name of an user ID', () => {
  it("Must show Mark's name", async () => {
    const res = await getUserName(1)
    expect(res).toBe('Mark')
  })
  it("Must show Paul's name", async () => {
    const res = await getUserName(2)
    expect(res).toBe('Paul')
  })
});