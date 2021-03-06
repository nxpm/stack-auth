import * as Joi from 'joi'

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test'),
  HOST: Joi.string().alphanum().default('localhost'),
  PORT: Joi.number().default(3000),
  API_URL: Joi.string().default(`http://${process.env.HOST || 'localhost'}:${process.env.PORT}/api`),
})
