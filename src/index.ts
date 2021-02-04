import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Customer } from './models/Customer';
import * as express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const startConn = async (): Promise<void> => {
  try {
    await createConnection();
    console.log('DB started working!');
  } catch (err) {
    console.log('We have Error', err);
  }
};

startConn()
  .then((): void => {
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  })
  .catch((err): void => {
    console.log(err);
  });
