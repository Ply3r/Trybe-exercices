import express from 'express';
import validateSchema from '../src/middleware/validateSchema';
import userSchema from '../src/schema/user';
import user from '../src/controller/user';
import err from '../src/middleware/error';

const app = express();
app.use(express.json())

const router = express.Router();

router
  .route('/user')
  .get(user.findAll)
  .post(
    validateSchema(userSchema),
    user.create
  )

router.get('/user/:id', user.findOne)

app.use(router);
app.use(err);

export default app
