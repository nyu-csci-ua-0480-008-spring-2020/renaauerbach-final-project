import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ link, text }) => {
   return (
      <NavLink to={link} className="button">
         {text}
      </NavLink>
   );
};

export default Button;

