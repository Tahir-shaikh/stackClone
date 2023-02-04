import React from 'react'

export const TagsList = ({ tag }) => {
  return (
    <div className="tag">
        <h5>{tag.tagName}</h5>
        <p>{tag.tagDesc}</p>
    </div>
  )
}
