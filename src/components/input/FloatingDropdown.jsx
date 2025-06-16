import React from 'react';

const FloatingDropdown = ({
  label,
  options = [],
  value,
  onChange,
  isRTL = false,
  leftIcon,
  rightIcon,
  className = '',
  selectClassName = '',
  labelClassName = '',
  iconClassName = '',
  placeholder = ' ',
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

  const hasValue = value !== undefined && value !== null && value !== '';

  return (
    <div className={`relative ${className}`}>
      {/* Select field */}
      <select
        value={value}
        onChange={onChange}
        className={`appearance-none rounded-md border-gray-400 peer w-full border-b py-3 bg-white ${getPaddingClasses()} ${selectClassName}`}
        dir={isRTL ? 'rtl' : 'ltr'}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Floating label */}
      <label
        className={`absolute ${getLabelPosition()} px-1 -translate-y-3 bg-white text-[14px] duration-100 ease-linear ${
          hasValue ? '-translate-y-3 text-[12px]' : 'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base'
        } text-gray-500 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-[12px] ${labelClassName}`}
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

      {/* Right icon (chevron) */}
      <div
        className={`absolute inset-y-0 ${getRightIconPosition()} flex items-center pointer-events-none ${iconClassName}`}
      >
        {rightIcon || (
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default FloatingDropdown;