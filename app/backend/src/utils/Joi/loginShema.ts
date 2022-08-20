import * as Joi from 'joi';
import HandleThrowError from '../ErrorHandle';

const loginShema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'O campo email deve ser válido!',
      'any.required': 'O email é obrigatório!',
    }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': 'A senha deve ter no mínimo 6 caracteres!',
      'any.required': 'A senha é obrigatória!',
    }),
});

const joiValidateLogin = (login: { email: string, senha: string }): void => {
  const { error } = loginShema.validate(login);
  if (error) HandleThrowError(error.message, 400);
};

export default joiValidateLogin;
