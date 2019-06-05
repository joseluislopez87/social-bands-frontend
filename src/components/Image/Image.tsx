import React from "react";

const Image = (props: any) => {
  return (
    <figure className="image is-128x128">
      <img className="is-rounded" src={props.src} alt="The user" />
    </figure>
  );
};

export default Image;
