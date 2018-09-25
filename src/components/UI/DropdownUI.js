import React from 'react';

const DropdownUI = (field) => {
  const { meta: { touched, error }, children } = field;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className}>
      <label>{field.label}</label>
      <div>
        <select name="dropdown" {...field.input}>
          {children}
        </select>
      </div>
      <div className="text-help">
        {touched ? error : ''}
      </div>
    </div>
  );
};

export default DropdownUI;
