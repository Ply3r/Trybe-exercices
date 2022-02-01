const verifyInfo = (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  const regexEmail = /[\w]+@[\w]+[.][\w]{2,3}/gmi
  const regexPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}/gmi

  let message = 'OK';
  if ([firstName, lastName].includes('')) message = 'invalid data';
  if (!regexEmail.test(email)) message = 'email invalid';
  if (!regexPass.test(password)) message = 'password invalid';

  if (message !== 'OK')
    return res.status(401).json({ message })

  next();
}

module.exports = verifyInfo;