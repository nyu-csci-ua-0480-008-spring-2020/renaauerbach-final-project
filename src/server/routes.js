import React from 'react';

import Home from '../views/Home';
import Events from '../views/Events';
import Memories from '../views/Memories';
import Contact from '../views/Contact';

const routes = [
   {
      path: '/',
      exact: true,
      title: 'Home',
      main: () => <Home />,
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
];

export default routes;
