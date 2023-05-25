import { Supermarket } from '@prisma/client';
import { AuthRequest } from '../models/AuthRequest';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Supermarket => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
