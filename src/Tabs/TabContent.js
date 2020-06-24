import React, { useEffect, useRef } from 'react';

export default function TabContent({ tab, isActive, onMediaClick }) {
  const ref = useRef({});
  useEffect(() => {
    requestAnimationFrame(() => {
      if (isActive) {
        ref.current.className = ref.current.className + ' tabs__content--active';
      }
    });
  }, [isActive]);

  return (
    <div ref={ref} className={`tabs__content ${isActive ? 'show' : ''}`}>
      <div dangerouslySetInnerHTML={{ __html: tab.content }}></div>
      <div className="tabs__content__media-container">
        {tab.media.map((media, index) => {
          return (
            <img
              alt={media.alt}
              key={index}
              src={media.url}
              onClick={onMediaClick(media)}
              className={`tabs__content__media`}
            />
          );
        })}
      </div>
    </div>
  );
}
