import { IUser } from '../../database/entities';

const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInVzZXJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjExODU0NjV9.nw-WFr0Uo0V_T_A0Kf78PdBXezv56Vw0NfiqNJTkvgk";

const Admin: IUser = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
};

const payload = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
}

export const login = {
  mock: payload,
  path: '/login/validate',
  req: {
    authorization: fakeToken
  },
  res: Admin.role,
}

export const loginValidate = {
  mock: Admin,
  req: {
    email: Admin.email,
    password: 'secret_admin'
  },
  path: '/login',
  res: {
    token: fakeToken
  }
}

