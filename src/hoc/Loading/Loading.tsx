import React from "react";

const Loading = (Component: any) => {
  return (props: any) => {
    return (
      <div>
        <Component {...props} />
      </div>
    );
  };
};

export default Loading;
