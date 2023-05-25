import { Supermarket } from '@prisma/client';

export interface AuthRequest extends Request {
  user: Supermarket;
}
