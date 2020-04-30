import 'reflect-metadata';
import { UserService } from './Users/Application/Services/UserService';
import { UserDomain } from './Users/Domain/Services/UserDomain';
import { ValidationRequest } from './Users/Infrastructure/Validation/ValidationRequest';

const Koa = require('koa');
const serverless = require('serverless-http');
const app = new Koa();

// @ts-ignore
const userService = new UserService(new ValidationRequest(), new UserDomain());

app.use(async function (ctx, next) {
  const response = await userService.getUsers()
    .catch(e => (ctx.exception = e));
  ctx.type = 'json';
  ctx.body = response;
  await next();
});

module.exports.handler = serverless(app);