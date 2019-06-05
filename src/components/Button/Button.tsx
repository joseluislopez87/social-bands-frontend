import React from "react";

interface IButton {
  children: string;
}

const Button = ({ children }: IButton) => {
  return(
    <div className="field is-grouped">
      <button className="button is-link is-fullwidth">{children}</button>
    </div>
  );
};

export default Button;
