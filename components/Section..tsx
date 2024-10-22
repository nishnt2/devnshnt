import React from 'react';

interface PropsType extends React.HTMLProps<HTMLDivElement> {}

const Section = ({ children, ...props }: PropsType) => {
  return (
    <div
      className="h-full w-full bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
"
      {...props}
    >
      {children}
    </div>
  );
};

export default Section;
