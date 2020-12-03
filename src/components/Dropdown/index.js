/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import {
  DropdownMenuWrapper,
  DropdownMenuItemsWrapper,
  DropdownMenuItemWrapper,
} from './dropdown.style';

const DropdownMenu = (props) => {
  const [menuState, setMenuState] = useState({
    show: false,
  });

  const handleToggle = () => {
    setMenuState((prevState) => ({
      ...menuState,
      show: !prevState.show,
    }));
  };

  const handleDocumentClick = () => {
    if (menuState.show) {
      handleToggle();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  });

  const {
    content,
    dropdownItems,
    dropdownDirection,
    className,
  } = props;

  return (
    <DropdownMenuWrapper onClick={(e) => e.stopPropagation()}>
      <span onClick={handleToggle}>{content}</span>
      {menuState.show && (
        <DropdownMenuItemsWrapper
          className={className}
          dropdownDirection={dropdownDirection}
        >
          {dropdownItems &&
            dropdownItems.map((item, index) => (
              <DropdownMenuItemWrapper
                key={index}
                onClick={handleToggle}
              >
                {item}
              </DropdownMenuItemWrapper>
            ))}
        </DropdownMenuItemsWrapper>
      )}
    </DropdownMenuWrapper>
  );
};

export default DropdownMenu;
