export interface User {
  name: string,
  age?: number | string,
  description?: string,
  role?: string,
  avatar?: string,
  id: number | undefined,
  password: string,
}
