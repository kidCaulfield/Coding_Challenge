import React from 'react';

const Field =  ({children, value, label})  => {

  return(
    <div className="Field">
      <div className="label">
        <label htmlFor="something">{label}</label>
      </div>
      <div className="input">
        <input type="text" name={'hello'} defaultValue={value} />
      </div>
    </div>
  )
}

export default Field;