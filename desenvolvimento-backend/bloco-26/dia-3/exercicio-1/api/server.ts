import app from './api';

const PORT  = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server running on ${PORT}`))
