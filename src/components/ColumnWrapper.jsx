import React from 'react';

import ToggleBox from '../components/ToggleBox';
import Form from '../components/Form';

const ColumnWrapper = ({ columns, flexClass, form }) => {
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
         })}
      </div>
   );
};

export default ColumnWrapper;
