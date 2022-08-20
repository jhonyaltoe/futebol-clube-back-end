import * as Joi from 'joi';
import HandleThrowError from '../ErrorHandle';

const ALL_FILDEDS_MUST_BE_FILLED = 'All fields must be filled';

const loginShema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Email must be valid',
      'any.required': ALL_FILDEDS_MUST_BE_FILLED,
      'string.empty': ALL_FILDEDS_MUST_BE_FILLED,
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': 'The password must be at least 6 characters long',
      'any.required': ALL_FILDEDS_MUST_BE_FILLED,
      'string.empty': ALL_FILDEDS_MUST_BE_FILLED,
    }),
});

const joiValidateLogin = (login: { email: string, senha: string }): void => {
  const { error } = loginShema.validate(login);
  if (error) HandleThrowError(error.message, 400);
};

export default joiValidateLogin;
