import { Handler } from 'express';

export const home: Handler = (req, res) => {
  const cookie = req.header('Cookie') || '';

  res.setHeader('Cookie', 'server2=dayo; SameSite=Lax');
  res.render('home', { cookie, posted: false });
};

export const postHome: Handler = (req, res) => {
  const cookie = req.header('Cookie') || '';

  res.render('home', { cookie, posted: true });
};
