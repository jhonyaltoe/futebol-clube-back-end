import * as Joi from 'joi';
import HandleThrowError from '../ErrorHandle';

const loginShema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'The field email should be valid',
      'any.required': 'All fields must be filled',
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters long',
      'any.required': 'All fields must be filled',
    }),
});

const joiValidateLogin = (login: { email: string, senha: string }): void => {
  const { error } = loginShema.validate(login);
  if (error) HandleThrowError(error.message, 400);
};

export default joiValidateLogin;
