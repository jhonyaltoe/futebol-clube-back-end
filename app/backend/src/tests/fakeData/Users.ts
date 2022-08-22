import {  IUser } from '../../database/entities';

const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInVzZXJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjExODU0NjV9.nw-WFr0Uo0V_T_A0Kf78PdBXezv56Vw0NfiqNJTkvgk";


const Admin: IUser = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
};

// const User: IUser = {
//   id: 2,
//   username: 'User',
//   role: 'user',
//   email: 'user@user.com',
//   password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'
// };

export const getOne = {
  mock: Admin,
  request: {
    authorization: fakeToken
  },
  response: Admin
}

export const post = {
  mock: Admin,
  request: {
    email: Admin.email,
    password: 'secret_admin'
  },
  response: {
    token: fakeToken
  }
}

