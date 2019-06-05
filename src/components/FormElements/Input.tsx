import PropTypes from "prop-types";
import React from "react";

interface IInputTypes {
  id: string;
  label: string;
  onChange?: any;
  type?: string;
  value?: string;
}

const Input = ({ id, label, onChange, type, value }: IInputTypes) => {
  return(
    <div className="field">
      <label className="label" htmlFor={id}>{label}</label>
      <div className="control">
        <input
          className="input"
          id={id}
          onChange={onChange}
          type={type}
          value={value}
          name={id} />
      </div>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
