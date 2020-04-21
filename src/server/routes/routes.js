import React from 'react';
import Home from '../../views/Home';
import Events from '../../views/Events';
import Contact from '../../views/Contact';
import Account from '../../views/Account';
import Signup from '../../views/Signup';

const routes = [
   {
      path: '/',
      exact: true,
      main: () => <Home />,
   },
   {
      path: '/events',
      main: () => <Events />,
   },
   {
      path: '/contact',
      main: () => <Contact />,
   },
   {
      path: '/account',
      main: () => <Account />,
   },
   {
      path: '/join',
      main: () => <Signup />,
   },
];

export default routes;
