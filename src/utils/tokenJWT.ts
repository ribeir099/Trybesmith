import { sign } from 'jsonwebtoken';

const secretkey = process.env.JWT_SECRET || 'segredo';

const createToken = (payload: object) => {
  const token = sign(
    payload,
    secretkey,
    {
      expiresIn: '1d',
      algorithm: 'HS256',
    },
  );

  return token;
};

export default createToken;