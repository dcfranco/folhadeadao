import React, { useState } from 'react';

function Question9Form({ className, label }) {
  const [value, updateValue] = useState('');
  return (
    <div className={ className }>
      <label>{label}</label>
      <input type='text' value={value} onChange={({currentTarget}) => updateValue(currentTarget.value)} />
    </div>
  );
}

export default Question9Form;
