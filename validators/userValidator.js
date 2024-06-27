const Joi = require('joi');

const userSchemaTest = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  age: Joi.number().integer().positive().required(),
  city: Joi.string().required(),
  zipCode: Joi.string().pattern(/^\d{6}$/).required()
});

const userIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/).required();

const zipSchema = Joi.string().pattern(/^\d{6}$/);
const emailSchema = Joi.string().email();






module.exports = {
  userSchemaTest,
  userIdSchema,
  zipSchema,
  emailSchema
};