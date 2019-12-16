import { Handler } from 'express';
import { COOKIE_DOMAIN, SAMESITE, SERVER2_ORIGIN } from '../../../config';

export const home: Handler = (req, res) => {
  const cookie = req.header('Cookie') || '';

  res.setHeader('Set-Cookie', `server1=dayo; Domain=${COOKIE_DOMAIN}; SameSite=${SAMESITE}`);
  res.render('home', {
    cookie,
    posted: false,
    server2: SERVER2_ORIGIN,
  });
};

export const postHome: Handler = (req, res) => {
  const cookie = req.header('Cookie') || '';

  res.render('home', {
    cookie,
    posted: true,
    server2: SERVER2_ORIGIN,
  });
};
