import React, { useState, useEffect } from 'react';
import bitcoinVendor from '../../../assets/bitcoinVendor.png';
import blockC from '../../../assets/blockC.png';
import evilC from '../../../assets/evilC.png';
import ninjaB from '../../../assets/ninjaB.png';
import './dropDownMenu.scss';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent default action
    setIsOpen((prev) => !prev); // Toggle the dropdown open state
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log('Document clicked');
      if (!event.target.closest('.dropdown-container') && isOpen) {
        console.log('Outside dropdown clicked');
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const options = [
    { src: bitcoinVendor, value: '1' },
    { src: blockC, value: '2' },
    { src: evilC, value: '3' },
    { src: ninjaB, value: '4' },
  ];

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown}>&#8744;</button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={(e) => {
                e.stopPropagation(); // Prevents the click from being propagated to document
                console.log(option.value);
                setIsOpen(false);
              }}
            >
              <img
                src={option.src}
                alt={option.label}
                style={{ width: 200, height: 40 }}
              />
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
