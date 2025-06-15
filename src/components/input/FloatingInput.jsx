import React from 'react';

const FloatingInput = ({
  label,
  placeholder = ' ',
  isRTL = false,
  leftIcon,
  rightIcon,
  type = 'text',
  className = '',
  inputClassName = '',
  labelClassName = '',
  iconClassName = '',
  ...props
}) => {
  // Calculate padding classes based on RTL and icon presence
  const getPaddingClasses = () => {
    const leftPadding = leftIcon ? '10' : '3';
    const rightPadding = rightIcon ? '10' : '3';
    return isRTL 
      ? `pr-${leftPadding} pl-${rightPadding}`
      : `pl-${leftPadding} pr-${rightPadding}`;
  };

  // Calculate label position based on RTL and icon presence
  const getLabelPosition = () => {
    const offset = isRTL ? rightIcon : leftIcon;
    return isRTL
      ? (rightIcon ? 'right-10' : 'right-3')
      : (leftIcon ? 'left-10' : 'left-3');
  };

  // Calculate icon positions based on RTL
  const getLeftIconPosition = () => 
    isRTL ? 'right-0 pr-3' : 'left-0 pl-3';

  const getRightIconPosition = () => 
    isRTL ? 'left-0 pl-3' : 'right-0 pr-3';

  return (
    <div className={`relative ${className}`}>
      {/* Input field */}
      <input
        type={type}
        className={`rounded-md border-gray-400 peer w-full border-b placeholder:text-transparent py-3 ${getPaddingClasses()} ${inputClassName}`}
        placeholder={placeholder}
        dir={isRTL ? 'rtl' : 'ltr'}
        {...props}
      />

      {/* Floating label */}
      <label
        className={`absolute ${getLabelPosition()} px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px] ${labelClassName}`}
      >
        {label}
      </label>

      {/* Left icon */}
      {leftIcon && (
        <div
          className={`absolute inset-y-0 ${getLeftIconPosition()} flex items-center pointer-events-none ${iconClassName}`}
        >
          {leftIcon}
        </div>
      )}

      {/* Right icon */}
      {rightIcon && (
        <div
          className={`absolute inset-y-0 ${getRightIconPosition()} flex items-center pointer-events-none ${iconClassName}`}
        >
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default FloatingInput;