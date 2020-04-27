import React, { Component } from 'react';

import ToggleBox from '../components/ToggleBox';
import Form from '../components/Form';

const ColumnWrapper = ({ columns, flexClass, form }) => {
   let flex = flexClass !== null ? 'flex ' + flexClass : null;
   return (
      <div className={'flex ' + flexClass}>
         {columns.map((col, index) => {
            let colClass = 'col ' + col.class;
            return (
               <div className={colClass} key={index}>
                  {col.img !== undefined ? (
                     <div className="image round fit">
                        <img src={col.img.src} alt={col.img.alt} />
                     </div>
                  ) : null}
                  <h3>{col.title}</h3>
                  <p>{col.text}</p>
                  {col.span.forEach((info) => {
                     return <span>info.details</span>;
                  })}
                  {col.toggle ? (
                     <ToggleBox action="show" button={col.toggleButton}>
                        <Form
                           className="toggle-form"
                           method="POST"
                           inputs={form.inputs}
                           submit={form.submit}
                           onClick={form.onSubmit}
                           onChange={form.onChange}
                        />
                     </ToggleBox>
                  ) : null}
               </div>
            );
         })}
      </div>
   );
};

export default ColumnWrapper;
