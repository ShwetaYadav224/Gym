import React from 'react'

const SectionHeaders = ({icon, title ,className}) => {
  return (
    <div>
        <div className={`section_head ${className}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
      
    </div>
  )
}

export default SectionHeaders
