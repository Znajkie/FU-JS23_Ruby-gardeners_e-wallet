import React, { useState, useEffect } from 'react';
// vendor
import bitcoinVendor from '../../../assets/vendor/bitcoinVendor.png';
import blockC from '../../../assets/vendor/blockC.png';
import evilC from '../../../assets/vendor/evilC.png';
import ninjaB from '../../../assets/vendor/ninjaB.png';
// logo
import bitLogo from '../../../assets/logo/BitcoinLogo.svg';
import blockCLogo from '../../../assets/logo/blockC.svg';
import ninjaBLogo from '../../../assets/logo/ninjaB.svg';
import evilCLogo from '../../../assets/logo/evilC.svg';
import './dropDownMenu.scss';

const DropdownMenu = ({ setBgColor, setLogo, setVendor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenVendor, setChosenVendor] = useState('');

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev); // Toggle the dropdown open state
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown') && isOpen) {
        setIsOpen(false);
      }
    };
   
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const vendor = [
    { src: bitcoinVendor, value: '1', color: '#ffb342', logo: bitLogo },
    { src: blockC, value: '2', color: '#7E50E3', logo: blockCLogo },
    { src: evilC, value: '3', color: '#E33050', logo: ninjaBLogo },
    { src: ninjaB, value: '4', color: '#323232', logo: evilCLogo },
  ];

  return (
    <div className="dropdown">
      <button id="vendor" onClick={toggleDropdown}>
        <img src={chosenVendor}/>&#8744;
      </button>
      {isOpen && (
        <ul>
          {vendor.map((vendor, index) => (
            <li
              key={index}
              onClick={(e) => {
                e.stopPropagation(); // Prevents the click from being propagated to document
                setLogo(vendor.logo);
                setBgColor(vendor.color);
                setVendor(vendor.value);
                setChosenVendor(vendor.src);
                setIsOpen(false);
              }}
            >
              <img
                src={vendor.src}
                alt={vendor.label}
                style={{ width: 200, height: 40 }}
              />
              {vendor.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
