import React, { useState } from 'react';

function UseCheckbox(initialValue = false, label = '') {
  const [ checked, setChecked ] = useState(initialValue);
  const onChange = e => {
    const {  checked } = e.target;
    setChecked(checked);
  }

  return {
    checked,
    onChange,
    label,
  }

}

export default UseCheckbox;
