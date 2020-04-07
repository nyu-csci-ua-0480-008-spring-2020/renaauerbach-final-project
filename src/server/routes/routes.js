import React from 'react';
import Home from '../../views/Home';
import News from '../../views/News';
import Events from '../../views/Events';
import Memories from '../../views/Memories';
import Contact from '../../views/Contact';
import Account from '../../views/Account';

const routes = [
  {
    path: '/',
    component: Home,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/news',
    component: News,
    main: () => <h2>News</h2>,
  },
  {
    path: '/events',
    component: Events,
    main: () => <h2>Upcoming Events</h2>,
  },
  {
    path: '/memories',
    component: Memories,
    main: () => <h2>Memories</h2>,
  },
  {
    path: '/contact',
    component: Contact,
    main: () => <h2>Contact Us</h2>,
  },
  {
    path: '/account',
    component: Account,
    main: () => <h2>My Account</h2>,
  },
];

export default routes;
