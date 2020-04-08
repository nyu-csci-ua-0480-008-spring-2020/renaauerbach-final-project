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
      view: <Home />,
   },
   {
      path: '/news',
      view: <News />,
   },
   {
      path: '/events',
      view: <Events />,
   },
   {
      path: '/memories',
      view: <Memories />,
   },
   {
      path: '/contact',
      view: <Contact />,
   },
   {
      path: '/account',
      view: <Account />,
   },
   {
      path: '/join',
      view: <Signup />,
   },
];

export default routes;
