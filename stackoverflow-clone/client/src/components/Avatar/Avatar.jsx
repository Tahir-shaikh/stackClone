import React from 'react'

export const Avatar = ({children, backgroundColor, px, py,
  padding,
  color,
  borderRadius,
  fontSize,
  cursor
  }) => {
const style = {
  backgroundColor,
  padding:`${py} ${px}`,
  color: color || 'black',
  borderRadius,
  fontSize,
  textAlign: "center",
  cursor: cursor || null,
  textDecoration: "none"
}

  return (
    <div style={style}>
        {children}
    </div>
  )
}
