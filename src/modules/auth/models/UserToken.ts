import { Supermarket } from '@prisma/client';

export interface UserToken {
  user: Partial<Supermarket>;
  token: string;
}
