import { Secret, SignOptions, sign } from 'jsonwebtoken';
import 'dotenv/config';

const options: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret: Secret = process.env.JWT_SECRET || 'jwt_secret';

function jwtGenerator(payload: string | object | Buffer) {
  const token = sign(payload, secret, options);
  return token;
}

export default jwtGenerator;
