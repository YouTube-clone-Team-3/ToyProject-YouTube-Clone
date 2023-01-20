import React from 'react';
import styles from './TabItem.module.scss';

const TabItem = ({ svgPath, title, svgYoutube }) => {
  return (
    <div className={styles.tab}>
      {svgPath ? (
        <svg>
          <path d={svgPath}></path>
        </svg>
      ) : (
        <svg dangerouslySetInnerHTML={{ __html: svgYoutube }}></svg>
      )}
      <span className={styles.tabTitle}>{title}</span>
    </div >
  )
}

export default TabItem