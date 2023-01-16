import React from 'react'
import './TabItem.module.scss'

const TabItem = ({ svgPath, title }) => {
  return (
    <div>
      <svg>
        <path d={svgPath}></path>
      </svg>
      <span>{title}</span>
    </div >
  )
}

export default TabItem