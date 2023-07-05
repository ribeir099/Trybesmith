export type Product = {
  id: number,
  name: string,
  amount: string,
  orderId: number,
};

export type NewProduct = {
  id: number,
  name: string,
  amount: string,
};

export type User = {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type NewUser = {
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type Order = {
  id: number,
  userId: number,
  productsIds: Array<number>,
};