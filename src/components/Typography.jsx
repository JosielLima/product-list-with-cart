import React from 'react';

const variantStyles = {
  'preset-1': 'text-[56px] leading-[120%] font-bold',
  'preset-2': 'text-[24px] leading-[125%] font-bold',
  'preset-3': 'text-[16px] leading-[150%] font-semibold',
  'preset-4': 'text-[14px] leading-[150%] font-normal',
  'preset-4-bold': 'text-[14px] leading-[150%] font-semibold',
};

const Typography = ({ variant, children, className = '' }) => {
  const variantClasses = variantStyles[variant] || '';

  return (
    <div className={`font-red-hat tracking-[0px] ${variantClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Typography;