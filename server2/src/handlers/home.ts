import { Handler } from 'express';
import { SAMESITE, SERVER1_ORIGIN } from '../../../config';

export const home: Handler = (req, res) => {
  const cookie = req.header('Cookie') || '';

  res.setHeader('Set-Cookie', `server2=dayo; SameSite=${SAMESITE}`);
  res.render('home', {
    cookie,
    posted: false,
    server1: SERVER1_ORIGIN,
  });
};

export const postHome: Handler = (req, res) => {
  const cookie = req.header('Cookie') || '';

  res.render('home', {
    cookie,
    posted: true,
    server1: SERVER1_ORIGIN,
  });
};
