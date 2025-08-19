import React, { type ReactElement, type ReactNode } from "react";

interface IconTextProps {
  children: ReactNode;
  icon: ReactElement<{ className: string }>;
}

const IconText = ({ icon, children }: IconTextProps) => {
  const iconWithClass = React.cloneElement(icon, { className: "icon" });

  return (
    <span className="icon-text">
      {iconWithClass}
      {children}
    </span>
  );
};

export default IconText;
