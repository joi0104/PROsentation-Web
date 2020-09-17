import React from 'react'

const style = {
  width: '20px',
  height: '20px',
  borderRadius: '20%',
  backgroundColor: 'lightgray',
  margin: '5px',
}

const ActiveBox = ({ active }) => {
  return (
    <div style={active ? { ...style, backgroundColor: 'red' } : style}></div>
  )
}

export default ActiveBox
