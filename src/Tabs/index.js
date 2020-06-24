import React, { Fragment, useState, useEffect, useRef } from 'react';
import TabContent from './TabContent';
import TabHeader from './TabHeader';
import TabControl from './TabControl';
import TabMedia from './TabMedia';
import './index.css';

export default function Tabs({ tabs }) {
  const headers = tabs.map(tab => ({ header: tab.header, _id: tab._id }));
  let [currentTab, setCurrentTab] = useState(undefined);
  let [zoomedMedia, setZoomedMedia] = useState(undefined);
  let headerTitlesContainer = useRef({});
  let [isLeftArrowHidden, setIsLeftArrowHidden] = useState(true);
  let [isRightArrowHidden, setIsRightArrowHidden] = useState(false);

  useEffect(() => {
    setCurrentTab(tabs[0]._id);
    headerTitlesContainer.current.addEventListener('scroll', onHeaderTitlesContainerScroll);

    return () => {
      headerTitlesContainer.current.removeEventListener('scroll', onHeaderTitlesContainerScroll);
    };
  }, []);

  const onHeaderTitlesContainerScroll = event => {
    const scrollLeft = event.srcElement.scrollLeft;
    const scrollWidth = event.srcElement.scrollWidth;
    if (scrollLeft === 0) {
      setIsLeftArrowHidden(true);
    } else {
      setIsLeftArrowHidden(false);
    }

    if (scrollWidth - scrollLeft === event.srcElement.offsetWidth) {
      setIsRightArrowHidden(true);
    } else {
      setIsRightArrowHidden(false);
    }
  };

  const isActive = tabId => {
    return tabId === currentTab;
  };

  const selectCurrentTab = tabId => () => {
    setCurrentTab(tabId);
  };

  const zoomMedia = media => () => {
    setZoomedMedia(media);
  };

  const zoomMediaOut = () => {
    setZoomedMedia(undefined);
  };

  const onControlClick = position => () => {
    headerTitlesContainer.current.scrollLeft = position;
  };

  const headerContainerScrollWidth = headerTitlesContainer.current.scrollWidth;

  return (
    <Fragment>
      <div className="tabs">
        <div className="tabs__container">
          <div className="tabs__header-container">
            <div className="tabs__header-titles-container" ref={headerTitlesContainer}>
              {headers.map(header => (
                <TabHeader
                  onClick={selectCurrentTab}
                  key={header._id}
                  header={header}
                  isActive={isActive(header._id)}
                />
              ))}
            </div>
            <TabControl
              onLeftClick={onControlClick(0)}
              onRightClick={onControlClick(headerContainerScrollWidth)}
              isLeftArrowHidden={isLeftArrowHidden}
              isRightArrowHidden={isRightArrowHidden}
            />
          </div>

          {tabs.map(tab => (
            <TabContent key={tab._id} isActive={isActive(tab._id)} tab={tab} onMediaClick={zoomMedia} />
          ))}
        </div>
      </div>
      {zoomedMedia ? <TabMedia show={true} onClose={zoomMediaOut} zoomedMedia={zoomedMedia}></TabMedia> : null}
    </Fragment>
  );
}
