import 'reflect-metadata';
import { PeopleService } from '../Users/Application/Services/PeopleService';
import { PeopleDomain } from '../Users/Domain/Services/PeopleDomain';
import { ValidationRequest } from '../Users/Infrastructure/Validation/ValidationRequest';

const serverless = require('serverless-http');
const Koa = require('koa');
const app = new Koa();

// @ts-ignore
const peopleService = new PeopleService(new ValidationRequest(), new PeopleDomain());

app.use(async function (ctx, next) {
  const response = await peopleService.getPeople()
    .catch(e => (ctx.exception = e));
  ctx.type = 'json';
  ctx.body = response.body;
  await next();
});

module.exports.handler = serverless(app);