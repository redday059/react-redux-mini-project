import React from 'react';

const TextInputUI = (field) => {
  const { meta: { touched, error }, maxLength } = field;
  const className = `form-group ${touched && error ? 'has-danger' : ''}`;

  return (
    <div className={className}>
      <label>{field.label}</label>
      <input
        className="form-control"
        type="text"
        autoComplete="off"
        maxLength={maxLength}
        {...field.input}
      />
      <div className="text-help">
        {touched ? error : ''}
      </div>
    </div>
  );
};

export default TextInputUI;
