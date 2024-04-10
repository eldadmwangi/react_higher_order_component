import React, { useState } from "react";

export const withLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false)
    }, 1000)

    return (
      <div>
        {loading ? <p>Loading ...</p> : <WrappedComponent setLoading={setLoading} {...props} />}
      </div>
    );
  };
};
