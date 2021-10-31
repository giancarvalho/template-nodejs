import dotenv from 'dotenv';

let path;

// remember to create your .env files
switch (process.env.NODE_ENV) {
  case 'prod':
    path = '.env';
    break;
  case 'test':
    path = '.env.test';
    break;
  default:
    path = '.env.dev';
}

dotenv.config({
  path,
});
