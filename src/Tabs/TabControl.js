import React from 'react';

export default function TabControl({ isLeftArrowHidden, isRightArrowHidden, onLeftClick, onRightClick }) {
  return (
    <div className="tabs__controls-container">
      <div
        onClick={onLeftClick}
        className={`tabs__controls__arrow tabs__controls__arrow--prev ${isLeftArrowHidden ? 'hidden' : ''}`}
      >
        <i>&#8592;</i>
      </div>
      <div
        onClick={onRightClick}
        className={`tabs__controls__arrow tabs__controls__arrow--next ${isRightArrowHidden ? 'hidden' : ''}`}
      >
        <i>&#8594;</i>
      </div>
    </div>
  );
}
