import React from 'react';
import Home from '../../views/Home';
import News from '../../views/News';
import Events from '../../views/Events';
import Memories from '../../views/Memories';
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
      path: '/news',
      main: () => <News />,
   },
   {
      path: '/events',
      main: () => <Events />,
   },
   {
      path: '/memories',
      main: () => <Memories />,
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
