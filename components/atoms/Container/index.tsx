import React, { HTMLAttributes } from 'react';

export const Container: React.FC<HTMLAttributes<HTMLElement>> = (props) => {
  const className = `${props.className} container p-32 w-full mx-auto flex items-center justify-between px-6`;
  return (
    <section {...props} className={className}>
      {props.children}
    </section>
  );
};
