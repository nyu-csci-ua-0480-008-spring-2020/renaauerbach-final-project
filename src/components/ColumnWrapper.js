import React from 'react';

import ToggleBox from '../components/ToggleBox';
import Form from '../components/Form';

// Dynamically imported for project purposes
import img from '../assets/img/event_img.png';

const ColumnWrapper = ({ event, columns, form }) =>
   columns.map((col, index) => {
      let colClass = 'col ' + col.class;
      return (
         <div className={colClass} key={index}>
            {col.img !== undefined ? (
               <div className="image round fit event">
                  {/* <img src={col.img.src} alt={col.img.alt} /> */}
                  <img src={img} alt={col.img.alt} />
               </div>
            ) : null}
            <h3 className="data title">{col.title}</h3>
            {col.span.map((info, i) => {
               return (
                  <span className="details" key={i}>
                     {info.details}
                  </span>
               );
            })}
            <p>{col.text}</p>
            {col.toggle ? (
               <ToggleBox action="show" button={col.toggleButton}>
                  <Form
                     className="toggle-form"
                     method={form.method}
                     inputs={form.inputs}
                     submit={form.submit}
                     onClick={form.onSubmit}
                     onChange={form.onChange}
                  />
               </ToggleBox>
            ) : null}
         </div>
      );
   });

export default ColumnWrapper;
