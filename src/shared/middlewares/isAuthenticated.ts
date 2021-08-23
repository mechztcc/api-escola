import { NextFunction, Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import { verify } from 'jsonwebtoken';
import  authConfig from '@config/auth';

interface ITokenPayload { 
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(request: Request, response: Response, next: NextFunction): void {

  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError('JWT Token is missing.');
  }

   // Bearer huehdkaksu12312jjdkau2312
   const [bearer, token] = authHeader.split(' ');

  try {
    // Change type os request in src/@types
    const decodedToken = verify(token, authConfig.jwt.secret);
    const { sub } = decodedToken as ITokenPayload;
    request.user = { id: sub }
    return next();
  } catch (error) {
    throw new AppError('Invalid JWT Token.');
  }


}