import React from 'react';

export default function TabHeader({ header, onClick, isActive }) {
  return (
    <span onClick={onClick(header._id)} className={`tabs__header ${isActive ? 'tabs__header--active' : ''}`}>
      {header.header}
    </span>
  );
}
