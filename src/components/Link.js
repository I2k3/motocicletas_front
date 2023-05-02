import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.description} ({link.marca})
      </div>
    </div>
  );
};

export default Link;