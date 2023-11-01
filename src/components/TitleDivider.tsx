import React from 'react'

const TitleDivider = ({name}) => {
  return (
    <>
        <div className="emaar-title light">
          <h1 style={{fontSize: "1.1rem"}}>{name}</h1>
          <div className="vertical-divider"></div>
        </div>
    </>
  )
}

export default TitleDivider