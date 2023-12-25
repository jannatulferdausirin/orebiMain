import React from 'react';

const Anchor = ({className,href,text}) => {
    return (
      <a className={className} href={href}>{text}</a>
    );
};

export default Anchor;