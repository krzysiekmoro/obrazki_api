import {config} from './config';
import express from 'express';

const app = express();

app.listen(config.port, () =>
  console.log(`App is listening on port: ${config.port}`),
);
