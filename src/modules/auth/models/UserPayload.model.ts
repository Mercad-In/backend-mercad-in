export interface UserPayload {
  sub: string;
  name: string;
  email: string;
  cnpj: string;
  iat?: number;
  exp?: number;
}
