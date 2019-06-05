import React from "react";

interface IButton {
  children: string;
}

const Button = ({ children }: IButton) => {
  return(
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link">{children}</button>
      </div>
    </div>
  );
};

export default Button;
