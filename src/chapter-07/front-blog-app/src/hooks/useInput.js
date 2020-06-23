import React, { useState } from 'react';

function UseInput(initialValue = '', placeholder = '') {
  const [ value, setValue ] = useState(initialValue);

  const onChange = event => {
    const { value } = event.target;
    setValue(value);
  }

  return {
    value,
    placeholder,
    onChange
  }

}

export default UseInput;
